import React, { FC } from "react";
import { CircleWantedDetail } from "../../../../components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PosterActionCreater } from "../../../../modules/action/poster";
import { RouteChildrenProps } from "react-router-dom";
import { getCircleNoticeListSaga } from "../../../../modules/action/notice";

const CircleWantedDetailContainer: FC<RouteChildrenProps> = ({ match }) => {
  const dispatch = useDispatch();

  const recruitmentUuid = (match.params as any).id;
  useEffect(() => {
    dispatch(PosterActionCreater.getWantedInfoDetailSaga(recruitmentUuid));
    dispatch(getCircleNoticeListSaga(0));
  }, []);

  return <CircleWantedDetail />;
};

export default CircleWantedDetailContainer;
