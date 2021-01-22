import React, { FC, useEffect } from "react";
import { RouteChildrenProps } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getNoticeDetail } from "../../../../modules/action/notice/detail";
import { AdminNoticeEdit } from "../../../../components";

const AdminNoticeEditContainer: FC<RouteChildrenProps<{ id: string }>> = ({
  match
}) => {
  const dispatch = useDispatch();

  const id: string = match.params.id;

  useEffect(() => {
    dispatch(getNoticeDetail(id));
  }, [id]);

  return <AdminNoticeEdit />;
};

export default AdminNoticeEditContainer;
