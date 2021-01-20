import React, {
  ChangeEvent,
  FC,
  FormEvent,
  useCallback,
  useState
} from "react";
import { toast } from "react-toastify";

import { OutingApply } from "../../components";
import { postOuting } from "../../lib/api/Outing";
import { ReqOuting } from "../../lib/api/payloads/Outing";
import { getAxiosError } from "../../lib/utils";
import WithLoadingContainer, {
  LoadingProps
} from "../Loading/WithLoadingContainer";

interface Props extends LoadingProps {}

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

const ApplyContainer: FC<Props> = ({ loading, startLoading, endLoading }) => {
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
        toast.error("귀교 시간보다 늦을 수 없습니다.");
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
        toast.error("외출 시간보다 늦을 수 없습니다.");
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
    const now = +new Date();
    const targetStartTime = +new Date(`${date}T${startTime}`);
    const targetEndTime = +new Date(`${date}T${endTime}`);

    return !(
      date.trim() === "" ||
      startTime.trim() === "" ||
      endTime.trim() === "" ||
      now > targetStartTime ||
      now > targetEndTime ||
      place.trim() === "" ||
      reason.trim() === ""
    );
  }, []);

  const applyOuting = useCallback(async (outing: Outing) => {
    const { date, startTime, endTime, place, reason, situation } = outing;
    if (!checkOutingValidation(outing)) {
      toast.error("외출 작성 입력칸을 모두 정상적으로 입력해주세요.");
      return;
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

    startLoading();
    try {
      await postOuting(outingBody);

      toast.success(
        "외출증 신청이 완료되었습니다. 학부모와 선생님께 확인받으세요."
      );
    } catch (err) {
      const { status, code } = getAxiosError(err);

      if (status === 409 && code === -2401) {
        toast.error("해당 날짜에 대기중인 외출 신청이 있습니다.");
      } else {
        toast.error("오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
    endLoading();
  }, []);

  return (
    <OutingApply
      loading={loading}
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

export default WithLoadingContainer(ApplyContainer);
