import React, { FC, useEffect } from "react";
import { CircleNoticeList } from "../../../../components";
import { useDispatch } from "react-redux";
import { getCircleNoticeListSaga } from "../../../../modules/action/notice";
import { RouteChildrenProps } from "react-router-dom";

const CircleNoticeListContainer: FC<RouteChildrenProps> = ({ match }) => {
  const disaptch = useDispatch();
  useEffect(() => {
    const id: string = (match.params as any).id || 0;
    disaptch(getCircleNoticeListSaga(Number(id)));
  }, []);
  return <CircleNoticeList />;
};

export default CircleNoticeListContainer;
