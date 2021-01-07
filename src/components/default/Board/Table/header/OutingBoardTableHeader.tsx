import React, { FC, memo } from 'react';
import * as S from './styles';

interface Props {
  names: string[];
}

const OutingBoardTableHeader: FC<Props> = ({ names }) => {
  return (
    <S.OutingItemContainer>
      {names.map((name) => (
        <div>{name}</div>
      ))}
    </S.OutingItemContainer>
  );
};

export default memo(OutingBoardTableHeader);
