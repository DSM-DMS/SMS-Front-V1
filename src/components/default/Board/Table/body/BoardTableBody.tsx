import React, { FC } from "react";
import { BoardListItem } from "../../../../../lib/api/payloads/Board";
import BoardTableItem from "./item/BoardTableItem";

interface Props {
  data: BoardListItem[];
}

const BoardTableBody: FC<Props> = ({ data }) => {
  return (
    <div>
      {data.map(datas => (
        <BoardTableItem {...datas} />
      ))}
    </div>
  );
};

export default BoardTableBody;
