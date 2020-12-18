import React, {
  ChangeEvent,
  FC,
  useState,
  useEffect,
  useCallback
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { stateType } from "../../../modules/reducer";
import OutingCardFilter from "../Filter/OutingCardFilter";
import OutingCardModal from "../Modal/OutingCardModal/OutingCardModal";
import {
  OutingCardFilter as OutingCardFilterType,
  ReqOutingCardFilter
} from "../../../lib/api/payloads/OutingCard";
import OutingCard from "../OutingCard/OutingCard";
import * as S from "./styles";
import { getOutingCardListSaga } from "../../../modules/action/outingCard";

interface Props {
  title: string;
  status: number;
  isClicked: boolean;
}

const OutingCardPage: FC<Props> = ({ title, isClicked, status }) => {
  const data = useSelector((state: stateType) => state.outingCard.list);
  const dispatch = useDispatch();

  const filterChangeHandler = useCallback((data: OutingCardFilterType) => {
    const filterData: ReqOutingCardFilter = {
      ...data,
      status
    };
    dispatch(getOutingCardListSaga(filterData));
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.HeaderText>{title}</S.HeaderText>
        <OutingCardFilter onChange={filterChangeHandler} />
      </S.Header>
      <S.CardContainer>
        {data.map(data => (
          <OutingCard key={data.outing_uuid} {...data} isClicked={isClicked} />
        ))}
      </S.CardContainer>
      <OutingCardModal />
    </S.Container>
  );
};

export default OutingCardPage;
