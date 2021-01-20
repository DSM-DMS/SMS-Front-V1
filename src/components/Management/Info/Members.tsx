import React, { FC, memo, ReactElement } from "react";

import * as S from "./style";
import MemberAddModal from "./MemberAddModal";

import { plusMember } from "../../../assets";
import { ResStudents } from "../../../lib/api/payloads/Management";
import { formattingStudent } from "../../../lib/utils";
import { ResStudentInfo } from "../../../lib/api/payloads/Login";

interface Props {
  modal: boolean;
  leaderUuid: string;
  clubUuid: string;
  memberUuids: string[];
  students: ResStudents[];
  members: ResStudents[];
  leader: ResStudentInfo;
  memberList: ReactElement[];
  handleShowModal: () => void;
  handleCloseModal: () => void;
  searchStudents: (filter: string, value: string) => Promise<void>;
}

const ClubMembers: FC<Props> = ({
  leaderUuid,
  clubUuid,
  memberUuids,
  modal,
  students,
  members,
  leader,
  memberList,
  handleShowModal,
  handleCloseModal,
  searchStudents
}) => {
  return (
    <>
      <S.ClubLeader>
        <label>
          <p>동아리 부장</p>
          {leader && (
            <S.InnerTextCommon>
              {formattingStudent(leader)} {leader.name}
            </S.InnerTextCommon>
          )}
        </label>
      </S.ClubLeader>
      <S.ClubMember>
        <div>
          <p>동아리 인원</p>
          <S.ClubMemberList>
            {memberList}
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
      {modal && (
        <MemberAddModal
          leaderUuid={leaderUuid}
          clubUuid={clubUuid}
          memberUuids={memberUuids}
          students={students}
          members={members}
          handleCloseModal={handleCloseModal}
          searchStudents={searchStudents}
        />
      )}
    </>
  );
};

export default memo(ClubMembers);
