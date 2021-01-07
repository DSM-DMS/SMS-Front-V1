import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouteChildrenProps } from "react-router-dom";
import { AdminNoticeMineDetail } from "../../../../components";
import { getNoticeDetail } from "../../../../modules/action/notice/detail";

const AdminNoticeMineDetailContainer: FC<
  RouteChildrenProps<{ id: string }>
> = ({ match }) => {
  const dispatch = useDispatch();
  const uuid: string = match.params.id;

  useEffect(() => {
    dispatch(getNoticeDetail(uuid));
  }, [uuid]);

  return <AdminNoticeMineDetail />;
};

export default AdminNoticeMineDetailContainer;
