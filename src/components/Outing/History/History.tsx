import React, { FC, ReactElement, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Card from "./Card";
import Modal from "./Modal";

import * as S from "../style";
import { OutingHistory, Refresh } from "../../../assets";
import { ResHistoryItem } from "../../../lib/api/payloads/Outing";
import { subPageMove } from "../../../modules/action/page";
import { Loading } from "../../default";

interface Props {
  histories: ResHistoryItem[];
  historyStart: number;
  modal: boolean;
  closeModal: () => void;
  openModal: () => void;
  getHistories: (historyStart: number) => Promise<void>;
  refreshOutingHistories: () => void;
  dispatchSelectedOuting: (histories: ResHistoryItem) => void;
}

const History: FC<Props> = ({
  histories,
  historyStart,
  modal,
  openModal,
  closeModal,
  getHistories,
  refreshOutingHistories,
  dispatchSelectedOuting
}): ReactElement => {
  const dispatch = useDispatch();
  const [selectedOuting, setSelectedOuting] = useState<ResHistoryItem>(null);

  const selectOuting = useCallback((outing: ResHistoryItem) => {
    setSelectedOuting(outing);
  }, []);

  return (
    <S.HistoryWrap>
      <S.HistoryHead>
        <img src={OutingHistory} alt="history" title="history" />
        <div>
          <S.HistoryTitle>내 외출신청 내역</S.HistoryTitle>
          <S.HistoryRefresh>
            <img
              src={Refresh}
              alt="refresh outing history"
              title="refresh outing history"
              onClick={refreshOutingHistories}
            />
          </S.HistoryRefresh>
        </div>
      </S.HistoryHead>
      <S.HistoryContent>
        {historyStart === 0 && <Loading />}
        {historyStart !== 0 && histories.length === 0 ? (
          <S.HistoryNoContent>
            외출신청 내역이 없습니다.
            <Link
              to="/outing/apply"
              onClick={() => dispatch(subPageMove("외출신청"))}
            >
              외출신청하러 가기!
            </Link>
          </S.HistoryNoContent>
        ) : (
          <S.HistoryCardWrap>
            {histories.map(outing => (
              <Card
                key={outing.outing_uuid}
                outing={outing}
                openModal={openModal}
                handleCard={dispatchSelectedOuting}
                selectOuting={selectOuting}
              />
            ))}
          </S.HistoryCardWrap>
        )}

        {historyStart === histories.length && (
          <S.MoreButton onClick={() => getHistories(historyStart)}>
            더 보기
          </S.MoreButton>
        )}
        {modal && (
          <Modal closeModal={closeModal} selectedOuting={selectedOuting} />
        )}
      </S.HistoryContent>
    </S.HistoryWrap>
  );
};

export default History;
