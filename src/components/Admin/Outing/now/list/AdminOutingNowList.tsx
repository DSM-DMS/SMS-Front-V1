import React, { FC } from "react";
import { OutingStatus } from "../../../../../lib/api/payloads/Outing";
import { OutingCardPage } from "../../../../default";

const AdminOutingNowList: FC = () => {
  return (
    <OutingCardPage
      status={OutingStatus["선생님 승인 "]}
      title="현재 외출 학생"
      isClicked={false}
    />
  );
};

export default AdminOutingNowList;
