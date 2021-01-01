import React, { useEffect } from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { RouteChildrenProps } from "react-router-dom";
import { ManagementNoticeEdit } from "../../../components";
import { getNoticeDetailSaga } from "../../../modules/action/notice";

const ManagementNoticeEditContainer: FC<RouteChildrenProps> = ({ match }) => {
  const dispatch = useDispatch();

  const id: string = (match.params as any).id;
  useEffect(() => {
    dispatch(getNoticeDetailSaga(id));
  }, [id]);
  return <ManagementNoticeEdit id={id} />;
};

export default ManagementNoticeEditContainer;
