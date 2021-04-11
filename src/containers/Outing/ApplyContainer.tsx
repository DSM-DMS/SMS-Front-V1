import React, { FC, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { OutingApply } from "../../components";
import { postOuting } from "../../lib/api/Outing";
import { ReqOuting } from "../../lib/api/payloads/Outing";
import useApplyState from "../../lib/hooks/useApplyState";
import useModalState from "../../lib/hooks/useModalState";
import { getAxiosError } from "../../lib/utils";
import WithLoadingContainer, {
  LoadingProps
} from "../Loading/WithLoadingContainer";

interface Props extends LoadingProps {}

export const NORMAL = "normal" as const;
export const EMERGENCY = "emergency" as const;

const SUCCESS =
  "외출증 신청이 완료되었습니다. 승인을 받은 후 모바일을 통해 외출을 시작해주세요";
const NO_PARENT =
  "연결된 학부모 계정이 존재하지 않습니다. 선생님께 바로 찾아가 승인을 받아주세요.";
const NO_AGREE =
  "학부모가 문자 사용을 동의하지 않았습니다. 선생님께 바로 찾아가 승인을 받아주세요.";

export type SituationType = typeof NORMAL | typeof EMERGENCY;

export interface Outing {
  startTime: string;
  endTime: string;
  place: string;
  reason: string;
  situation: SituationType;
}

const getTodayDateForm = (time: string) => {
  return +new Date(`${new Date().toLocaleDateString()}-${time}`);
};

const ApplyContainer: FC<Props> = ({ loading, startLoading, endLoading }) => {
  const history = useHistory();
  const applyState = useApplyState();
  const modalState = useModalState();
  const [, , closeModal] = modalState;

  const checkOutingValidation = useCallback((outing: Outing) => {
    const { startTime, endTime, place, reason } = outing;

    return (
      startTime.trim() === "" ||
      endTime.trim() === "" ||
      place.trim() === "" ||
      reason.trim() === ""
    );
  }, []);

  const checkOutTimeValidation = useCallback((outing: Outing) => {
    const now = +new Date();
    const { startTime, endTime } = outing;
    const targetStartTime = getTodayDateForm(startTime);
    const targetEndTime = getTodayDateForm(endTime);

    return now > targetStartTime || now > targetEndTime;
  }, []);

  const applyOuting = useCallback(async (outing: Outing) => {
    const { startTime, endTime, place, reason, situation } = outing;
    if (checkOutingValidation(outing)) {
      toast.error("외출 작성 입력칸을 모두 정상적으로 입력해주세요.");
      closeModal();
      return;
    } else if (checkOutTimeValidation(outing)) {
      toast.error("현재 시간보다 이후 시간에 신청해야 합니다.");
      closeModal();
      return;
    }

    const getOutingTime = (time: string) =>
      Math.round(getTodayDateForm(time) / 1000);

    const outingBody: ReqOuting = {
      start_time: getOutingTime(startTime),
      end_time: getOutingTime(endTime),
      place,
      reason,
      situation
    };

    startLoading();
    try {
      const {
        data: { status, code }
      } = await postOuting(outingBody);

      if (status === 201 && code === 0) {
        alert(SUCCESS);
      } else if (status === 201 && code === -1) {
        alert(NO_PARENT);
      } else if (status === 201 && code === -2) {
        alert(NO_AGREE);
      }

      history.push("/outing/history");
    } catch (err) {
      const { status, code } = getAxiosError(err);

      if (status === 409 && code === -2401) {
        toast.error("오늘 대기중인 외출 신청이 있습니다.");
      } else {
        toast.error("오류가 발생했습니다. 다시 시도해주세요.");
      }
    }

    closeModal();
    endLoading();
  }, []);

  return (
    <OutingApply
      loading={loading}
      applyState={applyState}
      modalState={modalState}
      applyOuting={applyOuting}
    />
  );
};

export default WithLoadingContainer(ApplyContainer);
