import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";

import useCustomSelector from "./useCustomSelector";
import useDidMountEffect from "./useDidMountEffect";

import { getSchedulesSaga, setSchedulerDate } from "../../modules/action/main";
import { padNum } from "../utils";

const useScheduleState = () => {
  const dispatch = useDispatch();
  const {
    main: { schedulerDate }
  } = useCustomSelector();

  const onClickNextMonth = useCallback(() => {
    const next = new Date(
      schedulerDate.getFullYear(),
      schedulerDate.getMonth() + 1
    );
    dispatch(setSchedulerDate(next));
  }, [schedulerDate]);

  const onClickPrevMonth = useCallback(() => {
    const prev = new Date(
      schedulerDate.getFullYear(),
      schedulerDate.getMonth() - 1
    );
    dispatch(setSchedulerDate(prev));
  }, [schedulerDate]);

  const localDateString = useMemo(() => {
    return `${schedulerDate.getFullYear()}.${padNum(
      schedulerDate.getMonth() + 1
    )}`;
  }, [schedulerDate]);

  useDidMountEffect(() => {
    const year = schedulerDate.getFullYear();
    const month = schedulerDate.getMonth() + 1;

    dispatch(getSchedulesSaga(year, month));
  }, [schedulerDate]);

  return [onClickNextMonth, onClickPrevMonth, localDateString] as const;
};

export default useScheduleState;
