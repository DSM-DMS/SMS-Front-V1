import React, { FC, useState, useCallback, ChangeEvent } from "react";
import { NavIconNoticeBlue } from "../../../assets";
import { Board, ListPageHeader } from "../../default";
import * as S from "./styles";
import { makeFilterFunc, customSelector } from "../../../lib/utils";
import { BoardObj } from "../../default/Board/Board";

const names = ["번호", "제목", "날짜", "조회수"];

const NoticeContainer: FC = () => {
  const data = customSelector((state) => state.board.list);
  const noticeFilterFunc = makeFilterFunc<BoardObj>(
    data,
    ({ title }, keyword) => title.includes(keyword)
  );
  const [keyword, setKeyword] = useState("");
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }, []);

  return (
    <S.Container>
      <ListPageHeader
        onChange={onChange}
        title="공지사항"
        imgSrc={NavIconNoticeBlue}
      />
      <Board names={names} data={noticeFilterFunc(keyword)} />
    </S.Container>
  );
};

export default NoticeContainer;
