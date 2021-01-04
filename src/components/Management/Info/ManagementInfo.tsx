import React, { ChangeEvent, FC } from "react";
import { useSelector } from "react-redux";

import * as S from "./style";
import ClubConcept from "./Concept";
import ClubFacebookLink from "./FacebookLink";
import ClubField from "./Field";
import ClubIntroduce from "./Introduce";
import ClubName from "./Name";
import ClubPicture from "./Picture";
import ClubLocation from "./Location";
import ManagementInfoBottom from "./Bottom";

import { stateType } from "../../../modules/reducer";
import { ManagementInfoHandler } from "../../../modules/action/management/info";
import { ManagementInfoMemberContainer } from "../../../containers";

interface Props {
  clubUuid: string;
}

const ManagementInfo: FC<Props> = ({ clubUuid }) => {
  const handler = new ManagementInfoHandler();
  const {
    name,
    field,
    location,
    club_concept,
    introduction,
    member_uuids,
    leader_uuid,
    logo_uri,
    link
  } = useSelector((state: stateType) => state.ManagementInfo);

  const handleConcept = (e: ChangeEvent<HTMLInputElement>) => {
    handler.handleClubConcept(e.target.value);
  };

  const handleIntroduction = (e: ChangeEvent<HTMLTextAreaElement>) => {
    handler.handleIntroduction(e.target.value);
  };

  const handleLink = (e: ChangeEvent<HTMLInputElement>) => {
    handler.handleLink(e.target.value);
  };

  return (
    <S.ManagementInfoWrap>
      <S.TopLine />
      <S.Center>
        <S.CenterLeft>
          <ClubName name={name} />
          <ClubField field={field} />
          <ClubLocation location={location} />
          <ClubConcept
            clubConcept={club_concept}
            handleConcept={handleConcept}
          />
          <ClubIntroduce
            introduction={introduction}
            handleIntroduction={handleIntroduction}
          />
          <ManagementInfoMemberContainer
            leaderUuid={leader_uuid}
            clubUuid={clubUuid}
            memberUuids={member_uuids}
          />
        </S.CenterLeft>
        <S.CenterRight>
          <ClubPicture logoUri={logo_uri} />
          <ClubFacebookLink link={link} handleLink={handleLink} />
        </S.CenterRight>
      </S.Center>
      <ManagementInfoBottom />
    </S.ManagementInfoWrap>
  );
};

export default ManagementInfo;
