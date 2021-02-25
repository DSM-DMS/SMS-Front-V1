import React, { FC, ReactElement, ChangeEvent } from "react";

import * as S from "../style";

interface Props {
  handleReason: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const ApplyReason: FC<Props> = ({ handleReason }): ReactElement => {
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
            maxLength={150}
          />
        </S.ApplyFormInputWrap>
      </S.FormInnerReason>
    </S.FormReason>
  );
};

export default ApplyReason;
