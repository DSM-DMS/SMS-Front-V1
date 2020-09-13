import React, { FC } from 'react';
import * as S from './styles';
import { Hr } from '../../Board/styles';
import { customSelector } from '../../../../lib/api';

const AllHeader: FC = () => {
  const name = customSelector((state) => state.poster.all.detail.name);
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
