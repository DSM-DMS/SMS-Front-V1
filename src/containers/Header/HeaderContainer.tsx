import React, { FC, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Header } from "../../components";
import { ResStudentInfo } from "../../lib/api/payloads/Login";
import { getCheckNotice } from "../../modules/action/checkNotice";
import { setInit } from "../../modules/action/header";

interface Props {}

const HeaderContainer: FC<Props> = () => {
  const dispatch = useDispatch();

  const logout = useCallback(() => {
    dispatch(
      setInit({
        grade: 0,
        group: 0,
        name: "",
        phone_number: "",
        student_number: 0,
        profile_uri: "",
        parent_status: ""
      })
    );
    localStorage.setItem("sms-user", JSON.stringify({}));
    localStorage.removeItem("access_token");
    localStorage.removeItem("uuid");
    localStorage.removeItem("expiration");
  }, []);

  useEffect(() => {
    const smsUser = JSON.parse(
      localStorage.getItem("sms-user")
    ) as ResStudentInfo;
    dispatch(setInit(smsUser));

    const uuid: string = localStorage.getItem("uuid");
    if (uuid) {
      dispatch(getCheckNotice(uuid));
    }
  }, []);

  return <Header logout={logout} />;
};

export default HeaderContainer;
