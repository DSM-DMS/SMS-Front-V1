import React, { FC } from "react";

import * as S from "./style";
import OutingInfo from "./OutingInfo";
import ParentAction from "./ParentAction";

import { ResOutingInfo } from "../../lib/api/payloads/Parent";

interface Props {
  outingInfo: ResOutingInfo;
  approveOuting: () => void;
  rejectOuting: () => void;
}

const Approve: FC<Props> = ({ outingInfo, approveOuting, rejectOuting }) => {
  return (
    <S.ParentWrap>
      {outingInfo.outing_uuid && <OutingInfo outingInfo={outingInfo} />}
      {outingInfo.outing_uuid && (
        <ParentAction
          approveOuting={approveOuting}
          rejectOuting={rejectOuting}
        />
      )}
    </S.ParentWrap>
  );
};

export default Approve;
