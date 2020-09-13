import React, { FC, ReactElement, useState } from 'react';

import HistoryCard from './Card';
import HistorySelector from './Selector';
import Modal from './Modal';

import * as S from '../style';
import { OutingHistory } from '../../../assets';

interface Props {}

export interface Card {
  info: string;
  place: string;
  date: string;
  outTime: string;
  inTime: string;
  emergency: boolean;
}

const cards: Card[] = Array(4)
  .fill(0)
  .map((_, i) => ({
    info: `230${i + 1}`,
    place: `신성동 하나로마트`,
    date: `2020년 07월 1${i + 1}일`,
    outTime: `17:30`,
    inTime: `20:30`,
    emergency: i % 2 ? true : false,
  }));

const History: FC<Props> = (): ReactElement => {
  const [modal, setModal] = useState<boolean>(false);

  const handleModal = (isShow: boolean) => {
    setModal(isShow);
  };

  return (
    <S.HistoryWarp>
      <S.HistoryHead>
        <img src={OutingHistory} alt="history" title="history" />
        <S.HistoryTitle>내 외출신청 내역</S.HistoryTitle>
      </S.HistoryHead>
      <div>
        <S.HistoryCardWarp>
          {cards.map(({ date, inTime, info, outTime, place, emergency }) => (
            <HistoryCard
              key={info}
              date={date}
              inTime={inTime}
              info={info}
              outTime={outTime}
              place={place}
              emergency={emergency}
              handleModal={handleModal}
            />
          ))}
        </S.HistoryCardWarp>
        <HistorySelector />
        {modal && <Modal handleModal={handleModal} />}
      </div>
    </S.HistoryWarp>
  );
};

export default History;
