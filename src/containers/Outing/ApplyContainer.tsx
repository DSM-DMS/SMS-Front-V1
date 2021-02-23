import React, { ChangeEvent, FC, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
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
  startTime: string;
  endTime: string;
  place: string;
  reason: string;
  situation: SituationType;
}

const getTodayOutForm = (time: string) => {
  return +new Date(`${new Date().toLocaleDateString()}-${time}`);
};

const ApplyContainer: FC<Props> = ({ loading, startLoading, endLoading }) => {
  const history = useHistory();
  const [formOutTime, setFormOutTime] = useState<string>("");
  const [formInTime, setFormInTime] = useState<string>("");
  const [formPlace, setFormPlace] = useState<string>("");
  const [formReason, setFormReason] = useState<string>("");
  const [formReasonSick, setFormReasonSick] = useState<boolean>(false);

  const handleOutTime = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const OUT_TIME = "16:20";

      if (value < OUT_TIME) {
        toast.error("외출은 16시 20분 이후에 가능합니다.");
        return;
      }

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
      const IN_TIME = "20:30";

      if (value > IN_TIME) {
        toast.error("외출은 20시 30시 이후엔 불가능합니다.");
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
    const { startTime, endTime, place, reason } = outing;
    const now = +new Date();
    const targetStartTime = getTodayOutForm(startTime);
    const targetEndTime = getTodayOutForm(endTime);

    return !(
      startTime.trim() === "" ||
      endTime.trim() === "" ||
      now > targetStartTime ||
      now > targetEndTime ||
      place.trim() === "" ||
      reason.trim() === ""
    );
  }, []);

  const applyOuting = useCallback(async (outing: Outing) => {
    const { startTime, endTime, place, reason, situation } = outing;
    if (!checkOutingValidation(outing)) {
      toast.error("외출 작성 입력칸을 모두 정상적으로 입력해주세요.");
      return;
    }

    const getOutingTime = (time: string) =>
      Math.round(getTodayOutForm(time) / 1000);

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
      history.push("/outing/history");
    } catch (err) {
      const { status, code } = getAxiosError(err);

      if (status === 409 && code === -2401) {
        toast.error("오늘 대기중인 외출 신청이 있습니다.");
      } else {
        toast.error("오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
    endLoading();
  }, []);

  return (
    <OutingApply
      loading={loading}
      formOutTime={formOutTime}
      formInTime={formInTime}
      formPlace={formPlace}
      formReason={formReason}
      formReasonSick={formReasonSick}
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
