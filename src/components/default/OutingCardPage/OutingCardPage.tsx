import React, { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as S from "./styles";

import OutingCard from "../OutingCard/OutingCard";
import OutingCardFilter from "../Filter/OutingCardFilter";
import OutingCardModal from "../Modal/OutingCardModal/OutingCardModal";
import { stateType } from "../../../modules/reducer";
import {
  OutingCardFilter as OutingCardFilterType,
  ReqOutingCardFilter
} from "../../../lib/api/payloads/OutingCard";
import { getOutingCardListSaga } from "../../../modules/action/outingCard";

interface Props {
  title: string;
  status: number;
  isClicked: (...arg: any) => void;
}

const OutingCardPage: FC<Props> = ({ title, isClicked, status }) => {
  const dispatch = useDispatch();
  const data = useSelector((state: stateType) => state.outingCard.list);
  const [filterData, setFilterData] = useState<ReqOutingCardFilter>({
    status
  });

  useEffect(() => {
    if (
      filterData.floor === undefined &&
      filterData.grade === undefined &&
      filterData.group === undefined
    )
      return;

    if (
      (filterData.grade === 0 && filterData.group === 0) ||
      filterData.floor === 0
    ) {
      const deleteFilterData: ReqOutingCardFilter = {
        status: filterData.status
      };
      dispatch(getOutingCardListSaga(deleteFilterData));
      return;
    }
    dispatch(getOutingCardListSaga(filterData));
  }, [filterData.floor, filterData.grade, filterData.group]);

  const filterChangeHandler = useCallback((data: OutingCardFilterType) => {
    const filterData: ReqOutingCardFilter = {
      ...data,
      status
    };
    setFilterData(filterData);
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.HeaderText>{title}</S.HeaderText>
        <OutingCardFilter onChange={filterChangeHandler} />
      </S.Header>
      <S.CardContainer>
        {data.length ? (
          data.map(data => (
            <OutingCard
              key={data.outing_uuid}
              {...data}
              isClicked={isClicked}
            />
          ))
        ) : (
          <S.EmptyList>리스트가 없습니당</S.EmptyList>
        )}
      </S.CardContainer>
      <OutingCardModal />
    </S.Container>
  );
};

export default OutingCardPage;
