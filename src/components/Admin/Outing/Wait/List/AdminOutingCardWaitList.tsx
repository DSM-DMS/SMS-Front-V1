import React from "react";
import { FC } from "react";
import { OutingStatus } from "../../../../../lib/api/payloads/Outing";
import { OutingCardPage } from "../../../../default";

const AdminOutingCardWaitList: FC = () => {
  return (
    <OutingCardPage
      status={OutingStatus["선생님 승인"]}
      title="승인대기"
      isClicked={true}
    />
  );
};

export default AdminOutingCardWaitList;
