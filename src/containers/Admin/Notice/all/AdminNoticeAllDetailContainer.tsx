import React, { FC } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouteChildrenProps } from "react-router-dom";
import { AdminNoticeAllDetail } from "../../../../components";
import { getNoticeDetailSaga } from "../../../../modules/action/notice";

const AdminNoticeAllDetailContainer: FC<RouteChildrenProps> = ({ match }) => {
  const dispatch = useDispatch();
  const id: string = (match.params as any).id;

  useEffect(() => {
    dispatch(getNoticeDetailSaga(id));
  }, [id]);
  return <AdminNoticeAllDetail />;
};

export default AdminNoticeAllDetailContainer;
