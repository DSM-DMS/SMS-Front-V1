import React, { FC, ChangeEvent } from "react";
import * as S from "./styles";
import { Board, ListPageHeader } from "../../../../components/default";
import { NavIconNoticeBlue } from "../../../../assets";
import { makeFilterFunc } from "../../../../lib/utils";
import { BoardObj } from "../../../default/Board/Board";
import { useState } from "react";
import { useCallback } from "react";

interface Props {
  data: BoardObj[];
}

const names = ["번호", "제목", "날짜", "동아리", "조회수"];

const CircleNoticeList: FC<Props> = ({ data }) => {
  const [keyword, setKeyword] = useState<string>("");
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }, []);
  const noticeFilerFunc = makeFilterFunc<BoardObj>(
    data,
    ({ date, title }, keyword) =>
      title.includes(keyword) || date.includes(keyword)
  );
  return (
    <S.Container>
      <ListPageHeader
        imgSrc={NavIconNoticeBlue}
        onChange={onChange}
        title="동아리 공지사항"
      />
      <Board names={names} data={noticeFilerFunc(keyword)} />
    </S.Container>
  );
};

export default CircleNoticeList;
