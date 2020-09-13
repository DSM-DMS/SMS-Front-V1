import React, { FC, ReactElement, memo, useCallback } from 'react';
import * as S from './styles';
import { useHistory } from 'react-router';
import { HashTag } from '../Info/Body/Sub/styles';

export interface WantedCircleBoxData {
  name: string;
  description: string;
  field: string;
  job: string[];
  where: string;
  grade: string;
  imgSrc: string;
  date?: string;
}

const dateParse = (date: string): ReactElement | string => {
  if (!date) return '\n|';
  if (!date) return '\n상시모집';

  const [date1, date2, date3] = date.split(' ');

  return (
    <>
      <div>{date1}</div>
      <S.Date>
        <span>~</span> <span>{date3}</span>
      </S.Date>
    </>
  );
};

const WantedCircleBox: FC<WantedCircleBoxData> = ({
  name,
  description,
  job,
  field,
  where,
  grade,
  date,
  imgSrc,
}) => {
  const history = useHistory();
  const handleClick = useCallback(() => {
    history.push(`/circles/wanted/${name}`);
  }, []);

  return (
    <S.Container onClick={handleClick}>
      <div>
        <S.Header>
          <S.CircleName>{name}</S.CircleName>
          <div>{where}</div>
        </S.Header>
        <S.CircleIntroduce>{description}</S.CircleIntroduce>
        <S.WantedJob>
          {job.map((str) => (
            <div>*{str}</div>
          ))}
        </S.WantedJob>
      </div>
      <S.Footer>
        <div>
          <div>
            <HashTag>{field}</HashTag>
          </div>
        </div>
        <div>{dateParse(date)}</div>
      </S.Footer>
      <img src={imgSrc} />
    </S.Container>
  );
};

export default memo(WantedCircleBox);
