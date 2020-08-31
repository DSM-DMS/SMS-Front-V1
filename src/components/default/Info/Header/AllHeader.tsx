import React, { FC } from 'react';
import * as S from './styles';
import { Hr } from '../../Board/styles';

interface Props {
  name: string;
}

const AllHeader: FC<Props> = ({ name }) => {
  return (
    <>
      <S.Container>
        <S.Title>{name}</S.Title>
      </S.Container>
      <Hr />
    </>
  );
};

export default AllHeader;
