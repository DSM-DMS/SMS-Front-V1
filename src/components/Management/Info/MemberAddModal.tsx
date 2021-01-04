import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState
} from "react";

import * as S from "./style";
import MemberAddQueue from "./MemberAddQueue";
import MemberSearch from "./MemberSearch";

import { postMember } from "../../../lib/api/Management";
import { ResStudents } from "../../../lib/api/payloads/Management";
import { ManagementInfoHandler } from "../../../modules/action/management/info";

interface Props {
  leaderUuid: string;
  clubUuid: string;
  memberUuids: string[];
  students: ResStudents[];
  members: ResStudents[];
  handleCloseModal: () => void;
  searchStudents: (filter: string, value: string) => Promise<void>;
}

export const filters = [
  {
    id: "name",
    text: "이름"
  },
  {
    id: "grade",
    text: "학년"
  },
  {
    id: "group",
    text: "반"
  },
  {
    id: "student_number",
    text: "번호"
  },

  {
    id: "phone_number",
    text: "전화번호"
  }
];

const MemberAddModal: FC<Props> = ({
  leaderUuid,
  clubUuid,
  memberUuids,
  students,
  members,
  handleCloseModal,
  searchStudents
}) => {
  const handler = new ManagementInfoHandler();
  const [filter, setFilter] = useState<string>(filters[0].id);
  const [value, setValue] = useState<string>("");
  const [uuids, setUuids] = useState<string[]>([]);
  const [addQueue, setAddQueue] = useState<ResStudents[]>([]);

  const addMembers = () => {
    const addUuids = addQueue.map(({ student_uuid }) => student_uuid);

    uuids.forEach(async uuid => {
      if (memberUuids.findIndex(memberUuid => memberUuid === uuid) === -1) {
        await postMember(clubUuid, uuid);
      }
    });

    const UnVerboseMembers = Array.from(new Set([...addUuids, ...memberUuids]));

    console.log(UnVerboseMembers, [...addUuids, ...memberUuids]);

    handler.handleClubMemberUuids([...addUuids, ...memberUuids]);
    handleCloseModal();
  };

  const handleFilter = useCallback((id: string) => {
    setFilter(id);
  }, []);

  const handleValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const handleAddQueue = useCallback((student: ResStudents) => {
    setUuids(prev => [...prev, student.student_uuid]);
    setAddQueue(prev => [...prev, student]);
  }, []);

  const handleRemoveQueue = useCallback((student_uuid: string) => {
    setUuids(prev => prev.filter(uuid => uuid !== student_uuid));
    setAddQueue(prev =>
      prev.filter(({ student_uuid: sUuid }) => sUuid !== student_uuid)
    );
  }, []);

  const handleSearchStudents = () => {
    searchStudents(filter, value);
  };

  useEffect(() => {
    setAddQueue(members);
  }, [members]);

  return (
    <S.Modal>
      <S.ModalBack onClick={handleCloseModal} />
      <S.ModalForm>
        <S.ModalFormInner>
          <MemberSearch
            addQueue={addQueue}
            students={students}
            filter={filter}
            leaderUuid={leaderUuid}
            handleSearchStudents={handleSearchStudents}
            handleAddQueue={handleAddQueue}
            handleFilter={handleFilter}
            handleValue={handleValue}
          />
          <MemberAddQueue
            leaderUuid={leaderUuid}
            addQueue={addQueue}
            handleClickRemoveQueue={handleRemoveQueue}
          />
        </S.ModalFormInner>
        <S.ModalButtonWrap>
          <S.ModalCancel onClick={handleCloseModal}>취소</S.ModalCancel>
          <S.ModalAdd onClick={addMembers}>적용</S.ModalAdd>
        </S.ModalButtonWrap>
      </S.ModalForm>
    </S.Modal>
  );
};

export default MemberAddModal;
