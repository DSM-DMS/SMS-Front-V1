import React, { FC } from "react";
import { CircleWantedList } from "../../../../components";
import { useEffect } from "react";
import {
  getWantedInfoList,
  getWantedInfoListSaga
} from "../../../../modules/action/poster";
import { useDispatch } from "react-redux";
import { WantedInfo } from "../../../../modules/type/poster";

const CircleWantedContainer: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWantedInfoListSaga());
  });
  return <CircleWantedList />;
};

export default CircleWantedContainer;
