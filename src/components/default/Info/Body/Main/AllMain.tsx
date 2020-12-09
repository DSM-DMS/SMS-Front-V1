import React, { FC } from "react";
import * as S from "./styles";
import { DetailContent, Hr, Where, People } from "../../default";
import { useSelector } from "react-redux";
import { stateType } from "../../../../../modules/reducer";

const AllMain = () => {
  const { introduction, location } = useSelector(
    (state: stateType) => state.poster.all.detail
  );
  return (
    <S.Container>
      <S.P>동아리 소개</S.P>
      <DetailContent>{introduction}</DetailContent>
      <Hr />
      <People leader={"리더"} three={[]} two={[]} one={[]} />
      <Hr />
      <Where>{location}</Where>
    </S.Container>
  );
};

export default AllMain;
