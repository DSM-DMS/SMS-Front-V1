import React, { FC, memo } from 'react';
import * as S from './styles';

export interface AllCircleBoxType {
  name: string;
  description: string;
  field: string;
  where: string;
  imgSrc: string;
  leader: string;
}

const AllCircleBox: FC<AllCircleBoxType> = ({
  name,
  description,
  field,
  where,
  leader,
  imgSrc,
}) => {
  return (
    <S.Container>
      <div>
        <S.Header>
          <S.CircleName>{name}</S.CircleName>
          <div>|</div>
        </S.Header>
        <S.CircleIntroduce>{description}</S.CircleIntroduce>
        <S.WantedJob>동아리장 {leader}</S.WantedJob>
      </div>
      <S.Footer>
        <div>{where}</div>
        <S.Field>{field}</S.Field>
      </S.Footer>
      <img src={imgSrc} />
    </S.Container>
  );
};

export default memo(AllCircleBox);
