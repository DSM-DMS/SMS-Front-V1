import React, { FC, ChangeEvent } from "react";
import * as S from "./styles";
import { Board, ListPageHeader } from "../../../../components/default";
import { NavIconNoticeBlue } from "../../../../assets";
import { makeFilterFunc } from "../../../../lib/utils";
import { useState } from "react";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { stateType } from "../../../../modules/reducer";
import { BoardListItem } from "../../../../lib/api/payloads/Board";

const names = ["번호", "제목", "날짜", "동아리", "조회수"];

const CircleNoticeList: FC = () => {
  const { data, size } = useSelector((state: stateType) => ({
    data: state.notice.list,
    size: state.notice.size
  }));
  const [keyword, setKeyword] = useState<string>("");
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }, []);
  const noticeFilerFunc = makeFilterFunc<BoardListItem>(
    data,
    ({ date, title }, keyword) => title.includes(keyword)
  );
  return (
    <S.Container>
      <ListPageHeader
        imgSrc={NavIconNoticeBlue}
        onChange={onChange}
        title="동아리 공지사항"
      />
      <Board maxSize={size} names={names} data={noticeFilerFunc(keyword)} />
    </S.Container>
  );
};

export default CircleNoticeList;
