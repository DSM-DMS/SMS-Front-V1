import React, { FC, memo } from "react";

import * as S from "./style";

import { ModalClose } from "../../../assets";
import { ResStudents } from "../../../lib/api/payloads/Management";
import { formattingStudent } from "../../../lib/utils";
import { Loading } from "../../default";

interface Props {
  removeLoading: boolean;
  clubName: string;
  name: string;
  member: ResStudents;
  hideModal: () => void;
  removeMemberHandler: () => void;
}

const MemberItem: FC<Props> = ({
  removeLoading,
  clubName,
  name,
  member,
  hideModal,
  removeMemberHandler
}) => {
  return (
    <>
      <S.ClubMemberDeleteBackground onClick={hideModal} />
      <S.ClubMemberDeleteModal>
        <S.ClubMemberDeleteModalHead>
          <S.ClubMemberModalClose
            src={ModalClose}
            alt="close"
            title="close"
            onClick={hideModal}
          />
          {clubName}에서 1명을 삭제합니다.
        </S.ClubMemberDeleteModalHead>
        <S.ClubMemberDeleteModalBody>
          <p className="followingDeleteMember">
            삭제될 동아리원은 아래와 같습니다:
          </p>
          <ul>
            <li className="member">
              <span>
                {formattingStudent(member)} {name}
              </span>
            </li>
          </ul>
        </S.ClubMemberDeleteModalBody>
        <S.ClubMemberDeleteModalFoot>
          <button className="delete" onClick={removeMemberHandler}>
            동아리원 삭제
          </button>
          {removeLoading && <Loading />}
        </S.ClubMemberDeleteModalFoot>
      </S.ClubMemberDeleteModal>
    </>
  );
};

export default memo(MemberItem);
