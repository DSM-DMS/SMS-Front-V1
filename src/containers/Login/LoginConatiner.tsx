import React, { ChangeEvent, FC, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Login } from "../../components";
import { stateType } from "../../modules/reducer";
import { postLoginStudent } from "../../lib/api";
import {
  PASSWORD_NOT_MATCHED,
  UNABLE_FORM,
  UNAUTHORIZED
} from "../../lib/api/payloads/Login";

interface Props {}

export interface ErrorState {
  status: boolean;
  message: string;
}

const initErrorState = {
  status: false,
  message: ""
};

const filtering = (str: string) => str.length >= 4 && str.length <= 16;

const LoginContainer: FC<Props> = () => {
  const history = useHistory(),
    { type } = useSelector((state: stateType) => state.header),
    [id, setId] = useState<string>(""),
    [pw, setPw] = useState<string>(""),
    [autoLogin, setAutoLogin] = useState<boolean>(false),
    [errorMessage, setErrorMessage] = useState<ErrorState>(initErrorState);

  const login = useCallback(async (id, pw, autoLogin) => {
    if (!(filtering(id) && filtering(pw))) {
      setErrorMessage({
        status: true,
        message: UNABLE_FORM
      });
    }

    try {
      const {
        data: { access_token, student_uuid }
      } = await postLoginStudent(id, pw);

      console.log(autoLogin);
      if (!autoLogin) {
        localStorage.setItem("expiration", `${new Date().getTime()}`);
      } else {
        localStorage.removeItem("expiration");
      }

      localStorage.setItem("access_token", access_token);
      localStorage.setItem("student_uuid", student_uuid);

      setErrorMessage(initErrorState);

      history.push("/home");
    } catch (err) {
      const data = err.response.data,
        status = data.status,
        code = data.code;

      if (status === 409 && code === -401) {
        setErrorMessage({
          status: true,
          message: UNAUTHORIZED
        });
      } else if (status === 409 && code === -402) {
        setErrorMessage({
          status: true,
          message: PASSWORD_NOT_MATCHED
        });
      }
    }
  }, []);

  const handleId = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setId(e.currentTarget.value);
  }, []);

  const handlePw = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPw(e.currentTarget.value);
  }, []);

  const toggleAutoLogin = useCallback(() => {
    setAutoLogin((prev) => !prev);
  }, [autoLogin]);

  history.listen((location, action) => {
    console.log(location, action);
  });

  return (
    <Login
      type={type}
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

export default LoginContainer;
