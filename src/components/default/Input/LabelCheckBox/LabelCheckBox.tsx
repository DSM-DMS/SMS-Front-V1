import React, { FC, MouseEvent } from "react";
import * as S from "./styles";

interface Props {
  color?: string;
  htmlFor: string;
  active: boolean;
  clickHandler: (e: MouseEvent<HTMLDivElement>) => void;
}

const LabelCheckBox: FC<Props> = ({
  active,
  clickHandler,
  color,
  children
}) => {
  return (
    <S.Container color={color} onClick={clickHandler}>
      <S.CheckBox isActive={active} />
      <span>{children}</span>
    </S.Container>
  );
};

export default LabelCheckBox;
