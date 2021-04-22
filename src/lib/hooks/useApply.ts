import { useCallback } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

import useApplyState from "./useApplyState";
import useLoading from "./common/useLoading";
import useModal from "./common/useModal";

import { postOuting } from "../api/Outing";
import { ReqOuting } from "../api/payloads/Outing";
import { getAxiosError } from "../utils";

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

const getStringTimeToNumberTime = (time: string) => {
  return new Date(`${new Date().toLocaleDateString()}-${time}`).getTime();
};

const getOutingTime = (time: string) => {
  const TWELVE_TIME = 43200;
  return Math.round(getStringTimeToNumberTime(time) / 1000) + TWELVE_TIME;
};

const useApply = () => {
  const history = useHistory();
  const applyState = useApplyState();
  const modalState = useModal();
  const closeModal = modalState[2];
  const [loading, startLoading, endLoading] = useLoading();

  const checkOutingValidation = () => {
    const { outTime, inTime, place, reason } = applyState.values;

    if (
      outTime.trim() === ":" ||
      inTime.trim() === ":" ||
      place.trim() === "" ||
      reason.trim() === ""
    ) {
      toast.error("외출 작성 입력칸을 모두 정상적으로 입력해주세요.");
      return true;
    }
  };

  const outTimeValidation = () => {
    const { outTime, inTime } = applyState.values;
    const TWELVE_TIME = 43200000;
    const now = Date.now() - TWELVE_TIME;
    const applyOutTime = getStringTimeToNumberTime(outTime);

    if (now > applyOutTime) {
      toast.error("이미 지난 시각입니다.");
      return true;
    }
    if (outTime < "4:20" || outTime > "8:30") {
      toast.error("오후 4시 20분부터 8시30분까지만 가능합니다.");
      return true;
    }
    if (inTime !== ":" && outTime > inTime) {
      toast.error("외출 시간을 확인해주세요.");
      return true;
    }
  };

  const inTimeValidation = () => {
    const { outTime, inTime } = applyState.values;
    const TWELVE_TIME = 43200000;
    const now = Date.now() - TWELVE_TIME;
    const applyInTime = getStringTimeToNumberTime(inTime);

    if (now > applyInTime) {
      toast.error("이미 지난 시각입니다.");
      return true;
    }
    if (inTime < "4:20" || inTime > "8:30") {
      toast.error("오후 4시 20분부터 8시30분까지만 가능합니다.");
      return true;
    }
    if (inTime !== ":" && outTime > inTime) {
      toast.error("귀교 시간을 확인해주세요.");
      return true;
    }
  };

  const applyOuting = async () => {
    const {
      outTime,
      inTime,
      reason,
      situation,
      roadAddress
    } = applyState.values;

    if (checkOutingValidation() || outTimeValidation() || inTimeValidation()) {
      closeModal();
      return;
    }

    const outingBody: ReqOuting = {
      start_time: getOutingTime(outTime),
      end_time: getOutingTime(inTime),
      place: roadAddress,
      reason,
      situation: situation ? EMERGENCY : NORMAL
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
      }
    }

    closeModal();
    endLoading();
  };

  const handleApplyOuting = useCallback(() => {
    applyOuting();
  }, [applyState]);

  return {
    loading,
    applyState,
    modalState,
    handleApplyOuting
  };
};

export default useApply;
