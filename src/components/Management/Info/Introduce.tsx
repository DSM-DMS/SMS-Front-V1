import React, { FC, ReactElement } from "react";

import * as S from "./style";

interface Props {}

const ClubIntroduce: FC<Props> = (): ReactElement => {
  return (
    <S.ClubIntro>
      <label>
        <p>동아리 소개</p>
        <S.TextareaCommonStyle
          placeholder="동아리에 대해 센스있게 소개해주세요."
          rows={5}
        />
      </label>
    </S.ClubIntro>
  );
};

export default ClubIntroduce;
