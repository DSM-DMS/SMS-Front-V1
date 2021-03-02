import React, { ChangeEvent, FC, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { OutingApply } from "../../components";
import { postOuting } from "../../lib/api/Outing";
import { ReqOuting } from "../../lib/api/payloads/Outing";
import { getAxiosError, padNum } from "../../lib/utils";
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
  const [formPlaceDetail, setFormPlaceDetail] = useState<string>("");
  const [formReason, setFormReason] = useState<string>("");
  const [formReasonSick, setFormReasonSick] = useState<boolean>(false);
  const [guideModal, setGuideModal] = useState<boolean>(false);

  const openGuideModal = useCallback(() => {
    setGuideModal(true);
  }, []);

  const closeGuideModal = useCallback(() => {
    setGuideModal(false);
  }, []);

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

  const checkOutingValidation = useCallback(
    (outing: Outing) => {
      const { startTime, endTime, place, reason } = outing;
      return (
        startTime.trim() === "" ||
        endTime.trim() === "" ||
        place.trim() === "" ||
        reason.trim() === "" ||
        formPlaceDetail.trim() === ""
      );
    },
    [formPlaceDetail]
  );

  const checkOutTimeValidation = useCallback((outing: Outing) => {
    const now = +new Date();
    const { startTime, endTime } = outing;
    const targetStartTime = getTodayOutForm(startTime);
    const targetEndTime = getTodayOutForm(endTime);

    return now > targetStartTime || now > targetEndTime;
  }, []);

  const applyOuting = useCallback(
    async (outing: Outing) => {
      const { startTime, endTime, place, reason, situation } = outing;
      if (checkOutingValidation(outing)) {
        toast.error("외출 작성 입력칸을 모두 정상적으로 입력해주세요.");
        closeGuideModal();
        return;
      } else if (checkOutTimeValidation(outing)) {
        toast.error("현재 시간보다 이후 시간에 신청해야 합니다.");
        closeGuideModal();
        return;
      }

      const getOutingTime = (time: string) =>
        Math.round(getTodayOutForm(time) / 1000);

      const outingBody: ReqOuting = {
        start_time: getOutingTime(startTime),
        end_time: getOutingTime(endTime),
        place: `${place} / ${formPlaceDetail}`,
        reason,
        situation
      };

      startLoading();
      try {
        const {
          data: { status, code }
        } = await postOuting(outingBody);

        if (status === 201) {
          if (code === 0) {
            alert(
              "외출증 신청이 완료되었습니다. 승인을 받은 후 모바일을 통해 외출을 시작해주세요."
            );
          } else if (code === -1) {
            alert(
              "연결된 학부모 계정이 존재하지 않아 학부모 승인 단게를 건너뛰었습니다."
            );
          } else if (code === -2) {
            alert(
              "학부모가 문자 사용을 동의하지 않아 학부모 승인 단계를 건너뛰었습니다."
            );
          }
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
      closeGuideModal();
      endLoading();
    },
    [formPlaceDetail]
  );

  return (
    <OutingApply
      loading={loading}
      formOutTime={formOutTime}
      formInTime={formInTime}
      formPlace={formPlace}
      formPlaceDetail={formPlaceDetail}
      formReason={formReason}
      formReasonSick={formReasonSick}
      guideModal={guideModal}
      handleOutTime={handleOutTime}
      handleInTime={handleInTime}
      handlePlace={handlePlace}
      handlePlaceDetail={handlePlaceDetail}
      openGuideModal={openGuideModal}
      closeGuideModal={closeGuideModal}
      cancelSickOuting={cancelSickOuting}
      applySickOuting={applySickOuting}
      handleReason={handleReason}
      applyOuting={applyOuting}
    />
  );
};

export default WithLoadingContainer(ApplyContainer);
