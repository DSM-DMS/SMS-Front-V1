import React, { FC } from "react";

import * as S from "./style";
import ClubConcept from "./Concept";
import ClubFacebookLink from "./FacebookLink";
import ClubField from "./Field";
import ClubIntroduce from "./Introduce";
import ClubMembers from "./Members";
import ClubName from "./Name";
import ClubPicture from "./Picture";
import ClubLocation from "./Location";
import ManagementInfoBottom from "./Bottom";

const ManagementInfo: FC = () => {
  return (
    <S.ManagementInfoWrap>
      <S.TopLine />
      <S.Center>
        <S.CenterLeft>
          <ClubName />
          <ClubField />
          <ClubLocation />
          <ClubConcept />
          <ClubIntroduce />
          <ClubMembers />
        </S.CenterLeft>
        <S.CenterRight>
          <ClubPicture />
          <ClubFacebookLink />
        </S.CenterRight>
      </S.Center>
      <ManagementInfoBottom />
    </S.ManagementInfoWrap>
  );
};

export default ManagementInfo;
