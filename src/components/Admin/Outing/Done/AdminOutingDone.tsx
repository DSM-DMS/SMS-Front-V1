import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setActionOutingCard } from "../../../../lib/api/OutingCard";

import { OutingStatus } from "../../../../lib/api/payloads/Outing";
import Confirm from "../../../../lib/confirm/confirm";
import { endOutingCardSaga } from "../../../../modules/action/outingCard";
import { OutingCardPage } from "../../../default";

const AdminOutingCertifiedList: FC = () => {
  const dispatch = useDispatch();
  const clickHandler = useCallback(async (uuid: string) => {
    const confirm = await Confirm.confirm([
      "외출이 종료된 학생의 외출증을 최종 확인하겠습니까?",
      "취소",
      "확인"
    ]);

    if (!confirm) return;
    dispatch(endOutingCardSaga(uuid));
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
