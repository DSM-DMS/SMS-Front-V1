import React, {
  ChangeEvent,
  FC,
  FormEvent,
  useCallback,
  useState
} from "react";

import { OutingApply } from "../../components";
import { postOuting } from "../../lib/api/Outing";
import { ReqOuting, ResOutingWithDefault } from "../../lib/api/payloads/Outing";

interface Props {}

export const NORMAL = "normal" as const;
export const EMERGENCY = "emergency" as const;

export type SituationType = typeof NORMAL | typeof EMERGENCY;

export interface Outing {
  date: string;
  startTime: string;
  endTime: string;
  place: string;
  reason: string;
  situation: SituationType;
}

const ApplyContainer: FC<Props> = () => {
  const [formDate, setFormDate] = useState<string>("");
  const [formOutTime, setFormOutTime] = useState<string>("");
  const [formInTime, setFormInTime] = useState<string>("");
  const [formPlace, setFormPlace] = useState<string>("");
  const [formReason, setFormReason] = useState<string>("");
  const [formReasonSick, setFormReasonSick] = useState<boolean>(false);

  const onInputDate = useCallback((e: FormEvent<HTMLInputElement>) => {
    setFormDate(e.currentTarget.value);
  }, []);

  const handleOutTime = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (!checkOutTimeValid(value)) {
        alert("귀교 시간보다 늦을 수 없습니다.");
        return;
      }

      setFormOutTime(value);
    },
    [formInTime]
  );

  const handleInTime = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (!checkInTimeValid(value)) {
        alert("외출 시간보다 늦을 수 없습니다.");
        return;
      }

      setFormInTime(value);
    },
    [formOutTime]
  );

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

  const handlePlace = useCallback((value: string) => {
    setFormPlace(value);
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

  const checkOutingValidation = useCallback((outing: Outing) => {
    const { date, startTime, endTime, place, reason } = outing;
    return date.trim() === "" ||
      startTime.trim() === "" ||
      endTime.trim() === "" ||
      place.trim() === "" ||
      reason.trim() === ""
      ? false
      : true;
  }, []);

  const applyOuting = useCallback(async (outing: Outing) => {
    const { date, startTime, endTime, place, reason, situation } = outing;
    if (!checkOutingValidation(outing)) {
      return alert("외출 작성 입력칸을 모두 정상적으로 입력해주세요.");
    }
    const getOutingTime = (time: string) =>
      Math.round(+new Date(`${date}T${time}`) / 1000);

    const outingBody: ReqOuting = {
      start_time: getOutingTime(startTime),
      end_time: getOutingTime(endTime),
      place,
      reason,
      situation
    };

    try {
      await postOuting(outingBody);

      alert("외출증 신청이 완료되었습니다. 학부모와 선생님께 확인받으세요.");
    } catch (err) {
      const data: ResOutingWithDefault = err?.response?.data;
      const status = data?.status;
      const code = data?.code;

      if (status === 400) {
        alert("외출 시작 시간이 귀교 시간보다 더 늦습니다.");
      } else if (status === 403) {
        alert("학생 계정이 아닙니다. 학생 계정으로 이용해주세요.");
      } else if (status === 409 && code === -2401) {
        alert("해당 날짜에 대기중인 외출 신청이 있습니다.");
      }
    }
  }, []);

  return (
    <OutingApply
      formDate={formDate}
      formOutTime={formOutTime}
      formInTime={formInTime}
      formPlace={formPlace}
      formReason={formReason}
      formReasonSick={formReasonSick}
      onInputDate={onInputDate}
      handleOutTime={handleOutTime}
      handleInTime={handleInTime}
      handlePlace={handlePlace}
      cancelSickOuting={cancelSickOuting}
      applySickOuting={applySickOuting}
      handleReason={handleReason}
      applyOuting={applyOuting}
    />
  );
};

export default ApplyContainer;
