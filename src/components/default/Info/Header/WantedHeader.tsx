import React, { FC } from "react";
import * as S from "./styles";
import { Hr } from "../../Board/styles";
import { FacebookIcon } from "../../../../assets";
import { customSelector } from "../../../../lib/utils";

const InfoHeader: FC = () => {
  const { name, date } = customSelector((state) => state.poster.wanted.detail);
  return (
    <>
      <S.Container>
        <S.Title>{name}</S.Title>
        <S.FlexDiv>
          <div>{date}</div>
          <S.FaceBookBtn>
            <img src={FacebookIcon} />
            지원하기
          </S.FaceBookBtn>
        </S.FlexDiv>
      </S.Container>
      <Hr />
    </>
  );
};

export default InfoHeader;
