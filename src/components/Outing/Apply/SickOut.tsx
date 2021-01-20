import React, { FC, ReactElement } from "react";

import ApplyWarning from "./ApplyWarning";

import * as S from "../style";
import { Check } from "../../../assets";

interface Props {
  formReasonSick: boolean;
  handleSickOut: () => void;
}

const SicOut: FC<Props> = ({ formReasonSick, handleSickOut }): ReactElement => {
  return (
    <S.FormReasonSick>
      <S.FormReasonSickCheckboxLabel>
        <div id="sickWrap" onClick={handleSickOut}>
          <S.FormReasonSickCheckbox
            id="checkbox"
            className={formReasonSick ? "checked" : ""}
          >
            {formReasonSick && (
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

export default SicOut;
