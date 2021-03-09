import React, { FC } from "react";
import { NoticeDetail } from "../../../components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNoticeDetail } from "../../../modules/action/notice/detail";
import { RouteChildrenProps } from "react-router-dom";
import { UserType } from "../../../modules/action/header";
import { getCheckNotice } from "../../../modules/action/checkNotice";

export interface BoardDetail {
  content: string;
}

const NoticePageContainer: FC<RouteChildrenProps> = ({ match }) => {
  const dispatch = useDispatch();
  const id: string = (match.params as any).id;

  useEffect(() => {
    dispatch(getNoticeDetail(id));

    const type = localStorage.getItem("sms-type") as UserType;

    const uuid: string = localStorage.getItem("uuid");
    if (uuid && type === "student") {
      dispatch(getCheckNotice(uuid));
    }
  }, [id]);
  return <NoticeDetail />;
};

export default NoticePageContainer;
