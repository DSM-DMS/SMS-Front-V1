import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import useLoading from "./useLoading";
import useLoginInputs from "./useLoginInputs";
import useLoginToggle from "./useLoginToggle";

import { getStudentInfoSaga } from "../../modules/action/header";
import { postLoginStudent } from "../api/Login";
import {
  PASSWORD_NOT_MATCHED,
  UNABLE_FORM,
  CAN_NOT_FOUND_ACCOUNT,
  ResStudentLogin
} from "../api/payloads/Login";
import { getAxiosError } from "../utils";

interface ErrorState {
  status: boolean;
  message: string;
}

const initErrorState: ErrorState = {
  status: false,
  message: ""
};

const useLogin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, startLoading, endLoading] = useLoading();
  const [id, pw, handleId, handlePw] = useLoginInputs();
  const [showPw, autoLogin, toggleEye, toggleAutoLogin] = useLoginToggle();
  const [errorMessage, setErrorMessage] = useState<ErrorState>(initErrorState);

  const errorMessageMacro = (message: string) => {
    setErrorMessage({
      status: true,
      message
    });
  };

  const storageHandler = useCallback(
    ({ access_token, student_uuid }: ResStudentLogin) => {
      const MILLISECOND_TO_HOUR = 3600000;
      const now = Date.now();

      if (autoLogin) {
        localStorage.removeItem("expiration");
      } else {
        localStorage.setItem("expiration", `${now + MILLISECOND_TO_HOUR}`);
      }
      localStorage.setItem("access_token", access_token);
      localStorage.setItem(`uuid`, student_uuid);
    },
    [autoLogin]
  );

  const getStudentUuid = useCallback(async () => {
    const { data } = await postLoginStudent(id, pw);
    storageHandler(data);
    return data.student_uuid;
  }, [id, pw]);

  const studentLogin = useCallback(async () => {
    const teacherUuid = await getStudentUuid();
    dispatch(getStudentInfoSaga(teacherUuid));
  }, [id, pw]);

  const login = useCallback(async () => {
    if (id.length < 4 || id.length > 16 || pw.length < 4 || pw.length > 16) {
      errorMessageMacro(UNABLE_FORM);
      return;
    }

    startLoading();
    try {
      await studentLogin();
      history.push("/");
    } catch (err) {
      const { status, code } = getAxiosError(err);

      if (status === 409 && code === -401) {
        errorMessageMacro(CAN_NOT_FOUND_ACCOUNT);
      } else if (status === 409 && code === -402) {
        errorMessageMacro(PASSWORD_NOT_MATCHED);
      }

      endLoading();
    }
  }, [id, pw, autoLogin]);

  return [
    showPw,
    errorMessage,
    loading,
    handleId,
    handlePw,
    toggleEye,
    toggleAutoLogin,
    login
  ] as const;
};

export default useLogin;
