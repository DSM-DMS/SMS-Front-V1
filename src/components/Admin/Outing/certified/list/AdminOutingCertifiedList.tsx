import React, { FC } from "react";

import { OutingStatus } from "../../../../../lib/api/payloads/Outing";
import { OutingCardPage } from "../../../../default";

const AdminOutingCertifiedList: FC = () => {
  return (
    <OutingCardPage
      status={OutingStatus["선생님 거절"]}
      title="미인증 외출증"
      isClicked={() => {}}
    />
  );
};

export default AdminOutingCertifiedList;
