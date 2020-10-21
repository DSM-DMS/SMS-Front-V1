import React, { FC } from "react";

import * as S from "./style";

const ManagementInfoBottom: FC = () => {
  return (
    <S.CenterBottom>
      <S.BottomCancelButton>취소</S.BottomCancelButton>
      <S.BottomEditButton>적용</S.BottomEditButton>
    </S.CenterBottom>
  );
};

export default ManagementInfoBottom;
