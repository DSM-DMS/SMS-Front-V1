import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouteChildrenProps } from "react-router-dom";
import { AdminNoticeAllDetail } from "../../../../components";
import { getNoticeDetail } from "../../../../modules/action/notice/detail";

const AdminNoticeAllDetailContainer: FC<RouteChildrenProps> = ({ match }) => {
  const dispatch = useDispatch();
  const id: string = (match.params as any).id;

  useEffect(() => {
    dispatch(getNoticeDetail(id));
  }, [id]);
  return <AdminNoticeAllDetail />;
};

export default AdminNoticeAllDetailContainer;
