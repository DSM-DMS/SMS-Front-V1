import React, { ChangeEvent, FC, FormEvent, ReactElement } from "react";
import { Link } from "react-router-dom";

import ApplyHead from "./Head";
import ApplyDate from "./Date";
import ApplyTime from "./Time";
import ApplyPlace from "./Place";
import ApplyReason from "./Reason";

import * as S from "../style";
import ApplyWaring from "./ApplyWarning";
import {
  EMERGENCY,
  NORMAL,
  Outing
} from "../../../containers/Outing/ApplyContainer";

interface Props {
  formDate: string;
  formOutTime: string;
  formInTime: string;
  formPlace: string;
  formReason: string;
  formReasonSick: boolean;
  onInputDate: (e: FormEvent<HTMLInputElement>) => void;
  handleOutTime: (e: ChangeEvent<HTMLInputElement>) => void;
  handleInTime: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePlace: (e: ChangeEvent<HTMLInputElement>) => void;
  cancelSickOuting: () => void;
  applySickOuting: () => void;
  handleReason: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  applyOuting: (outing: Outing) => Promise<void>;
}

const Apply: FC<Props> = ({
  formDate,
  formInTime,
  formOutTime,
  formPlace,
  formReason,
  formReasonSick,
  onInputDate,
  handleInTime,
  handleOutTime,
  handlePlace,
  cancelSickOuting,
  applySickOuting,
  handleReason,
  applyOuting
}): ReactElement => {
  const handleApplyOuting = () => {
    const outing: Outing = {
      date: formDate,
      startTime: formOutTime,
      endTime: formInTime,
      place: formPlace,
      reason: formReason,
      situation: formReasonSick ? EMERGENCY : NORMAL
    };

    applyOuting(outing);
  };

  return (
    <S.ApplyWrap>
      <ApplyHead />
      <div>
        <S.ApplyDescWarning>
          외출 신청 시 <Link to="/outing/waring">유의사항</Link>을 꼭 한번
          읽어주세요. 유의사항을 지키지 않아 발생한 피해는 본인의 책임입니다.
        </S.ApplyDescWarning>
        <S.ApplyForm>
          <ApplyDate formDate={formDate} onInputDate={onInputDate} />
          <ApplyTime
            formOutTime={formOutTime}
            formInTime={formInTime}
            handleInTime={handleInTime}
            handleOutTime={handleOutTime}
          />
          <ApplyPlace handlePlace={handlePlace} place={formPlace} />
          <ApplyReason
            formReasonSick={formReasonSick}
            handleReason={handleReason}
            cancelSickOuting={cancelSickOuting}
            applySickOuting={applySickOuting}
          />
          <ApplyWaring />
        </S.ApplyForm>
        <S.FormButtonWrap>
          <S.FormButtonSubmit onClick={handleApplyOuting}>
            작성완료
          </S.FormButtonSubmit>
        </S.FormButtonWrap>
      </div>
    </S.ApplyWrap>
  );
};

export default Apply;
