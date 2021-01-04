import React, { FC, useState, useCallback, ChangeEvent } from "react";
import { NavIconNoticeBlue } from "../../../assets";
import { Board, ListPageHeader } from "../../default";
import * as S from "./styles";
import { makeFilterFunc } from "../../../lib/utils";
import { useSelector } from "react-redux";
import { stateType } from "../../../modules/reducer";
import { BoardListItem } from "../../../lib/api/payloads/Board";

const NoticeContainer: FC = () => {
  const data = useSelector((state: stateType) => state.notice.list);
  const noticeFilterFunc = makeFilterFunc<BoardListItem>(
    data,
    ({ title, writer_name }, keyword) =>
      title.includes(keyword) || writer_name.includes(keyword)
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
      <Board
        names={["번호", "제목", "날짜", "글쓴이", "조회수"]}
        data={noticeFilterFunc(keyword)}
      />
    </S.Container>
  );
};

export default NoticeContainer;
