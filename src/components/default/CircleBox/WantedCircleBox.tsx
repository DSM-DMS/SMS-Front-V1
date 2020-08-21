import React, { FC, ReactElement, memo } from 'react';
import * as S from './styles';

export interface WantedCircleBoxData {
  name: string;
  description: string;
  field: string;
  job: string[];
  whare: string;
  grade: string;
  imgSrc: string;
  date?: string;
}

const dateParse = (date: string): ReactElement | string => {
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
  whare,
  grade,
  date,
  imgSrc,
}) => {
  return (
    <S.Container>
      <div>
        <S.Header>
          <S.CircleName>{name}</S.CircleName>
          <div>{field}</div>
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
          <div>{whare}</div>
          <div>모집대상 : {grade}</div>
        </div>
        <div>{dateParse(date)}</div>
      </S.Footer>
      <img src={imgSrc} />
    </S.Container>
  );
};

export default memo(WantedCircleBox);
