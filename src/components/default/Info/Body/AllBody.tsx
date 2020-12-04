import React, { FC } from "react";
import * as S from "./styles";
import InfoDetailSub from "./Sub/InfoDetailSub";
import AllMain from "./Main/AllMain";
import { customSelector } from "../../../../lib/utils";

const AllBody: FC = () => {
  const { imgSrc, tags, projects } = customSelector(
    (state) => state.poster.all.detail
  );
  return (
    <S.Container>
      <AllMain />
      <InfoDetailSub imgSrc={imgSrc} tags={tags} projects={projects} />
    </S.Container>
  );
};

export default AllBody;
