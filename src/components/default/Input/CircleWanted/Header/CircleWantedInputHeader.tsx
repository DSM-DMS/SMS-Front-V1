import React, { FC } from "react";
import * as S from "../styles";

const CircleWantedInputHeader: FC = () => {
  return (
    <S.ItemContainer>
      <div>학년</div>
      <div>설명</div>
      <div>인원</div>
    </S.ItemContainer>
  );
};

export default CircleWantedInputHeader;
