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
  const dateRef = useRef<HTMLInputElement>();
  const onClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    dateRef.current.click();
  }, []);
  return (
    <S.Container onClick={onClick}>
      <div>{children}</div>
      <input type="date" name={name} ref={dateRef} onChange={changeHandler} />
    </S.Container>
  );
};

export default DateInput;
