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
import { getAxiosError } from "../../../lib/utils";
import { Loading } from "../../default";
import { toast } from "react-toastify";

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
  const [loading, setLoading] = useState<boolean>(false);

  const startLoading = useCallback(() => {
    setLoading(true);
  }, []);

  const endLoading = useCallback(() => {
    setLoading(false);
  }, []);

  const addMembers = () => {
    const addUuids = addQueue.map(({ student_uuid }) => student_uuid);

    startLoading();
    try {
      uuids.forEach(async uuid => {
        if (memberUuids.findIndex(memberUuid => memberUuid === uuid) === -1) {
          await postMember(clubUuid, uuid);
        }
      });
    } catch (err) {
      const { status, code } = getAxiosError(err);

      if (status === 403 && code === -1711) {
        toast.error("학생 또는 관리자 계정이 아닙니다.");
      } else if (status === 403 && code === -1712) {
        toast.error("본인이 해당 동아리의 동아리 장이 아닙니다.");
      } else if (status === 404 && code === -1721) {
        toast.error("수정하려는 동아리가 없습니다.");
      } else if (status === 404 && code === -1722) {
        toast.error("추가하려는 학생이 존재하지 않습니다.");
      } else if (status === 409 && code === -1701) {
        toast.error("이미 부원인 학생이 있습니다.");
      }
    }
    endLoading();

    const UnVerboseMembers = Array.from(new Set([...addUuids, ...memberUuids]));

    handler.handleClubMemberUuids(UnVerboseMembers);
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
          <MemberAddQueue leaderUuid={leaderUuid} addQueue={addQueue} />
        </S.ModalFormInner>
        <S.ModalButtonWrap>
          <S.ModalCancel onClick={handleCloseModal}>취소</S.ModalCancel>
          {loading && <Loading />}
          <S.ModalAdd onClick={addMembers}>적용</S.ModalAdd>
        </S.ModalButtonWrap>
      </S.ModalForm>
    </S.Modal>
  );
};

export default MemberAddModal;
