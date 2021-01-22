import React, { FC, memo, useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import { useHistory } from "react-router";
import { HashTag } from "../Info/Body/Sub/styles";
import { CircleInfo } from "../../../modules/type/poster";
import { StudentInfo } from "../../../modules/type/user";
import { getStudentData } from "../../../lib/api/client";
import { getImgUrl } from "../../../lib/utils";

const AllCircleBox: FC<CircleInfo> = ({
  club_concept,
  name,
  member_uuids,
  logo_uri,
  location,
  link,
  leader_uuid,
  introduction,
  club_uuid,
  field,
  floor
}) => {
  const history = useHistory();
  const onClick = useCallback(() => {
    history.push(`/circles/all/${club_uuid}`);
  }, []);

  const [leaderData, setLeaderData] = useState<StudentInfo>(null);

  useEffect(() => {
    getStudentData(leader_uuid).then(res => {
      setLeaderData(res.data);
    });
  }, []);

  return (
    <S.Container onClick={onClick}>
      <div>
        <S.Header>
          <S.CircleName>{name}</S.CircleName>
          <div>{location}</div>
        </S.Header>
        <S.CircleIntroduce>{club_concept}</S.CircleIntroduce>
        <S.WantedJob>동아리장 {leaderData && leaderData.name}</S.WantedJob>
      </div>
      <S.Footer>
        <div>
          <span>
            <HashTag>{field}</HashTag>
          </span>
        </div>
        <S.Field>|</S.Field>
      </S.Footer>
      <img src={getImgUrl(logo_uri)} />
    </S.Container>
  );
};

export default memo(AllCircleBox);
