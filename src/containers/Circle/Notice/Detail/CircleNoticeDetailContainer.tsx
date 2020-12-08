import React, { FC } from "react";
import { CircleNoticeDetail } from "../../../../components";
import { BoardDetail } from "../../../Notice/Detail/NoticeDetailContainer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateBoardDetail } from "../../../../modules/action/board";

const data: BoardDetail = {
  content: "몰라요 몰랑~"
};

const CircleNoticeDetailContainer: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateBoardDetail(data));
  }, []);
  return <CircleNoticeDetail />;
};

export default CircleNoticeDetailContainer;
