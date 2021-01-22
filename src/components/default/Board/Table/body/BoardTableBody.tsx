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
      {data.map(datas => (
        <BoardTableItem key={datas.announcement_uuid} {...datas} />
      ))}
    </S.BoardListDiv>
  );
};

export default BoardTableBody;
