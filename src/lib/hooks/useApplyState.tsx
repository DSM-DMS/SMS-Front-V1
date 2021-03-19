import { ChangeEvent, useCallback, useState } from "react";
import { toast } from "react-toastify";

import { padNum } from "../utils";

export type ApplyState = ReturnType<typeof useApplyState>;

const useApplyState = () => {
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [place, setPlace] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [situation, setSituation] = useState<boolean>(false);

  const checkStartTimeValid = useCallback(
    (startTime: string) => {
      if (endTime === "") return true;
      if (endTime < startTime) return false;
      return true;
    },
    [endTime]
  );

  const checkEndTimeValid = useCallback(
    (endTime: string) => {
      if (startTime === "") return true;
      if (startTime > endTime) return false;
      return true;
    },
    [startTime]
  );

  const handleStartTime = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const START_TIME = "16:20";
      const now = new Date();
      const format = `${padNum(now.getHours())}:${padNum(now.getMinutes())}`;

      if (value < format) {
        toast.error("'이미 지난 시각입니다.'");
        return;
      }
      if (value < START_TIME) {
        toast.error("외출은 16시 20분 이후에 가능합니다.");
        return;
      }
      if (!checkStartTimeValid(value)) {
        toast.error("귀교 시간보다 빠를 수 없습니다.");
        return;
      }

      setStartTime(value);
    },
    [endTime]
  );

  const handleEndTime = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const END_TIME = "20:30";
      const now = new Date();
      const format = `${padNum(now.getHours())}:${padNum(now.getMinutes())}`;

      if (value < format) {
        toast.error("'이미 지난 시각입니다.'");
        return;
      }
      if (value > END_TIME) {
        toast.error("외출은 20시 30분 이후엔 불가능합니다.");
        return;
      }
      if (!checkEndTimeValid(value)) {
        toast.error("외출 시간보다 늦을 수 없습니다.");
        return;
      }

      setEndTime(value);
    },
    [startTime]
  );

  const handlePlace = useCallback((value: string) => {
    setPlace(value);
  }, []);

  const cancelSickOut = useCallback(() => {
    setSituation(false);
  }, []);

  const applySickOut = useCallback(() => {
    setSituation(true);
  }, []);

  const handleReason = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setReason(e.currentTarget.value);
  }, []);

  return {
    startTime,
    endTime,
    place,
    reason,
    situation,
    handleStartTime,
    handleEndTime,
    handlePlace,
    cancelSickOut,
    applySickOut,
    handleReason
  };
};

export default useApplyState;
