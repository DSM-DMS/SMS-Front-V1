import React, { FC, ReactElement } from "react";

import * as S from "./style";

interface Props {}

const ClubPosition: FC<Props> = (): ReactElement => {
  return (
    <S.ClubPosition>
      <label>
        <p>동아리실</p>
        <S.InputCommonStyle
          type="text"
          placeholder="동아리 위치를 적어주세요."
        />
      </label>
    </S.ClubPosition>
  );
};

export default ClubPosition;
