import React, {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useState
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { OutingHistory } from "../../components";
import { getHistory } from "../../lib/api/Outing";
import { ResHistoryItem } from "../../lib/api/payloads/Outing";
import { getAxiosError } from "../../lib/utils";
import {
  resetOutingHistoryList,
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

  const dispatchSelectedOuting = useCallback((outing: ResHistoryItem) => {
    dispatch(setSelectedHistory(outing));
  }, []);

  const closeModal = useCallback(() => {
    setModal(false);
  }, []);

  const openModal = useCallback(() => {
    setModal(true);
  }, []);

  const getHistories = useCallback(
    async (historyStart: number) => {
      if (historyStart > histories.length) {
        toast.error("불러올 외출신청 내역이 없습니다.");
        return;
      }

      try {
        const {
          data: { outings }
        } = await getHistory(localStorage.getItem("uuid"), historyStart);

        dispatch(setOutingHistoryList(outings));
        setHistoryStart(prev => (prev += 9));
      } catch {}
    },
    [histories]
  );

  const refreshOutingHistories = () => {
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

  return (
    <OutingHistory
      histories={histories}
      historyStart={historyStart}
      modal={modal}
      closeModal={closeModal}
      openModal={openModal}
      getHistories={getHistories}
      refreshOutingHistories={refreshOutingHistories}
      dispatchSelectedOuting={dispatchSelectedOuting}
    />
  );
};

export default HistoryContainer;
