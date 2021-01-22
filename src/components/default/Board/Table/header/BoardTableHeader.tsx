import React, { FC, memo } from "react";
import * as S from "./styles";

interface Props {
  names: string[];
}

const BoardTableHeader: FC<Props> = ({ names }) => {
  return (
    <S.Container>
      {names.map(name => (
        <div key={name}>{name}</div>
      ))}
    </S.Container>
  );
};

export default memo(BoardTableHeader);
