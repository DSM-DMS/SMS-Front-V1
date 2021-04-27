import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

import ApplyHead from "./Head";
import ApplyTime from "./Time";
import ApplyPlace from "./Place";
import ApplyReason from "./Reason";
import ApplySicOut from "./SickOut";
import GuideModal from "./GuideModal";

import * as S from "../style";
import { Loading } from "../../default";
import useApply from "../../../lib/hooks/useApply";
import useModal from "../../../lib/hooks/common/useModal";

interface Props {}

const Apply: FC<Props> = ({}): ReactElement => {
  const { loading, applyState, applyOuting } = useApply();
  const [modal, openModal, closeModal] = useModal();
  const {
    values: { outTime, inTime, situation, place, roadAddress },
    handlers: {
      onChangeOut,
      onChangeIn,
      onChangePlace,
      onChangeReason,
      handleRoadAddr,
      applySickOut,
      cancelSickOut
    }
  } = applyState;

  return (
    <S.ApplyWrap>
      <ApplyHead />
      <div>
        <S.ApplyDescWarning>
          외출 신청 시 <Link to="/outing/warning">유의사항</Link>을 꼭 한번
          읽어주세요. 유의사항을 지키지 않아 발생한 피해는 본인의 책임입니다.
        </S.ApplyDescWarning>
        <S.ApplyForm>
          <ApplyTime
            outTime={outTime}
            inTime={inTime}
            onChangeOut={onChangeOut}
            onChangeIn={onChangeIn}
          />
          <ApplySicOut
            situation={situation}
            applySickOut={applySickOut}
            cancelSickOut={cancelSickOut}
          />
          <ApplyReason onChangeReason={onChangeReason} />
          <ApplyPlace
            place={place}
            roadAddress={roadAddress}
            onChangePlace={onChangePlace}
            handleRoadAddr={handleRoadAddr}
          />
        </S.ApplyForm>
        {modal && (
          <GuideModal closeModal={closeModal} applyOuting={applyOuting} />
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
