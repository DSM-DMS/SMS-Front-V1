import React from "react";
import { FC } from "react";
import { NavIconNoticeBlack } from "../../../assets";
import { Board, PageHeader, SearchInput } from "../../default";
import { BoardObj } from "../../default/Board/Board";
import * as S from "./styles";

const data: BoardObj[] = [
  {
    id: 1,
    date: "2020.07.08",
    title: "제목",
    viewCount: 1
  },
  {
    id: 1,
    date: "2020.07.08",
    title: "제목",
    viewCount: 1
  },
  {
    id: 1,
    date: "2020.07.08",
    title: "제목",
    viewCount: 1
  }
];

const ManagementNotice: FC = () => {
  return (
    <S.Container>
      <S.Header>
        <PageHeader
          imgSrc={NavIconNoticeBlack}
          title="동아리 공지 관리"
          type="DETAIL"
        />
        <div>
          <SearchInput
            placeHolder="검색할 공지 제목을 입력하세요."
            onChange={function () {}}
          />
          <S.WriteNoticeBtn>새 공지</S.WriteNoticeBtn>
        </div>
      </S.Header>
      <S.BoardWrap>
        <Board data={data} names={["번호", "제목", "날짜", "조회수"]} />
      </S.BoardWrap>
    </S.Container>
  );
};

export default ManagementNotice;
