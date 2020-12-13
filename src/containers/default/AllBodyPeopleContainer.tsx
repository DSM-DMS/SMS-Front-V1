import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { People } from "../../components/default/Info/default";
import { getStudentData } from "../../lib/api/client";
import { stateType } from "../../modules/reducer";
import { StudentInfo } from "../../modules/type/user";

interface Props {
  callback: (
    store: stateType
  ) => { members: StudentInfo[]; leader_uuid: string };
}

const PeoepleContainer: FC<Props> = ({ callback }) => {
  const { members, leader_uuid } = useSelector(callback);
  const [leaderData, setLeaderData] = useState<StudentInfo>(null);

  useEffect(() => {
    leader_uuid &&
      getStudentData(leader_uuid).then(res => {
        setLeaderData(res.data);
      });
  }, [leader_uuid]);

  const membersData = [[], [], []];
  members.forEach(({ grade, name }) => {
    membersData[grade - 1].push(name);
  });

  return (
    <People
      leader={leaderData && leaderData.name}
      one={membersData[0]}
      two={membersData[1]}
      three={membersData[2]}
    />
  );
};

export default PeoepleContainer;
