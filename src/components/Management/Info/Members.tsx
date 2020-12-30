import React, {
  FC,
  ReactElement,
  ChangeEvent,
  useMemo,
  useState,
  useCallback,
  memo
} from "react";

import * as S from "./style";
import MemberAddModal from "./MemberAddModal";

import { plusMember, deleteMember } from "../../../assets";
import { ManagementInfoHandler } from "../../../modules/action/management/info";

interface Props {
  leaderUuid: string;
  memberUuids: string[];
}

const ClubMembers: FC<Props> = ({ leaderUuid, memberUuids }): ReactElement => {
  const handler = new ManagementInfoHandler();
  const [modal, setModal] = useState(false);

  const handleShowModal = useCallback(() => {
    setModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModal(false);
  }, []);

  const handleChangeLeader = (e: ChangeEvent<HTMLInputElement>) => {
    handler.handleLeader(e.target.value);
  };

  const handleRemoveMember = useCallback(
    (member: string) => {
      handler.handleMembers(memberUuids.filter(m => m !== member));
    },
    [memberUuids]
  );

  const getMembers = useMemo(
    () =>
      memberUuids.map(member => (
        <S.ClubMemberItem key={member}>
          <span>{member}</span>
          <img
            src={deleteMember}
            alt="delete member"
            title="delete member"
            onClick={() => handleRemoveMember(member)}
          />
        </S.ClubMemberItem>
      )),
    [memberUuids]
  );

  return (
    <>
      <S.ClubLeader>
        <label>
          <p>동아리 부장</p>
          <S.InputCommonStyle
            type="text"
            placeholder="1101 홍길동"
            defaultValue={leaderUuid}
            onChange={handleChangeLeader}
          />
        </label>
      </S.ClubLeader>
      <S.ClubMember>
        <div>
          <p>동아리 인원</p>
          <S.ClubMemberList>
            {getMembers}
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
      {modal && <MemberAddModal handleCloseModal={handleCloseModal} />}
    </>
  );
};

export default memo(ClubMembers);
