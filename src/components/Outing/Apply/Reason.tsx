import React, { FC, ReactElement, memo } from "react";

import * as S from "../style";
import { OnChangeEvent } from "../../../lib/hooks/common/useInput";

interface Props {
  onChangeReason: (e: OnChangeEvent) => void;
}

const ApplyReason: FC<Props> = ({ onChangeReason }): ReactElement => {
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
            onChange={onChangeReason}
            maxLength={150}
          />
        </S.ApplyFormInputWrap>
      </S.FormInnerReason>
    </S.FormReason>
  );
};

export default memo(ApplyReason);
