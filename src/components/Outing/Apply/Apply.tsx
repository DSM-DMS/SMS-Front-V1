import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

import ApplyHead from "./Head";
import ApplyTime from "./Time";
import ApplyPlace from "./Place";
import ApplyReason from "./Reason";
import SicOut from "./SickOut";
import GuideModal from "./GuideModal";

import * as S from "../style";
import {
  EMERGENCY,
  NORMAL,
  Outing
} from "../../../containers/Outing/ApplyContainer";
import { Loading } from "../../default";
import { ApplyState } from "../../../lib/hooks/useApplyState";

interface Props {
  loading: boolean;
  applyState: ApplyState;
  guideModal: boolean;
  openModal: () => void;
  closeModal: () => void;
  applyOuting: (outing: Outing) => Promise<void>;
}

const Apply: FC<Props> = ({
  loading,
  applyState,
  guideModal,
  openModal,
  closeModal,
  applyOuting
}): ReactElement => {
  const {
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
  } = applyState;

  const handleApplyOuting = () => {
    const outing: Outing = {
      startTime: formOutTime,
      endTime: formInTime,
      place: formPlace,
      reason: formReason,
      situation: formReasonSick ? EMERGENCY : NORMAL
    };

    applyOuting(outing);
  };

  const handleSickOut = () => {
    if (formReasonSick) {
      cancelSickOuting();
      return;
    }

    applySickOuting();
  };

  return (
    <S.ApplyWrap>
      <ApplyHead />
      <div>
        <S.ApplyDescWarning>
          외출 신청 시 <Link to="/outing/warning">유의사항</Link>을 꼭 한번
          읽어주세요. 유의사항을 지키지 않아 발생한 피해는 본인의 책임입니다.
        </S.ApplyDescWarning>
        <S.ApplyForm>
          <div>외출은 오후 4시 30분부터 오후 8시 30분까지 가능합니다.</div>
          <ApplyTime
            formOutTime={formOutTime}
            formInTime={formInTime}
            handleInTime={handleInTime}
            handleOutTime={handleOutTime}
          />
          <SicOut
            formReasonSick={formReasonSick}
            handleSickOut={handleSickOut}
          />
          <ApplyReason handleReason={handleReason} />
          <ApplyPlace
            handlePlace={handlePlace}
            place={formPlace}
            placeDetail={formPlaceDetail}
            handlePlaceDetail={handlePlaceDetail}
          />
        </S.ApplyForm>
        {guideModal && (
          <GuideModal
            closeModal={closeModal}
            handleApplyOuting={handleApplyOuting}
          />
        )}
        <S.FormButtonWrap>
          {loading && <Loading />}
          <S.FormButtonSubmit onClick={openModal}>작성완료</S.FormButtonSubmit>
        </S.FormButtonWrap>
      </div>
    </S.ApplyWrap>
  );
};

export default Apply;
