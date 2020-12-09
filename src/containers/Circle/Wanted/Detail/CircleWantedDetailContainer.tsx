import React, { FC } from "react";
import { CircleWantedDetail } from "../../../../components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PosterActionCreater } from "../../../../modules/action/poster";
import { RouteChildrenProps } from "react-router-dom";

const CircleWantedDetailContainer: FC<RouteChildrenProps> = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const recruitmentUuid = (match.params as any).id;
    dispatch(PosterActionCreater.getWantedInfoDetailSaga(recruitmentUuid));
  }, []);

  return <CircleWantedDetail />;
};

export default CircleWantedDetailContainer;
