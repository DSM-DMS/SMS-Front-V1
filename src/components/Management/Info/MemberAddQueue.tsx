import React, { FC } from "react";

import * as S from "./style";

import { ResStudents } from "../../../lib/api/payloads/Management";
import { formattingStudent, sorting } from "../../../lib/utils";

interface Props {
  leaderUuid: string;
  addQueue: ResStudents[];
}

const MemberAddQueue: FC<Props> = ({ leaderUuid, addQueue }) => {
  return (
    <S.QueueWrap>
      <S.Queue>
        {addQueue.sort(sorting).map(member => {
          const { student_uuid, name } = member;
          if (student_uuid !== leaderUuid) {
            return (
              <S.ResultItem key={student_uuid}>
                <span>
                  {formattingStudent(member)} {name}
                </span>
              </S.ResultItem>
            );
          }
        })}
      </S.Queue>
    </S.QueueWrap>
  );
};

export default MemberAddQueue;
