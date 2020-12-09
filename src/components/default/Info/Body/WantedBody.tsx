import React, { FC } from "react";
import * as S from "./styles";
import WantedMain from "./Main/WantedMain";
import InfoDetailSub from "./Sub/InfoDetailSub";
import { customSelector } from "../../../../lib/utils";
import { useSelector } from "react-redux";
import { stateType } from "../../../../modules/reducer";

const WantedBody: FC = () => {
  const { logo_uri } = useSelector(
    (state: stateType) => state.poster.wanted.detail
  );
  return (
    <S.Container>
      <WantedMain />
      <InfoDetailSub imgSrc={logo_uri} tags={[]} projects={[]} />
    </S.Container>
  );
};

export default WantedBody;
