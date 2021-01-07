import React, { FC } from "react";
import { CircleWantedList } from "../../../../components";
import { useEffect } from "react";
import { getWantedInfoListSaga } from "../../../../modules/action/poster";
import { useDispatch } from "react-redux";

const CircleWantedContainer: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWantedInfoListSaga());
  }, []);
  return <CircleWantedList />;
};

export default CircleWantedContainer;
