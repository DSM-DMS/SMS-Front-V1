import React, {
  FC,
  ReactElement,
  Dispatch,
  SetStateAction,
  ChangeEvent
} from "react";

import * as S from "../style";

interface Props {
  formReasonSick: boolean;
  cancelSickOuting: () => void;
  applySickOuting: () => void;
  handleReason: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const ApplyReason: FC<Props> = ({
  formReasonSick,
  applySickOuting,
  cancelSickOuting,
  handleReason
}): ReactElement => {
  return (
    <S.FormReason>
      <S.FormInnerReason>
        <S.ApplyFormItemTitle htmlFor="reason">사유</S.ApplyFormItemTitle>
        <S.ApplyFormInputWrap>
          <S.FormReasonTextarea
            name="reason"
            id="reason"
            placeholder="외출사유를 입력하세요"
            rows={2}
            onChange={handleReason}
          />
        </S.ApplyFormInputWrap>
      </S.FormInnerReason>
      <S.FormReasonSick>
        {formReasonSick ? (
          <>
            <p>질병 외출 신청 중 입니다.</p>
            <span onClick={cancelSickOuting}>취소</span>
          </>
        ) : (
          <span onClick={applySickOuting}>질병 외출로 신청하기!</span>
        )}
      </S.FormReasonSick>
    </S.FormReason>
  );
};

export default ApplyReason;
