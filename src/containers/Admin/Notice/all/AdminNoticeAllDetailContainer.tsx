import React, { FC } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AdminNoticeAllDetail } from "../../../../components";
import { updateBoardDetail } from "../../../../modules/action/board";

const AdminNoticeAllDetailContainer: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateBoardDetail({ content: "몰라 씨@@@@발" }));
  }, []);
  return <AdminNoticeAllDetail />;
};

export default AdminNoticeAllDetailContainer;
