import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

import ApplyHead from "./Head";
import ApplyTime from "./Time";
import ApplyPlace from "./Place";
import ApplyReason from "./Reason";
import ApplySicOut from "./SickOut";
import GuideModal from "./GuideModal";

import * as S from "../style";
import {
  EMERGENCY,
  NORMAL,
  Outing
} from "../../../containers/Outing/ApplyContainer";
import { Loading } from "../../default";
import { ApplyState } from "../../../lib/hooks/useApplyState";
import { ApplyModalState } from "../../../lib/hooks/useModalState";

interface Props {
  loading: boolean;
  applyState: ApplyState;
  applyOuting: (outing: Outing) => Promise<void>;
  modalState: ApplyModalState;
}

const Apply: FC<Props> = ({
  loading,
  applyState,
  modalState,
  applyOuting
}): ReactElement => {
  const {
    startTime,
    endTime,
    roadAddress,
    reason,
    situation,
    handleReason
  } = applyState;
  const [guideModal, openModal, closeModal] = modalState;

  const handleApplyOuting = () => {
    const outing: Outing = {
      startTime,
      endTime,
      place: roadAddress,
      reason,
      situation: situation ? EMERGENCY : NORMAL
    };

    applyOuting(outing);
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
          <S.ApplyTimeNotice>
            외출은 오후 4시 20분부터 오후 8시 30분까지 가능합니다.
          </S.ApplyTimeNotice>
          <ApplyTime applyState={applyState} />
          <ApplySicOut applyState={applyState} />
          <ApplyReason handleReason={handleReason} />
          <ApplyPlace applyState={applyState} />
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
