import React, { FC, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Header } from "../../components";
import { ResStudentInfo } from "../../lib/api/payloads/Login";
import { setInit, UserType } from "../../modules/action/header";
import { pageMove } from "../../modules/action/page";

interface Props {}

const HeaderContainer: FC<Props> = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const moveLogin = () => {
    dispatch(pageMove("로그인"));

    if (history.location.pathname.includes("admin")) {
      history.push("/admin/login");
    } else {
      history.push("/login");
    }
  };

  const logout = useCallback(() => {
    dispatch(
      setInit("", {
        grade: 0,
        group: 0,
        name: "",
        phone_number: "",
        student_number: 0,
        profile_uri: ""
      })
    );
    localStorage.setItem("sms-user", JSON.stringify({}));
    localStorage.setItem("sms-type", "");
    localStorage.removeItem("access_token");
    localStorage.removeItem("teacher_uuid");
    localStorage.removeItem("student_uuid");
    localStorage.removeItem("expiration");
  }, []);

  useEffect(() => {
    const type = localStorage.getItem("sms-type") as UserType;
    const smsUser = JSON.parse(
      localStorage.getItem("sms-user")
    ) as ResStudentInfo;
    dispatch(setInit(type, smsUser));
  }, []);

  return <Header logout={logout} moveLogin={moveLogin} />;
};

export default HeaderContainer;
