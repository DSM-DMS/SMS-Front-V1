import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ManagementWantedDetail } from "../../../components";
import { managementActionCreater } from "../../../modules/action/management";

const ManagementWantedDetailContainer: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const uuid = window.localStorage.getItem("uuid");
    dispatch(managementActionCreater.getManagementWantedInfoSaga(uuid));
  }, []);
  return <ManagementWantedDetail />;
};

export default ManagementWantedDetailContainer;
