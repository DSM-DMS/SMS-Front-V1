import React, { FC } from "react";
import * as S from "./styles";
import { Hr } from "../../Board/styles";
import { customSelector } from "../../../../lib/utils";
import { useSelector } from "react-redux";
import { stateType } from "../../../../modules/reducer";
import { FacebookIcon } from "../../../../assets";

const AllHeader: FC = () => {
  const { name, link, club_concept } = useSelector(
    (state: stateType) => state.poster.all.detail
  );
  return (
    <>
      <S.Container>
        <S.Title>{name}</S.Title>
        <S.FlexDiv>
          <S.FaceBookBtn href={link}>
            <img src={FacebookIcon} />
            페이스북 그룹
          </S.FaceBookBtn>
        </S.FlexDiv>
      </S.Container>
      <Hr />
    </>
  );
};

export default AllHeader;
