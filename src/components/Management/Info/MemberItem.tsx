import React, { FC, memo, useState } from "react";
import { useSelector } from "react-redux";

import * as S from "./style";

import { deleteMember as deleteMemberSvg, ModalClose } from "../../../assets";
import { ResStudents } from "../../../lib/api/payloads/Management";
import { formattingStudent } from "../../../lib/utils";
import { stateType } from "../../../modules/reducer";

interface Props {
  member: ResStudents;
  name: string;
  removeMemberHandler: () => void;
}

const MemberItem: FC<Props> = ({ member, name, removeMemberHandler }) => {
  const { name: clubName } = useSelector(
    (state: stateType) => state.ManagementInfo
  );
  const [modal, setModal] = useState<boolean>(false);

  const showModal = () => {
    setModal(true);
  };

  const hideModal = () => {
    setModal(false);
  };

  return (
    <S.ClubMemberItem>
      <span>
        {formattingStudent(member)} {name}
      </span>
      <S.ClubMemberDeleteImg
        src={deleteMemberSvg}
        alt="delete member"
        title="delete member"
        onClick={showModal}
        className="deleteImg"
      />
      {modal && (
        <>
          <S.ClubMemberDeleteBackground onClick={hideModal} />
          <S.ClubMemberDeleteModal>
            <S.ClubMemberDeleteModalHead>
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
            </S.ClubMemberDeleteModalFoot>
          </S.ClubMemberDeleteModal>
        </>
      )}
    </S.ClubMemberItem>
  );
};

export default memo(MemberItem);
