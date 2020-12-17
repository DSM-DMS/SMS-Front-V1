import React, { FC } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AdminOutingCardWaitList from "../../../../../components/Admin/Outing/Wait/List/AdminOutingCardWaitList";
import { OutingStatus } from "../../../../../lib/api/payloads/Outing";
import { getOutingCardListSaga } from "../../../../../modules/action/outingCard";

const AdminOutingWaitListContainer: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getOutingCardListSaga({
        status: OutingStatus["외출증 신청"]
      })
    );
  }, []);
  return <AdminOutingCardWaitList />;
};

export default AdminOutingWaitListContainer;
