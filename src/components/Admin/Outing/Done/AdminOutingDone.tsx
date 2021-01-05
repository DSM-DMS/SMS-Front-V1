import React, { FC } from "react";
import { OutingStatus } from "../../../../lib/api/payloads/Outing";
import { OutingCardPage } from "../../../default";

const AdminOutingCertifiedList: FC = () => {
  return (
    <OutingCardPage
      status={OutingStatus["외출 종료"]}
      title="외출 종료"
      isClicked={false}
    />
  );
};

export default AdminOutingCertifiedList;
