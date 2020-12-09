import React, { FC, ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { OutingHistory } from "../../components";
import { getHistory } from "../../lib/api/Outing";
import { ResHistoryItem } from "../../lib/api/payloads/Outing";
import {
  setOutingHistoryList,
  setSelectedHistory
} from "../../modules/action/outing";
import { stateType } from "../../modules/reducer";

interface Props {}

const HistoryContainer: FC<Props> = (): ReactElement => {
  const dispatch = useDispatch();
  const { histories } = useSelector((state: stateType) => state.outing);
  const [historyStart, setHistoryStart] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);

  const dispatchSelectedOuting = (outing: ResHistoryItem) => {
    dispatch(setSelectedHistory(outing));
  };

  const closeModal = () => {
    setModal(false);
  };

  const openModal = () => {
    setModal(true);
  };

  const getHistories = async () => {
    if (historyStart !== histories.length) {
      return alert("불러올 외출신청 내역이 없습니다.");
    }

    try {
      const {
        data: { outings }
      } = await getHistory(localStorage.getItem("student_uuid"), historyStart);

      dispatch(setOutingHistoryList(outings));
      setHistoryStart(prev => (prev += 10));
    } catch (err) {
      const status = err?.response?.data?.status;

      if (status === 403) {
        return alert("학생 계정으로 외출 신청 내역을 조회할 수 있습니다.");
      }
    }
  };

  useEffect(() => {
    getHistories();
  }, []);

  return (
    <OutingHistory
      histories={histories}
      modal={modal}
      closeModal={closeModal}
      openModal={openModal}
      getHistories={getHistories}
      dispatchSelectedOuting={dispatchSelectedOuting}
    />
  );
};

export default HistoryContainer;
