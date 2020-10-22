import React, { ChangeEvent, FC, memo, ReactElement } from "react";
import { useSelector } from "react-redux";

import * as S from "./style";

import {
  Fields,
  EMBEDDED,
  SECURITY,
  SOFTWARE,
  ManagementInfoHandler
} from "../../../modules/action/management/info";
import { stateType } from "../../../modules/reducer";

interface Props {}

const ClubField: FC<Props> = (): ReactElement => {
  const handler = new ManagementInfoHandler();
  const { field } = useSelector((state: stateType) => state.ManagementInfo);

  const handleChangeField = (e: ChangeEvent<HTMLInputElement>) => {
    handler.handleField(e.target.value as Fields);
  };

  return (
    <S.ClubField>
      <div>
        <p>분야</p>
        <S.ClubFieldLabelWrap>
          {[SOFTWARE, EMBEDDED, SECURITY].map(f => (
            <S.ClubFieldLabel key={f}>
              <S.ClubFieldLabelRadio
                type="radio"
                value={f}
                name="fields"
                id={f}
                defaultChecked={f === field}
                maxLength={30}
                onChange={handleChangeField}
              />
              <span>{f}</span>
            </S.ClubFieldLabel>
          ))}
        </S.ClubFieldLabelWrap>
      </div>
    </S.ClubField>
  );
};

export default memo(ClubField);
