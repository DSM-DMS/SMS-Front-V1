import React, { FC, useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Card from "./Card";
import Modal from "./Modal";

import * as S from "../style";
import { OutingHistory, Refresh } from "../../../assets";
import { ResHistoryItem } from "../../../lib/api/payloads/Outing";
import { Loading } from "../../default";
import { setSelectedHistory } from "../../../modules/action/outing";
import useOutingHistories from "../../../lib/hooks/useOutingHistories";
import useModal from "../../../lib/hooks/common/useModal";

interface Props {}

const History: FC<Props> = ({}) => {
  const dispatch = useDispatch();
  const [selectedOuting, setSelectedOuting] = useState<ResHistoryItem>(null);
  const [modal, openModal, closeModal] = useModal();
  const {
    histories,
    historyStart,
    loading,
    getHistories,
    refreshOutingHistories
  } = useOutingHistories();

  const dispatchSelectedOuting = useCallback((outing: ResHistoryItem) => {
    dispatch(setSelectedHistory(outing));
  }, []);

  const selectOuting = useCallback((outing: ResHistoryItem) => {
    setSelectedOuting(outing);
  }, []);

  const onClickGetHistories = useCallback(() => {
    getHistories(historyStart);
  }, [historyStart]);

  const displayOutingCard = useMemo(() => {
    return histories.map(outing => (
      <Card
        key={outing.outing_uuid}
        outing={outing}
        openModal={openModal}
        handleCard={dispatchSelectedOuting}
        selectOuting={selectOuting}
      />
    ));
  }, [histories]);

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
              onClick={loading ? void {} : refreshOutingHistories}
            />
          </S.HistoryRefresh>
        </div>
      </S.HistoryHead>
      <S.HistoryContent>
        {historyStart === 0 && <Loading />}
        {historyStart !== 0 && histories.length === 0 ? (
          <S.HistoryNoContent>
            외출신청 내역이 없습니다.{" "}
            <Link to="/outing/apply">외출신청하러 가기!</Link>
          </S.HistoryNoContent>
        ) : (
          <S.HistoryCardWrap>{displayOutingCard}</S.HistoryCardWrap>
        )}
        {historyStart === histories.length && (
          <S.MoreButton onClick={onClickGetHistories}>
            더 보기
            {loading && <Loading size="24px" />}
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
