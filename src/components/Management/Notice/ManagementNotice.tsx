import React, { ChangeEvent, useCallback, useState, FC } from "react";
import { useSelector } from "react-redux";
import { NavIconNoticeBlack } from "../../../assets";
import { BoardListItem } from "../../../lib/api/payloads/Board";
import { makeFilterFunc } from "../../../lib/utils";
import { stateType } from "../../../modules/reducer";
import { Board, PageHeader, SearchInput } from "../../default";
import * as S from "./styles";

const ManagementNotice: FC = () => {
  const data = useSelector((store: stateType) => store.notice.list);
  const [keyword, setKeyword] = useState<string>("");

  const changeKeyword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }, []);
  const filterData = makeFilterFunc<BoardListItem>(
    data,
    ({ title, writer_name }, str) =>
      title.includes(str) || writer_name.includes(str)
  );

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
            onChange={changeKeyword}
          />
          <S.WriteNoticeBtn to="/management/notice/write">
            새 공지
          </S.WriteNoticeBtn>
        </div>
      </S.Header>
      <S.BoardWrap>
        <Board
          data={filterData(keyword)}
          names={["번호", "제목", "날짜", "동아리", "조회수"]}
        />
      </S.BoardWrap>
    </S.Container>
  );
};

export default ManagementNotice;
