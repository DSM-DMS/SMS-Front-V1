import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { ChangeEvent } from "react";
import { FC } from "react";
import { useSelector } from "react-redux";
import { NavIconNoticeMint } from "../../../../assets";
import { BoardListItem } from "../../../../lib/api/payloads/Board";
import { makeFilterFunc } from "../../../../lib/utils";
import { stateType } from "../../../../modules/reducer";
import { Board, ListPageHeader } from "../../../default";
import * as S from "./styles";

const AdminNoticeMine: FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const changeKeyword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }, []);
  const { data, size } = useSelector((state: stateType) => ({
    data: state.notice.list,
    size: state.notice.size
  }));
  const filterFunc = makeFilterFunc<BoardListItem>(
    data,
    ({ title, writer_name }, str) =>
      title.includes(str) || writer_name.includes(str)
  );
  return (
    <S.Container>
      <ListPageHeader
        imgSrc={NavIconNoticeMint}
        onChange={changeKeyword}
        title="내가 올린 공지사항"
      />

      <Board
        maxSize={size}
        data={filterFunc(keyword)}
        names={["번호", "제목", "날짜", "글쓴이", "조회수"]}
      />
    </S.Container>
  );
};

export default AdminNoticeMine;
