import React, { FC, ReactElement } from "react";

import * as S from "../style";
import ApplyWarning from "./ApplyWarning";
import { Check } from "../../../assets";

interface Props {
  formReasonSick: boolean;
  handleSickOut: () => void;
}

const SicOut: FC<Props> = ({ formReasonSick, handleSickOut }): ReactElement => {
  return (
    <S.FormReasonSick>
      <S.FormReasonSickCheckboxLabel onClick={handleSickOut}>
        <S.FormReasonSickCheckbox
          id="checkbox"
          className={formReasonSick ? "checked" : ""}
        >
          {formReasonSick && (
            <img src={Check} id="check" alt="checked" title="checked" />
          )}
        </S.FormReasonSickCheckbox>
        <span>질병 외출로 신청</span>
      </S.FormReasonSickCheckboxLabel>
      <ApplyWarning />
    </S.FormReasonSick>
  );
};

export default SicOut;
