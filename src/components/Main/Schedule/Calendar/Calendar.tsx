import React, { memo } from "react";

import * as S from "./style";
import CalendarDate from "./CalendarDate";
import CalendarDay from "./CalendarDay";
import { Loading } from "../../../default";
import { stateType } from "../../../../modules/reducer";
import { useSelector } from "react-redux";

interface Props {}

const Calendar: React.FC<Props> = () => {
  const { scheduleLoading } = useSelector((state: stateType) => state.main);

  return (
    <S.Calendar>
      <CalendarDay />
      {scheduleLoading ? (
        <S.CalendarLoadingWrap>
          <Loading size="100px" />
        </S.CalendarLoadingWrap>
      ) : (
        <CalendarDate />
      )}
    </S.Calendar>
  );
};

export default memo(Calendar);
