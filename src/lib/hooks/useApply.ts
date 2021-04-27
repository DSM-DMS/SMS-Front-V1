import { useMemo } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

import useApplyState from "./useApplyState";
import useLoading from "./common/useLoading";

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
  return Math.round(getStringTimeToNumberTime(time) / 1000);
};

const useApply = () => {
  const history = useHistory();
  const applyState = useApplyState();
  const [loading, startLoading, endLoading] = useLoading();
  const {
    values: { outTime, inTime, reason, place, situation, roadAddress }
  } = applyState;

  const checkOutingValid = () => {
    if (
      outTime === "" ||
      inTime === "" ||
      outTime > inTime ||
      place.trim() === "" ||
      roadAddress.trim() === "" ||
      reason.trim() === ""
    ) {
      toast.error("외출 작성 입력칸을 모두 정상적으로 입력해주세요.");
      return true;
    }
  };

  const timeValid = (time: string) => {
    const now = Date.now();
    const applyTime = getStringTimeToNumberTime(time);

    if (now > applyTime) {
      toast.error("이미 지난 시각입니다.");
      return true;
    }
  };

  const applyOuting = async () => {
    if (checkOutingValid() || timeValid(outTime) || timeValid(inTime)) {
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

      endLoading();
    }
  };

  return {
    loading,
    applyState,
    applyOuting
  };
};

export default useApply;
