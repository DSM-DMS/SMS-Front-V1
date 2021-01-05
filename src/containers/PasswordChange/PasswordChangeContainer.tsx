import React, { FC, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { PasswordChange } from "../../components";
import {
  putStudentPassword,
  putTeacherPassword
} from "../../lib/api/PasswordChange";
import { STUDENT, TEACHER, UserType } from "../../modules/action/header";

interface Props {}

const PasswordChangeContainer: FC<Props> = () => {
  const history = useHistory();

  const changePassword = useCallback(
    async (type: UserType, currentPw: string, revisionPw: string) => {
      const uuid = localStorage.getItem(`uuid`);
      try {
        if (type === STUDENT) {
          await putStudentPassword(uuid, currentPw, revisionPw);
        } else if (type === TEACHER) {
          await putTeacherPassword(uuid, currentPw, revisionPw);
        }

        toast.success("비밀번호를 변경했습니다.");
        history.push("./home");
      } catch (err) {
        const data = err?.response?.data;
        const status = data?.status;
        const code = data?.code;

        if (status === 403) {
          toast.error("학생 정보가 올바르지 않습니다. 다시 로그인해주세요.");
        } else if (status === 409 && code === -701) {
          toast.error("현재 비밀번호가 올바르지 않습니다.");
        }
      }
    },
    []
  );

  return <PasswordChange changePassword={changePassword} />;
};

export default PasswordChangeContainer;
