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
import { ManagementInfoMemberContainer } from "../../../containers";

interface Props {
  loading: boolean;
  clubUuid: string;
  handleConcept: (e: ChangeEvent<HTMLInputElement>) => void;
  handleIntroduction: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleLink: (e: ChangeEvent<HTMLInputElement>) => void;
  handleLogo: (file: File) => void;
  modifyClubInfo: () => Promise<void>;
}

const ManagementInfo: FC<Props> = ({
  loading,
  clubUuid,
  handleConcept,
  handleIntroduction,
  handleLink,
  handleLogo,
  modifyClubInfo
}) => {
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
          <ClubPicture logoUri={logo_uri} handleLogo={handleLogo} />
          <ClubFacebookLink link={link} handleLink={handleLink} />
        </S.CenterRight>
      </S.Center>
      <ManagementInfoBottom loading={loading} modifyClubInfo={modifyClubInfo} />
    </S.ManagementInfoWrap>
  );
};

export default ManagementInfo;
