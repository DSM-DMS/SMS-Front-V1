import React, { ChangeEvent, FC } from "react";
import * as S from "./style";

interface Props {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: string;
  name: string;
  readOnly?: boolean;
  placeHolder?: string;
  inputName?: string;
}

const RegisterInput: FC<Props> = ({
  placeHolder,
  readOnly,
  onChange,
  value,
  name,
  inputName,
  type
}) => {
  return (
    <S.Container readOnly={readOnly}>
      <S.Name>{name}</S.Name>
      <S.Input
        name={inputName}
        placeholder={placeHolder}
        readOnly={readOnly}
        type={type}
        value={value}
        onChange={onChange}
      />
    </S.Container>
  );
};

export default RegisterInput;
