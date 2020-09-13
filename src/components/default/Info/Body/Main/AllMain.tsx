import React, { FC } from 'react';
import * as S from './styles';
import { DetailContent, Hr, Where, People } from '../../default';
import { customSelector } from '../../../../../lib/api';

const AllMain = () => {
  const {
    introduce,
    leader,
    peoples: { one, two, three },
    where,
  } = customSelector((state) => state.poster.all.detail);
  return (
    <S.Container>
      <S.P>동아리 소개</S.P>
      <DetailContent>{introduce}</DetailContent>
      <Hr />
      <People leader={leader} three={three} two={two} one={one} />
      <Hr />
      <Where>{where}</Where>
    </S.Container>
  );
};

export default AllMain;
