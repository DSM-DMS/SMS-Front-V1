import { ChangeEvent, useCallback, useState } from "react";
import { toast } from "react-toastify";

import { padNum } from "../utils";

export type ApplyState = ReturnType<typeof useApplyState>;

const useApplyState = () => {
  const [formOutTime, setFormOutTime] = useState<string>("");
  const [formInTime, setFormInTime] = useState<string>("");
  const [formPlace, setFormPlace] = useState<string>("");
  const [formPlaceDetail, setFormPlaceDetail] = useState<string>("");
  const [formReason, setFormReason] = useState<string>("");
  const [formReasonSick, setFormReasonSick] = useState<boolean>(false);

  const checkOutTimeValid = useCallback(
    (time: string) => {
      if (formInTime === "") return true;
      if (formInTime < time) return false;
      return true;
    },
    [formInTime]
  );

  const checkInTimeValid = useCallback(
    (time: string) => {
      if (formOutTime === "") return true;
      if (formOutTime > time) return false;
      return true;
    },
    [formOutTime]
  );

  const handleOutTime = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const ENABLE_OUT_TIME = "16:20";
      const now = new Date();
      const format = `${padNum(now.getHours())}:${padNum(now.getMinutes())}`;

      if (value < format) {
        toast.error("'이미 지난 시각입니다.'");
        return;
      }
      if (value < ENABLE_OUT_TIME) {
        toast.error("외출은 16시 20분 이후에 가능합니다.");
        return;
      }
      if (!checkOutTimeValid(value)) {
        toast.error("귀교 시간보다 빠를 수 없습니다.");
        return;
      }

      setFormOutTime(value);
    },
    [formInTime]
  );

  const handleInTime = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const IN_TIME = "20:30";
      const now = new Date();
      const format = `${padNum(now.getHours())}:${padNum(now.getMinutes())}`;

      if (value < format) {
        toast.error("'이미 지난 시각입니다.'");
        return;
      }
      if (value > IN_TIME) {
        toast.error("외출은 20시 30분 이후엔 불가능합니다.");
        return;
      }
      if (!checkInTimeValid(value)) {
        toast.error("외출 시간보다 늦을 수 없습니다.");
        return;
      }

      setFormInTime(value);
    },
    [formOutTime]
  );

  const handlePlace = useCallback((value: string) => {
    setFormPlace(value);
  }, []);

  const handlePlaceDetail = useCallback((value: string) => {
    setFormPlaceDetail(value);
  }, []);

  const cancelSickOuting = useCallback(() => {
    setFormReasonSick(false);
  }, []);

  const applySickOuting = useCallback(() => {
    setFormReasonSick(true);
  }, []);

  const handleReason = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormReason(e.currentTarget.value);
  }, []);

  return {
    formOutTime,
    formInTime,
    formPlace,
    formPlaceDetail,
    formReason,
    formReasonSick,
    handleOutTime,
    handleInTime,
    handlePlace,
    handlePlaceDetail,
    cancelSickOuting,
    applySickOuting,
    handleReason
  };
};

export default useApplyState;
