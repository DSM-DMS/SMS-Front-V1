import React, { FC } from "react";
import { CircleAllDetail } from "../../../../components";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getCircleInfoDetail,
  getCircleInfoDetailSaga,
  updatePosterDetail
} from "../../../../modules/action/poster";
import { RouteChildrenProps } from "react-router-dom";

const CircleAllDetailContainer: FC<RouteChildrenProps> = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const clubUuid = (match.params as any).id;
    dispatch(getCircleInfoDetailSaga(clubUuid));
  }, []);
  return <CircleAllDetail />;
};

export default CircleAllDetailContainer;
