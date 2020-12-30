import React, { FC } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AdminOutingNowList } from "../../../../../components";
import { OutingStatus } from "../../../../../lib/api/payloads/Outing";
import { getOutingCardListSaga } from "../../../../../modules/action/outingCard";

const AdminOutingNowListContainer: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getOutingCardListSaga({
        status: OutingStatus["선생님 승인"]
      })
    );
  }, []);
  return <AdminOutingNowList />;
};

export default AdminOutingNowListContainer;
