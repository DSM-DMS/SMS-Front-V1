import React, { ChangeEvent, FC, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Login } from "../../components";
import { postLoginStudent } from "../../lib/api/Login";
import { postLoginTeacher } from "../../lib/api/Login";
import {
  PASSWORD_NOT_MATCHED,
  UNABLE_FORM,
  UNAUTHORIZED
} from "../../lib/api/payloads/Login";
import {
  getStudentInfoSaga,
  getTeacherInfoSaga,
  STUDENT,
  TEACHER,
  UserType
} from "../../modules/action/header";
import { getTimetablesSaga } from "../../modules/action/main";
import { pageMove } from "../../modules/action/page";

interface Props {}

export interface ErrorState {
  status: boolean;
  message: string;
}

const initErrorState = {
  status: false,
  message: ""
};

const LoginContainer: FC<Props> = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [autoLogin, setAutoLogin] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<ErrorState>(initErrorState);
  const userType: UserType = history.location.pathname.includes("admin")
    ? TEACHER
    : STUDENT;

  const loginFilter = (str: string) => str.length >= 4 && str.length <= 16;

  const errorMessageMacro = (
    message:
      | typeof PASSWORD_NOT_MATCHED
      | typeof UNABLE_FORM
      | typeof UNAUTHORIZED
  ) => {
    setErrorMessage({
      status: true,
      message
    });
  };

  const storageHandler = useCallback(
    (type: UserType, autoLogin: boolean, accessToken: string, uuid: string) => {
      const MillisecondOfHour = 3600000;

      if (autoLogin) localStorage.removeItem("expiration");
      else
        localStorage.setItem("expiration", `${Date.now() + MillisecondOfHour}`);
      localStorage.setItem("access_token", accessToken);
      localStorage.setItem(`uuid`, uuid);
      localStorage.removeItem(`${type === STUDENT ? TEACHER : STUDENT}_uuid`);
    },
    []
  );

  const getStudentLoginInfo = useCallback(
    async (id: string, pw: string, autoLogin: boolean) => {
      const { data } = await postLoginStudent(id, pw);
      const { access_token, student_uuid } = data;

      storageHandler(STUDENT, autoLogin, access_token, student_uuid);

      return student_uuid;
    },
    []
  );

  const getTeacherLoginInfo = useCallback(
    async (id: string, pw: string, autoLogin: boolean) => {
      const { data } = await postLoginTeacher(id, pw);
      const { access_token, teacher_uuid } = data;

      storageHandler(TEACHER, autoLogin, access_token, teacher_uuid);

      return teacher_uuid;
    },
    []
  );

  const studentLogin = async (id: string, pw: string, autoLogin: boolean) => {
    const studentUuid = await getStudentLoginInfo(id, pw, autoLogin);
    dispatch(getStudentInfoSaga(studentUuid));
  };

  const teacherLogin = async (id: string, pw: string, autoLogin: boolean) => {
    const teacherUuid = await getTeacherLoginInfo(id, pw, autoLogin);
    dispatch(getTeacherInfoSaga(teacherUuid));
  };

  const login = useCallback(
    async (id: string, pw: string, autoLogin: boolean) => {
      const today = new Date();

      if (!(loginFilter(id) && loginFilter(pw))) {
        errorMessageMacro(UNABLE_FORM);
        return;
      }

      try {
        if (userType === STUDENT) {
          await studentLogin(id, pw, autoLogin);
        } else {
          await teacherLogin(id, pw, autoLogin);
        }

        setErrorMessage(initErrorState);
        dispatch(pageMove("홈"));

        history.push("./home");
      } catch (err) {
        const data = err?.response?.data,
          status = data?.status,
          code = data?.code;

        if (
          status === 404 ||
          (status === 409 && (code === -401 || code === -411))
        ) {
          errorMessageMacro(UNAUTHORIZED);
        } else if (status === 409 && (code === -402 || code === -412)) {
          errorMessageMacro(PASSWORD_NOT_MATCHED);
        }
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
