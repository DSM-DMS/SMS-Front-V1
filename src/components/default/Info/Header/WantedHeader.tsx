import React, { FC } from 'react';
import * as S from './styles';
import { Hr } from '../../Board/styles';
import { FacebookIcon } from '../../../../assets';

interface Props {
  name: string;
  date: string;
}

const InfoHeader: FC<Props> = ({ name, date }) => {
  return (
    <>
      <S.Container>
        <S.Title>{name}</S.Title>
        <S.FlexDiv>
          <div>{date}</div>
          <S.FaceBookBtn>
            <img src={FacebookIcon} />
            지원하기
          </S.FaceBookBtn>
        </S.FlexDiv>
      </S.Container>
      <Hr />
    </>
  );
};

export default InfoHeader;
