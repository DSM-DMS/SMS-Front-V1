import React, { ChangeEvent, FC, useCallback, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import { Login } from "../../components";
import { postLoginStudent } from "../../lib/api";
import {
  getStudentInfo,
  getTeacherInfo,
  postLoginTeacher
} from "../../lib/api/Login";
import {
  PASSWORD_NOT_MATCHED,
  ResStudentInfo,
  ResTeacherInfo,
  UNABLE_FORM,
  UNAUTHORIZED
} from "../../lib/api/payloads/Login";
import { STUDENT, TEACHER, UserType } from "../../modules/action/header";

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
  const history = useHistory();
  const errorRef = useRef<HTMLParagraphElement>(null);
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
    errorRef.current.classList.add("pointing");
    setTimeout(() => {
      errorRef.current.classList.remove("pointing");
    }, 600);

    switch (message) {
      case PASSWORD_NOT_MATCHED:
        setErrorMessage({
          status: true,
          message: PASSWORD_NOT_MATCHED
        });
        return;
      case UNABLE_FORM:
        setErrorMessage({
          status: true,
          message: UNABLE_FORM
        });
        return;
      case UNAUTHORIZED:
        setErrorMessage({
          status: true,
          message: UNAUTHORIZED
        });
        return;
      default:
        return;
    }
  };

  const getStudentLoginInfo = useCallback(
    async (id: string, pw: string, autoLogin: boolean) => {
      const { data } = await postLoginStudent(id, pw);
      const { access_token, student_uuid } = data;
      const MillisecondOfHour = 3600000;

      autoLogin
        ? localStorage.removeItem("expiration")
        : localStorage.setItem(
            "expiration",
            `${new Date().getTime() + MillisecondOfHour}`
          );

      localStorage.setItem("access_token", access_token);
      localStorage.setItem("student_uuid", student_uuid);
      localStorage.removeItem("teacher_uuid");

      return student_uuid;
    },
    []
  );

  const setStudentInfoOnStorage = useCallback(async (studentUuid: string) => {
    const {
      data: { grade, group, name, phone_number, student_number, profile_uri }
    } = await getStudentInfo(studentUuid);

    const studentForm: ResStudentInfo = {
      grade,
      group,
      student_number,
      name,
      phone_number,
      profile_uri
    };

    localStorage.setItem("sms-user", JSON.stringify(studentForm));
    localStorage.setItem("sms-type", STUDENT);
  }, []);

  const getTeacherLoginInfo = useCallback(
    async (id: string, pw: string, autoLogin: boolean) => {
      const { data } = await postLoginTeacher(id, pw);
      const { access_token, teacher_uuid } = data;

      autoLogin
        ? localStorage.removeItem("expiration")
        : localStorage.setItem("expiration", `${new Date().getTime()}`);

      localStorage.setItem("access_token", access_token);
      localStorage.setItem("teacher_uuid", teacher_uuid);
      localStorage.removeItem("student_uuid");

      return teacher_uuid;
    },
    []
  );

  const setTeacherInfoOnStorage = useCallback(async (teacherUuid: string) => {
    const {
      data: { grade, group, name, phone_number }
    } = await getTeacherInfo(teacherUuid);

    const teacherForm: ResTeacherInfo = {
      grade,
      group,
      name,
      phone_number
    };

    localStorage.setItem("sms-user", JSON.stringify(teacherForm));
    localStorage.setItem("sms-type", TEACHER);
  }, []);

  const studentLogin = async (id: string, pw: string, autoLogin: boolean) => {
    const student_uuid = await getStudentLoginInfo(id, pw, autoLogin);
    await setStudentInfoOnStorage(student_uuid);
  };

  const teacherLogin = async (id: string, pw: string, autoLogin: boolean) => {
    const student_uuid = await getTeacherLoginInfo(id, pw, autoLogin);
    await setTeacherInfoOnStorage(student_uuid);
  };

  const login = useCallback(
    async (id: string, pw: string, autoLogin: boolean) => {
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

        history.push("./home");
      } catch (err) {
        const data = err?.response?.data,
          status = data?.status,
          code = data?.code;

        if (status === 404) {
          errorMessageMacro(UNAUTHORIZED);
        } else if (status === 409 && (code === -401 || code === -411)) {
          errorMessageMacro(UNAUTHORIZED);
        } else if (status === 409 && (code === -402 || code === -412)) {
          errorMessageMacro(PASSWORD_NOT_MATCHED);
        }
      }
    },
    [errorRef]
  );

  const handleId = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setId(e.currentTarget.value);
  }, []);

  const handlePw = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPw(e.currentTarget.value);
  }, []);

  const toggleAutoLogin = useCallback(() => {
    setAutoLogin((prev) => !prev);
  }, [autoLogin]);

  // Todo : history listen when user move page
  // history.listen((location, action) => {
  //   console.log(location, action);
  // });

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
      errorRef={errorRef}
    />
  );
};

export default LoginContainer;
