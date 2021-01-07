import React, { FC, useEffect } from "react";
import { CircleAll } from "../../../components";
import { useDispatch } from "react-redux";
import { getCircleInfoListSaga } from "../../../modules/action/poster";

const CircleAllContainer: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCircleInfoListSaga());
  }, []);
  return <CircleAll />;
};

export default CircleAllContainer;
