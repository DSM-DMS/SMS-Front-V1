import React, { FC } from 'react';
import * as S from './styles';
import { DetailContent, Hr, Where, People } from '../../default';

interface Props {
  introduce: string;
  leader: string;
  three?: string[];
  two?: string[];
  one?: string[];
  where: string;
}

const AllMain: FC<Props> = ({ where, introduce, leader, three, two, one }) => {
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
