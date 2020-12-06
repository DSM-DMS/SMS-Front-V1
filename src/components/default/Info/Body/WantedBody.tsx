import React, { FC } from "react";
import * as S from "./styles";
import WantedMain from "./Main/WantedMain";
import InfoDetailSub from "./Sub/InfoDetailSub";
import { customSelector } from "../../../../lib/utils";

const WantedBody: FC = () => {
  const { imgSrc, tags, projects } = customSelector(
    state => state.poster.wanted.detail
  );
  return (
    <S.Container>
      <WantedMain />
      <InfoDetailSub imgSrc={imgSrc} tags={tags} projects={projects} />
    </S.Container>
  );
};

export default WantedBody;
