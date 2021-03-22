import React, { FC } from "react";
import { BoardListItem } from "../../../../../lib/api/payloads/Board";
import BoardTableItem from "./item/BoardTableItem";
import * as S from "../styles";

interface Props {
  data: BoardListItem[];
}

const BoardTableBody: FC<Props> = ({ data }) => {
  return (
    <S.BoardListDiv>
      {data.length ? (
        data.map(datas => (
          <BoardTableItem key={datas.announcement_uuid} {...datas} />
        ))
      ) : (
        <S.EmptyList>공지사항이 존재하지 않습니다.</S.EmptyList>
      )}
    </S.BoardListDiv>
  );
};

export default BoardTableBody;
