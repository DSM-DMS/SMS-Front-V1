import React, { FC, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { PasswordChange } from "../../components";
import { putStudentPassword } from "../../lib/api/PasswordChange";
import useLoading from "../../lib/hooks/common/useLoading";
import { getAxiosError } from "../../lib/utils";

interface Props {}

const PasswordChangeContainer: FC<Props> = () => {
  const history = useHistory();
  const [loading, startLoading, endLoading] = useLoading();

  const changePassword = useCallback(
    async (currentPw: string, revisionPw: string) => {
      const uuid = localStorage.getItem("uuid");

      startLoading();
      try {
        await putStudentPassword(uuid, currentPw, revisionPw);
        toast.success("비밀번호를 변경했습니다.");
        history.push("./home");
      } catch (err) {
        const { status, code } = getAxiosError(err);

        if (status === 409 && code === -701) {
          toast.error("현재 비밀번호가 올바르지 않습니다.");
        }
      }
      endLoading();
    },
    []
  );

  return <PasswordChange loading={loading} changePassword={changePassword} />;
};

export default PasswordChangeContainer;
