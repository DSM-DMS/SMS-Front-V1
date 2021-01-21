import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AdminOutingOk } from "../../../../components";
import { OutingStatus } from "../../../../lib/api/payloads/Outing";
import { getOutingCardListSaga } from "../../../../modules/action/outingCard";

const AdminOutingOkContainer: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getOutingCardListSaga({
        status: OutingStatus["외출 인증 승인"]
      })
    );
  }, []);
  return <AdminOutingOk />;
};

export default AdminOutingOkContainer;
