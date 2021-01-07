import React, { FC, useCallback } from "react";
import * as S from "./styles";
import { DetailContent, Hr, Where, People, Who } from "../../default";
import { customSelector } from "../../../../../lib/utils";
import { useSelector } from "react-redux";
import { stateType } from "../../../../../modules/reducer";
import PeoepleContainer from "../../../../../containers/default/AllBodyPeopleContainer";

const WantedMain: FC = () => {
  const { introduction, location, recruit_members } = useSelector(
    (state: stateType) => state.poster.wanted.detail
  );

  const wantedMainPeoeple = useCallback(
    (store: stateType) => ({
      members: store.poster.wanted.detail.members,
      leader_uuid: store.poster.wanted.detail.leader_uuid
    }),
    []
  );
  return (
    <S.Container>
      <S.P>동아리 소개</S.P>
      <DetailContent>{introduction || "동아리 소개가 없어요"}</DetailContent>
      <Who data={recruit_members} />
      <Hr />
      <PeoepleContainer callback={wantedMainPeoeple} />
      <Hr />
      <Where>{location}</Where>
    </S.Container>
  );
};

export default WantedMain;
