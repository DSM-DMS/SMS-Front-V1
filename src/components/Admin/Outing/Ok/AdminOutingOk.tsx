import React, { FC } from "react";
import { OutingStatus } from "../../../../lib/api/payloads/Outing";
import { OutingCardPage } from "../../../default";

const AdminOutingOkList: FC = () => {
  return (
    <OutingCardPage
      status={OutingStatus["외출 인증 승인"]}
      title="최종 승인 외출증"
    />
  );
};

export default AdminOutingOkList;
