import React, { FC, MouseEvent } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import * as S from "./styles";

interface Props {
  color?: string;
  htmlFor: string;
  clickHandler: (e: MouseEvent<HTMLDivElement>) => void;
}

const LabelCheckBox: FC<Props> = ({ clickHandler, color, children }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const onClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    setIsActive(prev => !prev);
    clickHandler(e);
  }, []);

  return (
    <S.Container color={color} onClick={onClick}>
      <S.CheckBox isActive={isActive} />
      <span>{children}</span>
    </S.Container>
  );
};

export default LabelCheckBox;
