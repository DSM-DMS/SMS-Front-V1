import React, { FC } from "react";
import * as S from "./styles";
import { Hr } from "../../Board/styles";
import { customSelector } from "../../../../lib/api";
import { useSelector } from "react-redux";
import { stateType } from "../../../../modules/reducer";

const AllHeader: FC = () => {
  const name = useSelector((state: stateType) => state.poster.all.detail.name);
  return (
    <>
      <S.Container>
        <S.Title>동아리 이름</S.Title>
      </S.Container>
      <Hr />
    </>
  );
};

export default AllHeader;
