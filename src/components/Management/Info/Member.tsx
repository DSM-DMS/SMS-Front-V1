import React, { FC, ReactElement } from "react";

import * as S from "./style";

import { plusMember, deleteMember } from "../../../assets";

interface Props {
  handleShowModal: () => void;
}

const ClubMember: FC<Props> = ({ handleShowModal }): ReactElement => {
  return (
    <>
      <S.ClubLeader>
        <label>
          <p>동아리 부장</p>
          <S.InputCommonStyle
            type="text"
            placeholder="1101 홍길동"
            className="half"
          />
        </label>
      </S.ClubLeader>
      <S.ClubMember>
        <div>
          <p>동아리 인원</p>
          <S.ClubMemberList>
            <S.ClubMemberItem>
              <span>2115 이성진</span>
              <img
                src={deleteMember}
                alt="delete member"
                title="delete member"
              />
            </S.ClubMemberItem>
            <S.ClubMemberItem>
              <span>2116 이우찬</span>
              <img
                src={deleteMember}
                alt="delete member"
                title="delete member"
              />
            </S.ClubMemberItem>
            <S.ClubMemberAdd onClick={handleShowModal}>
              <img
                src={plusMember}
                className="addImg"
                alt="add member"
                title="add member"
              />
            </S.ClubMemberAdd>
          </S.ClubMemberList>
        </div>
      </S.ClubMember>
    </>
  );
};

export default ClubMember;
