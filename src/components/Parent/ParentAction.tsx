import React, { FC } from "react";

import * as S from "./style";

interface Props {
  approveOuting: () => void;
  rejectOuting: () => void;
}

const ParentAction: FC<Props> = ({ approveOuting, rejectOuting }) => {
  return (
    <S.ParentAction>
      <S.ParentApproveBtn onClick={approveOuting}>승인</S.ParentApproveBtn>
      <S.ParentRejectBtn onClick={rejectOuting}>거절</S.ParentRejectBtn>
    </S.ParentAction>
  );
};

export default ParentAction;
