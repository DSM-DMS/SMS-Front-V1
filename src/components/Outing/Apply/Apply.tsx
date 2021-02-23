import React, { ChangeEvent, FC, FormEvent, ReactElement } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import ApplyHead from "./Head";
import ApplyTime from "./Time";
import ApplyPlace from "./Place";
import ApplyReason from "./Reason";
import SicOut from "./SickOut";

import * as S from "../style";
import {
  EMERGENCY,
  NORMAL,
  Outing
} from "../../../containers/Outing/ApplyContainer";
import { subPageMove } from "../../../modules/action/page";
import { Loading } from "../../default";

interface Props {
  loading: boolean;
  formOutTime: string;
  formInTime: string;
  formPlace: string;
  formReason: string;
  formReasonSick: boolean;
  handleOutTime: (e: ChangeEvent<HTMLInputElement>) => void;
  handleInTime: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePlace: (value: string) => void;
  cancelSickOuting: () => void;
  applySickOuting: () => void;
  handleReason: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  applyOuting: (outing: Outing) => Promise<void>;
}

const Apply: FC<Props> = ({
  loading,
  formInTime,
  formOutTime,
  formPlace,
  formReason,
  formReasonSick,
  handleInTime,
  handleOutTime,
  handlePlace,
  cancelSickOuting,
  applySickOuting,
  handleReason,
  applyOuting
}): ReactElement => {
  const dispatch = useDispatch();
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
          외출 신청 시{" "}
          <Link
            to="/outing/warning"
            onClick={() => dispatch(subPageMove("유의사항"))}
          >
            유의사항
          </Link>
          을 꼭 한번 읽어주세요. 유의사항을 지키지 않아 발생한 피해는 본인의
          책임입니다.
        </S.ApplyDescWarning>
        <S.ApplyForm>
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
          <ApplyPlace handlePlace={handlePlace} place={formPlace} />
        </S.ApplyForm>
        <S.FormButtonWrap>
          {loading && <Loading />}
          <S.FormButtonSubmit onClick={handleApplyOuting}>
            작성완료
          </S.FormButtonSubmit>
        </S.FormButtonWrap>
      </div>
    </S.ApplyWrap>
  );
};

export default Apply;
