import React, { FC, useState, useCallback, ChangeEvent } from "react";
import * as S from "./styles";
import BoardTableHeader from "./Table/header/BoardTableHeader";
import BoardTableBody from "./Table/body/BoardTableBody";
import { BoardListItem } from "../../../lib/api/payloads/Board";

export interface BoardObj {
  id: number;
  title: string;
  date: string;
  circleName?: string;
  viewCount: number;
}

interface Props {
  names: string[];
  data: BoardListItem[];
}

const Board: FC<Props> = ({ data, names }) => {
  return (
    <S.Container>
      <BoardTableHeader names={names} />
      <BoardTableBody data={data} />
    </S.Container>
  );
};

export default Board;
