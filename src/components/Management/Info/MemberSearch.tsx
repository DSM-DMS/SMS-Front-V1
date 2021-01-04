import React, { ChangeEvent, FC } from "react";

import * as S from "./style";
import { filters } from "./MemberAddModal";

import { Search } from "../../../assets";
import { ResStudents } from "../../../lib/api/payloads/Management";
import { sorting } from "../../../lib/utils";

interface Props {
  addQueue: ResStudents[];
  students: ResStudents[];
  filter: string;
  leaderUuid: string;
  handleSearchStudents: () => void;
  handleAddQueue: (student: ResStudents) => void;
  handleFilter: (id: string) => void;
  handleValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

const MemberSearch: FC<Props> = ({
  addQueue,
  students,
  filter,
  leaderUuid,
  handleSearchStudents,
  handleAddQueue,
  handleFilter,
  handleValue
}) => {
  return (
    <S.SearchingWrap>
      <div>
        <p>학생 검색</p>
        <S.SearchFilterWrap>
          {filters.map(({ id, text }) => (
            <S.SearchFilter
              key={id}
              className={filter === id ? "selected" : ""}
              onClick={() => handleFilter(id)}
            >
              <S.SearchFilterCircle />
              <S.SearchFilterText>{text}</S.SearchFilterText>
            </S.SearchFilter>
          ))}
        </S.SearchFilterWrap>
        <S.SearchLabel>
          <img
            src={Search}
            alt="search"
            title="search"
            onClick={handleSearchStudents}
          />
          <S.SearchText
            onChange={handleValue}
            type="text"
            placeholder="검색어"
          />
        </S.SearchLabel>
        <S.Result>
          {students
            .filter(
              ({ student_uuid }) =>
                student_uuid !== leaderUuid &&
                addQueue.findIndex(
                  ({ student_uuid: addUuid }) => addUuid === student_uuid
                ) === -1
            )
            .sort(sorting)
            .map(student => {
              return (
                <S.ResultItem
                  key={student.student_uuid}
                  onClick={() => handleAddQueue(student)}
                >
                  <span>{student.grade}학년</span>
                  <span>{student.group}반</span>
                  <span>{student.student_number}번</span>
                  <span>{student.name}</span>
                </S.ResultItem>
              );
            })}
        </S.Result>
      </div>
    </S.SearchingWrap>
  );
};

export default MemberSearch;
