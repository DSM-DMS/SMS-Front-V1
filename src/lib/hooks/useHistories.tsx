import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import useCustomSelector from "./useCustomSelector";

import {
  resetOutingHistoryList,
  setOutingHistoryList
} from "../../modules/action/outing";
import { getHistory } from "../api/Outing";

export const HISTORY_PARAM_COUNT = 9;

const useHistories = () => {
  const dispatch = useDispatch();
  const { histories } = useCustomSelector().outing;
  const [historyStart, setHistoryStart] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const getHistories = useCallback(
    async (historyStart: number) => {
      setLoading(true);
      if (historyStart > histories.length) {
        toast.error("불러올 외출신청 내역이 없습니다.");
        return;
      }

      try {
        const uuid = localStorage.getItem("uuid");
        const { data } = await getHistory(uuid, historyStart);

        dispatch(setOutingHistoryList(data.outings));
        setHistoryStart(prev => (prev += HISTORY_PARAM_COUNT));
      } finally {
        setLoading(false);
      }
    },
    [histories, loading]
  );

  const refreshOutingHistories = () => {
    setLoading(true);
    dispatch(resetOutingHistoryList());
    setHistoryStart(0);
    setTimeout(() => {
      getHistories(0);
    }, 1000);
  };

  useEffect(() => {
    dispatch(resetOutingHistoryList());
    getHistories(historyStart);
  }, []);

  return {
    histories,
    historyStart,
    loading,
    getHistories,
    refreshOutingHistories
  };
};

export default useHistories;
