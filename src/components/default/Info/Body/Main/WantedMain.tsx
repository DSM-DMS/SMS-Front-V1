import React, { FC } from "react";
import * as S from "./styles";
import { DetailContent, Hr, Where, People, Who } from "../../default";
import { customSelector } from "../../../../../lib/utils";
import { useSelector } from "react-redux";
import { stateType } from "../../../../../modules/reducer";

const WantedMain: FC = () => {
  const { introduction, location, recruit_members } = useSelector(
    (state: stateType) => state.poster.wanted.detail
  );
  return (
    <S.Container>
      <S.P>동아리 소개</S.P>
      <DetailContent>{introduction || "동아리 소개가 없어요"}</DetailContent>
      <Who data={recruit_members} />
      <Hr />
      <People leader={""} three={[]} two={[]} one={[]} />
      <Hr />
      <Where>{location}</Where>
    </S.Container>
  );
};

export default WantedMain;
