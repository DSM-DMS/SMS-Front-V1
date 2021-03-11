import React, { FC, useState } from "react";
import { CheckCodeRes } from "../../lib/api/payloads/Register";
import RegisterCodeCheck from "./CodeCheck/RegisterCodeCheck";
import RegisterForm from "./Form/RegisterForm";

export interface RegisterManagement extends CheckCodeRes {
  code: string;
}

const Register: FC = () => {
  const [studentData, setStudentData] = useState<RegisterManagement>(null);

  const changeStudentData = (data: RegisterManagement) => {
    setStudentData(data);
  };

  return studentData ? (
    <RegisterForm {...studentData} />
  ) : (
    <RegisterCodeCheck setStudentData={changeStudentData} />
  );
};

export default Register;
