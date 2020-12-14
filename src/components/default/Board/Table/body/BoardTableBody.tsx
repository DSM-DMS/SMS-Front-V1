import React, { FC } from "react";
import { BoardListitem } from "../../../../../modules/type/board";
import { BoardObj } from "../../Board";
import BoardTableItem from "./item/BoardTableItem";

interface Props {
  data: BoardListitem[];
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
