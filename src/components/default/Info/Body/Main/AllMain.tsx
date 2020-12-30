import React, { FC, useCallback } from "react";
import * as S from "./styles";
import { DetailContent, Hr, Where, People } from "../../default";
import { useSelector } from "react-redux";
import { stateType } from "../../../../../modules/reducer";
import PeoepleContainer from "../../../../../containers/default/AllBodyPeopleContainer";

const AllMain = () => {
  const allMainPeoeple = useCallback(
    (store: stateType) => ({
      members: store.poster.all.detail.members,
      leader_uuid: store.poster.wanted.detail.leader_uuid
    }),
    []
  );
  const { introduction, location } = useSelector(
    (state: stateType) => state.poster.all.detail
  );
  return (
    <S.Container>
      <S.P>동아리 소개</S.P>
      <DetailContent>{introduction}</DetailContent>
      <Hr />
      <PeoepleContainer callback={allMainPeoeple} />
      <Hr />
      <Where>{location}</Where>
    </S.Container>
  );
};

export default AllMain;
