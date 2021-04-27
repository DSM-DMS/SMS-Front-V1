import React, { FC, memo, ReactElement } from "react";

import ApplyWarning from "./ApplyWarning";

import * as S from "../style";
import { Check } from "../../../assets";

interface Props {
  situation: boolean;
  applySickOut: () => void;
  cancelSickOut: () => void;
}

const ApplySicOut: FC<Props> = ({
  situation,
  applySickOut,
  cancelSickOut
}): ReactElement => {
  const onClickSickOut = () => (situation ? cancelSickOut() : applySickOut());

  return (
    <S.FormReasonSick>
      <S.FormReasonSickCheckboxLabel>
        <div id="sickWrap" onClick={onClickSickOut}>
          <S.FormReasonSickCheckbox
            id="checkbox"
            className={situation ? "checked" : ""}
          >
            {situation && (
              <img src={Check} id="check" alt="checked" title="checked" />
            )}
          </S.FormReasonSickCheckbox>
          <span>질병 외출</span>
        </div>
        <ApplyWarning />
      </S.FormReasonSickCheckboxLabel>
    </S.FormReasonSick>
  );
};

export default memo(ApplySicOut);
