import React, { FC, ReactElement } from "react";

import ApplyWarning from "./ApplyWarning";

import * as S from "../style";
import { Check } from "../../../assets";
import { ApplyState } from "../../../lib/hooks/useApplyState";

interface Props {
  applyState: ApplyState;
}

const ApplySicOut: FC<Props> = ({ applyState }): ReactElement => {
  const {
    values: { situation },
    handlers: { cancelSickOut, applySickOut }
  } = applyState;

  const handleSickOut = () => {
    if (situation) {
      cancelSickOut();
      return;
    }

    applySickOut();
  };

  return (
    <S.FormReasonSick>
      <S.FormReasonSickCheckboxLabel>
        <div id="sickWrap" onClick={handleSickOut}>
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

export default ApplySicOut;
