import React, { useEffect, FC } from "react";
import { useDispatch } from "react-redux";
import { RouteChildrenProps } from "react-router-dom";
import { ManagementNoticeEdit } from "../../../components";
import { getNoticeDetail } from "../../../modules/action/notice/detail";

const ManagementNoticeEditContainer: FC<RouteChildrenProps> = ({ match }) => {
  const dispatch = useDispatch();

  const id: string = (match.params as any).id;
  useEffect(() => {
    dispatch(getNoticeDetail(id));
  }, [id]);
  return <ManagementNoticeEdit />;
};

export default ManagementNoticeEditContainer;
