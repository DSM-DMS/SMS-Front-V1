import React, { FC } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AdminOutingDone } from "../../../../components";
import { OutingStatus } from "../../../../lib/api/payloads/Outing";
import { getOutingCardListSaga } from "../../../../modules/action/outingCard";

const AdminOutingNowListContainer: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getOutingCardListSaga({
        status: OutingStatus["외출 종료"]
      })
    );
  }, []);
  return <AdminOutingDone />;
};

export default AdminOutingNowListContainer;
