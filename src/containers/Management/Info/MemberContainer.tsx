import React, {
  FC,
  useState,
  useCallback,
  memo,
  useEffect,
  useMemo
} from "react";
import { toast } from "react-toastify";

import Members from "../../../components/Management/Info/Members";
import MemberItem from "../../../components/Management/Info/MemberItem";
import { ManagementInfoHandler } from "../../../modules/action/management/info";
import {
  deleteMember,
  getStudents,
  getStudentUuidsWithValue
} from "../../../lib/api/Management";
import { ResStudents } from "../../../lib/api/payloads/Management";
import { ResStudentInfo } from "../../../lib/api/payloads/Login";
import { getAxiosError } from "../../../lib/utils";

interface Props {
  leaderUuid: string;
  clubUuid: string;
  memberUuids: string[];
}

const ClubMembers: FC<Props> = ({ leaderUuid, clubUuid, memberUuids }) => {
  const handler = new ManagementInfoHandler();
  const [modal, setModal] = useState(false);
  const [students, setStudents] = useState<ResStudents[]>([]);
  const [leader, setLeader] = useState<ResStudentInfo>(null);
  const [members, setMembers] = useState<ResStudents[]>([]);

  const handleShowModal = useCallback(() => {
    setModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModal(false);
  }, []);

  const removeMember = useCallback(
    async (clubUuid: string, studentUuid: string) => {
      try {
        await deleteMember(clubUuid, studentUuid);

        handleRemoveMember(studentUuid);
      } catch (err) {
        const { status, code } = getAxiosError(err);

        if (status === 403 && code === -1711) {
          toast.error("동아리장 또는 관리자 계정이 아닙니다.");
        } else if (status === 403 && code === -1712) {
          toast.error("동아리장이 아닙니다.");
        } else if (status === 404 && code === -1721) {
          toast.error("존재하지 않는 동아리입니다.");
        } else if (status === 404 && code === -1723) {
          toast.error("삭제하려는 동아리원이 존재하지 않습니다.");
        }
      }
    },
    [memberUuids]
  );

  const handleRemoveMember = useCallback(
    (memberUuid: string) => {
      handler.handleClubMemberUuids(memberUuids.filter(m => m !== memberUuid));
    },
    [memberUuids]
  );

  const studentsInfo = async (studentUuids: string[]) => {
    try {
      const res = await getStudents(studentUuids);

      setStudents(res.data.students);
    } catch (err) {
      const { status } = getAxiosError(err);

      if (status === 407) {
        toast.error("동아리 원을 정보를 받아오는데 실패했습니다.");
      }
    }
  };

  const searchStudents = async (filter: string, value: string) => {
    if (value.trim() === "") {
      toast.error("검색어를 입력해주세요.");
      return;
    }

    try {
      const res = await getStudentUuidsWithValue(filter, value);

      await studentsInfo(res.data.student_uuids);
    } catch (err) {
      const { status } = getAxiosError(err);

      if (status === 409) {
        toast.error("검색 결과가 없습니다.");
      }
    }
  };

  const memberInfos = async () => {
    try {
      const res = await getStudents(memberUuids);

      setMembers(res.data.students);
    } catch (err) {
      const { status } = getAxiosError(err);

      if (status === 407) {
        toast.error("유효하지 않은 동아리원이 존재합니다.");
      }
    }
  };

  const memberList = useMemo(() => {
    return members
      .filter(({ student_uuid }) => memberUuids.includes(student_uuid))
      .map(member => {
        const { student_uuid, name } = member;
        if (student_uuid !== leaderUuid) {
          const removeMemberHandler = () =>
            removeMember(clubUuid, student_uuid);

          return (
            <MemberItem
              key={student_uuid}
              member={member}
              name={name}
              removeMemberHandler={removeMemberHandler}
            />
          );
        }
      });
  }, [members, leaderUuid, clubUuid, memberUuids]);

  useEffect(() => {
    if (leaderUuid && members.length) {
      setLeader(
        members.find(({ student_uuid }) => student_uuid === leaderUuid)
      );
    }
  }, [leaderUuid, members]);

  useEffect(() => {
    if (memberUuids.length) {
      memberInfos();
    }
  }, [memberUuids]);

  return (
    <Members
      modal={modal}
      leaderUuid={leaderUuid}
      clubUuid={clubUuid}
      memberUuids={memberUuids}
      students={students}
      members={members}
      leader={leader}
      memberList={memberList}
      handleShowModal={handleShowModal}
      handleCloseModal={handleCloseModal}
      searchStudents={searchStudents}
    />
  );
};

export default memo(ClubMembers);
