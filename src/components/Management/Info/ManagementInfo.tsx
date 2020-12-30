import React, { ChangeEvent, FC } from "react";
import { useSelector } from "react-redux";

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

import { stateType } from "../../../modules/reducer";
import { ManagementInfoHandler } from "../../../modules/action/management/info";

interface Props {}

const ManagementInfo: FC<Props> = () => {
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

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    handler.handleName(e.target.value);
  };

  const handleConcept = (e: ChangeEvent<HTMLInputElement>) => {
    handler.handleConcept(e.target.value);
  };

  const handleIntroduction = (e: ChangeEvent<HTMLTextAreaElement>) => {
    handler.handleIntroduce(e.target.value);
  };

  const handleLink = (e: ChangeEvent<HTMLInputElement>) => {
    handler.handleFacebookLink(e.target.value);
  };

  return (
    <S.ManagementInfoWrap>
      <S.TopLine />
      <S.Center>
        <S.CenterLeft>
          <ClubName name={name} handleName={handleName} />
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
          <ClubMembers leaderUuid={leader_uuid} memberUuids={member_uuids} />
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
