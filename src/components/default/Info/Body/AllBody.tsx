import React, { FC } from "react";
import * as S from "./styles";
import InfoDetailSub from "./Sub/InfoDetailSub";
import AllMain from "./Main/AllMain";
import { customSelector } from "../../../../lib/api";
import { useSelector } from "react-redux";
import { stateType } from "../../../../modules/reducer";

const AllBody: FC = () => {
  const { logo_uri } = useSelector(
    (state: stateType) => state.poster.all.detail
  );
  return (
    <S.Container>
      <AllMain />
      <InfoDetailSub imgSrc={logo_uri} tags={[]} projects={[]} />
    </S.Container>
  );
};

export default AllBody;
