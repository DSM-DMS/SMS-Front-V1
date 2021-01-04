import React, { FC, useEffect } from "react";
import { CircleAllDetail } from "../../../../components";
import { useDispatch } from "react-redux";
import { getCircleInfoDetailSaga } from "../../../../modules/action/poster";
import { RouteChildrenProps } from "react-router-dom";
import { getCircleNoticeListSaga } from "../../../../modules/action/notice";

const CircleAllDetailContainer: FC<RouteChildrenProps> = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const clubUuid = (match.params as any).id;
    dispatch(getCircleNoticeListSaga(0));
    dispatch(getCircleInfoDetailSaga(clubUuid));
  }, []);
  return <CircleAllDetail />;
};

export default CircleAllDetailContainer;
