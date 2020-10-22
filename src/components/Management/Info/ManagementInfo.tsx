import React, { FC, useCallback, useState } from "react";

import * as S from "./style";
import ClubConcept from "./Concept";
import ClubFacebookLink from "./FacebookLink";
import ClubField from "./Field";
import ClubIntroduce from "./Introduce";
import ClubMember from "./Member";
import ClubName from "./Name";
import ClubPicture from "./Picture";
import ClubPosition from "./Position";
import MemberAddModal from "./MemberAddModal";
import ManagementInfoBottom from "./Bottom";

interface IClubInfo {
  name: string;
  field: string;
  position: string;
  concept: string;
  introduce: string;
  leader: string;
  members: string[];
  pictureId: number;
  facebookLink: string;
}

const clubInfo: IClubInfo = {
  name: "DMS",
  field: "SW개발",
  position: "3층 2학년 1반",
  concept: "기숙사 관리 시스템을 만드는 동아리입니다.",
  introduce: `DMS는 기숙사 관리 시스템을 만드는 동아리입니다.
  현재는 기숙사 뿐만 아니라 학교와 학부모를 위한 서비스도 개발 중입니다.`,
  leader: "2115 이성진",
  members: ["2110 손민기"],
  pictureId: 1,
  facebookLink: "DMSforDSM"
};

const ManagementInfo: FC = () => {
  const [modal, setModal] = useState(false);

  const handleShowModal = useCallback(() => {
    setModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModal(false);
  }, []);

  return (
    <S.ManagementInfoWrap>
      <S.TopLine />
      <S.Center>
        <S.CenterLeft>
          <ClubName />
          <ClubField />
          <ClubPosition />
          <ClubConcept />
          <ClubIntroduce />
          <ClubMember handleShowModal={handleShowModal} />
          {modal && <MemberAddModal handleCloseModal={handleCloseModal} />}
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
