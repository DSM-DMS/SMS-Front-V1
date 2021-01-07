import React, { FC, useCallback } from "react";

import { OutingStatus } from "../../../../lib/api/payloads/Outing";
import Confirm from "../../../../lib/confirm/confirm";
import { OutingCardPage } from "../../../default";

const AdminOutingCertifiedList: FC = () => {
  const clickHandler = useCallback(async () => {
    const confirm = await Confirm.confirm([
      "외출이 종료된 학생의 외출증을 최종 확인하겠습니까?",
      "취소",
      "확인"
    ]);

    if (confirm) {
    }
  }, []);

  return (
    <OutingCardPage
      status={OutingStatus["외출 종료"]}
      title="외출 종료"
      isClicked={clickHandler}
    />
  );
};

export default AdminOutingCertifiedList;
