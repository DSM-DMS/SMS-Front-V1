import React, { FC } from "react";
import * as S from "./styles";
import { Hr } from "../../Board/styles";
import { FacebookIcon } from "../../../../assets";
import { customSelector } from "../../../../lib/utils";
import { useSelector } from "react-redux";
import { stateType } from "../../../../modules/reducer";

const InfoHeader: FC = () => {
  const { name, end_period, start_period, link } = useSelector(
    (state: stateType) => state.poster.wanted.detail
  );
  return (
    <>
      <S.Container>
        <S.Title>{name}</S.Title>
        <S.FlexDiv>
          <div>{start_period}</div>
          <S.FaceBookBtn href={link}>
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
