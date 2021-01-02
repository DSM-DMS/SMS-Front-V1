import React, { FC, MouseEvent } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { ChangeEvent } from "react";
import { calanderSvg } from "../../../../assets";
import * as S from "./styles";

interface Props {
  name?: string;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const DateInput: FC<Props> = ({ changeHandler, children, name }) => {
  return (
    <S.Container>
      <div>{children}</div>
      <input type="date" name={name} onChange={changeHandler} />
    </S.Container>
  );
};

export default DateInput;
