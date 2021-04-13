import React, { ChangeEvent, FC, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Login } from "../../components";
import { postLoginStudent } from "../../lib/api/Login";
import { getClubUuidFromLeader } from "../../lib/api/Management";
import {
  CAN_NOT_FOUND_ACCOUNT,
  PASSWORD_NOT_MATCHED,
  UNABLE_FORM
} from "../../lib/api/payloads/Login";
import { getAxiosError } from "../../lib/utils";
import { getStudentInfoSaga, setClubUuid } from "../../modules/action/header";
import WithLoadingContainer, {
  LoadingProps
} from "../Loading/WithLoadingContainer";

interface Props extends LoadingProps {}

export interface ErrorState {
  status: boolean;
  message: string;
}

const initErrorState = {
  status: false,
  message: ""
};

const LoginContainer: FC<Props> = ({ loading, startLoading, endLoading }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [autoLogin, setAutoLogin] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<ErrorState>(initErrorState);

  const errorMessageMacro = (message: string) => {
    setErrorMessage({
      status: true,
      message
    });
  };

  const storageHandler = useCallback(
    (autoLogin: boolean, accessToken: string, uuid: string) => {
      const MillisecondINHour = 3600000;

      if (autoLogin) {
        localStorage.removeItem("expiration");
      } else {
        localStorage.setItem("expiration", `${Date.now() + MillisecondINHour}`);
      }
      localStorage.setItem("access_token", accessToken);
      localStorage.setItem(`uuid`, uuid);
    },
    []
  );

  const getClubUuid = async (uuid: string) => {
    try {
      const res = await getClubUuidFromLeader(uuid);
      localStorage.setItem("club_uuid", res.data.club_uuid);
    } catch (err) {
      const { status } = getAxiosError(err);

      if (status === 409) {
        localStorage.removeItem("club_uuid");
        dispatch(setClubUuid(""));
      }
    }
  };

  const getStudentLoginInfo = useCallback(
    async (id: string, pw: string, autoLogin: boolean) => {
      const { data } = await postLoginStudent(id, pw);
      const { access_token, student_uuid } = data;

      storageHandler(autoLogin, access_token, student_uuid);

      return student_uuid;
    },
    []
  );

  const studentLogin = async (id: string, pw: string, autoLogin: boolean) => {
    const studentUuid = await getStudentLoginInfo(id, pw, autoLogin);
    await getClubUuid(studentUuid);
    dispatch(getStudentInfoSaga(studentUuid));
  };

  const login = useCallback(
    async (id: string, pw: string, autoLogin: boolean) => {
      if (id.length < 4 || id.length > 16 || pw.length < 4 || pw.length > 16) {
        errorMessageMacro(UNABLE_FORM);
        return;
      }

      startLoading();
      try {
        await studentLogin(id, pw, autoLogin);
        setErrorMessage(initErrorState);
        history.push("./home");
      } catch (err) {
        const { status, code } = getAxiosError(err);

        if (status === 409 && code === -401) {
          errorMessageMacro(CAN_NOT_FOUND_ACCOUNT);
        } else if (status === 409 && code === -402) {
          errorMessageMacro(PASSWORD_NOT_MATCHED);
        }

        setPw("");
        endLoading();
      }
    },
    []
  );

  const handleId = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setId(e.currentTarget.value);
  }, []);

  const handlePw = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPw(e.currentTarget.value);
  }, []);

  const toggleAutoLogin = useCallback(() => {
    setAutoLogin(prev => !prev);
  }, [autoLogin]);

  return (
    <Login
      loading={loading}
      id={id}
      pw={pw}
      autoLogin={autoLogin}
      errorMessage={errorMessage}
      handleId={handleId}
      handlePw={handlePw}
      toggleAutoLogin={toggleAutoLogin}
      login={login}
    />
  );
};

export default WithLoadingContainer(LoginContainer);
