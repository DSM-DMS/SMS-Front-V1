import React, { FC } from "react";

import * as S from "./style";

interface Props {
  approveOuting: () => void;
  rejectOuting: () => void;
}

const ParentAction: FC<Props> = ({ approveOuting, rejectOuting }) => {
  return (
    <S.ParentAction>
      <button onClick={approveOuting}>승인</button>
      <button onClick={rejectOuting}>거절</button>
    </S.ParentAction>
  );
};

export default ParentAction;
