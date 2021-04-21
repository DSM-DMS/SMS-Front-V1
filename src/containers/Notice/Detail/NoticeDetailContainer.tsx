import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouteChildrenProps } from "react-router-dom";

import { NoticeDetail } from "../../../components";
import { getNoticeDetail } from "../../../modules/action/notice/detail";
import { getCheckNotice } from "../../../modules/action/checkNotice";

export interface BoardDetail {
  content: string;
}

const NoticePageContainer: FC<RouteChildrenProps> = ({ match }) => {
  const dispatch = useDispatch();
  const id: string = (match.params as any).id;

  useEffect(() => {
    dispatch(getNoticeDetail(id));

    const uuid: string = localStorage.getItem("uuid");
    if (uuid) {
      dispatch(getCheckNotice(uuid));
    }
  }, [id]);
  return <NoticeDetail />;
};

export default NoticePageContainer;
