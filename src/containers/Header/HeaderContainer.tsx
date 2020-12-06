import React, { FC, useCallback } from "react";

import { Header } from "../../components";
import { UserType } from "../../modules/action/header";

interface Props {}

const HeaderContainer: FC<Props> = () => {
  const type: UserType = localStorage.getItem("sms-type") as UserType;
  const smsUser = JSON.parse(localStorage.getItem("sms-user"));

  const logout = useCallback(() => {
    localStorage.setItem("sms-user", JSON.stringify({}));
    localStorage.setItem("sms-type", "");
    localStorage.removeItem("access_token");
    localStorage.removeItem("teacher_uuid");
    localStorage.removeItem("student_uuid");
    localStorage.removeItem("expiration");
  }, []);

  return <Header smsUser={smsUser} type={type} logout={logout} />;
};

export default HeaderContainer;
