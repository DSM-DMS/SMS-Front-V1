import React, { FC, memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";

import * as S from "./style";
import MemberDeleteModal from "./MemberDeleteModal";

import { SettingGear } from "../../../assets";
import { ResStudents } from "../../../lib/api/payloads/Management";
import { formattingStudent } from "../../../lib/utils";
import { stateType } from "../../../modules/reducer";

interface Props {
  removeLoading: boolean;
  name: string;
  member: ResStudents;
  removeMemberHandler: () => void;
  changeLeaderHandler: (newLeaderUuid: string) => Promise<void>;
}

const MemberItem: FC<Props> = ({
  removeLoading,
  name,
  member,
  removeMemberHandler,
  changeLeaderHandler
}) => {
  const { name: clubName } = useSelector(
    (state: stateType) => state.ManagementInfo
  );
  const [modal, setModal] = useState<boolean>(false);
  const [delModal, setDelModal] = useState<boolean>(false);

  const showDelModal = useCallback(() => {
    setDelModal(true);
  }, []);

  const hideDelModal = useCallback(() => {
    setDelModal(false);
  }, []);

  const showModal = useCallback(() => {
    setModal(true);
  }, []);

  const hideModal = useCallback(() => {
    setModal(false);
  }, []);

  const handleNewLeader = async () => {
    await changeLeaderHandler(member.student_uuid);
  };

  return (
    <S.ClubMemberItem>
      <span>
        {formattingStudent(member)} {name}
      </span>

      <S.ClubMemberItemSetting>
        <S.ClubMemberItemSettingImg
          src={SettingGear}
          alt="setting"
          title="setting"
          onClick={modal ? hideModal : showModal}
        />
        {modal && (
          <div>
            <p onClick={showDelModal}>동아리원 삭제</p>
            <p onClick={handleNewLeader}>동아리장 임명</p>
          </div>
        )}
      </S.ClubMemberItemSetting>
      {delModal && (
        <MemberDeleteModal
          removeLoading={removeLoading}
          clubName={clubName}
          name={name}
          member={member}
          hideModal={hideDelModal}
          removeMemberHandler={removeMemberHandler}
        />
      )}
    </S.ClubMemberItem>
  );
};

export default memo(MemberItem);
