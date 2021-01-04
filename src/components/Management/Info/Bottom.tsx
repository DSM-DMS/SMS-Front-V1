import React, { FC } from "react";

import * as S from "./style";

interface Props {
  modifyClubInfo: () => Promise<void>;
}

const ManagementInfoBottom: FC<Props> = ({ modifyClubInfo }) => {
  return (
    <S.CenterBottom>
      <S.BottomEditButton onClick={modifyClubInfo}>적용</S.BottomEditButton>
    </S.CenterBottom>
  );
};

export default ManagementInfoBottom;
