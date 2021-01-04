import React, { FC } from "react";

import * as S from "./style";
import OutingInfo from "./OutingInfo";
import ParentAction from "./ParentAction";

import { ResOutingInfo } from "../../lib/api/payloads/Parent";
import { EMERGENCY, NORMAL } from "../../containers/Outing/ApplyContainer";

interface Props {
  outingInfo: ResOutingInfo;
  approveOuting: () => void;
  rejectOuting: () => void;
}

const Approve: FC<Props> = ({ outingInfo, approveOuting, rejectOuting }) => {
  return (
    <S.ParentWrap>
      {outingInfo.outing_uuid && <OutingInfo outingInfo={outingInfo} />}
      {outingInfo.outing_uuid && outingInfo.outing_situation === NORMAL && (
        <ParentAction
          approveOuting={approveOuting}
          rejectOuting={rejectOuting}
        />
      )}
      {outingInfo.outing_uuid && outingInfo.outing_situation === EMERGENCY && (
        <S.ParentOutingEmergencyText>
          질병 외출로 신청한 외출은 학생의 신속한 처치를 위해 확인만 가능합니다.
        </S.ParentOutingEmergencyText>
      )}
    </S.ParentWrap>
  );
};

export default Approve;
