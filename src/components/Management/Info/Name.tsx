import React, { FC, ReactElement } from "react";

import * as S from "./style";

interface Props {}

const ClubName: FC<Props> = (): ReactElement => {
  return (
    <S.ClubName>
      <label>
        <p>동아리명</p>
        <S.InputCommonStyle
          type="text"
          placeholder="동아리 명을 입력해주세요."
        />
      </label>
    </S.ClubName>
  );
};

export default ClubName;
