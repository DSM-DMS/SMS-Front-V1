import React, { FC, useEffect } from "react";
import { CircleNoticeList } from "../../../../components";
import { BoardObj } from "../../../../components/default/Board/Board";
import { updateBoardList } from "../../../../modules/action/board";
import { customSelector } from "../../../../lib/utils";
import { useDispatch } from "react-redux";

const StaticData: BoardObj[] = [
  {
    id: 1,
    date: "2020.07.08",
    title: "제목1",
    circleName: "동아리1",
    viewCount: 1
  },
  {
    id: 2,
    date: "2020.07.08",
    title: "제목22",
    circleName: "동아리2",
    viewCount: 2
  },
  {
    id: 3,
    date: "2020.07.08",
    title: "제목333",
    circleName: "동아리3",
    viewCount: 3
  },
  {
    id: 4,
    date: "2020.07.08",
    title: "제목4444",
    circleName: "동아리1",
    viewCount: 4
  }
];

const CircleNoticeListContainer: FC = () => {
  const data = customSelector((state) => state.board.list);
  const disaptch = useDispatch();
  useEffect(() => {
    disaptch(updateBoardList(StaticData));
  }, []);
  return <CircleNoticeList data={data} />;
};

export default CircleNoticeListContainer;
