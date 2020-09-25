import React, { FC, ReactElement, useState, useRef } from 'react';

import Filters from './Filters';
import FilterWrap from './FilterWrap';

import * as S from '../style';

interface Props {}

const getTimeTable = (i: string) => {
  const timeTableExample: string[] = [
    `성직${i}`,
    `체육${i}`,
    `문학${i}`,
    `영어${i}`,
    `임베디드 시스템${i}`,
    `임베디드 시스템${i}`,
    `수학${i}`,
  ];
  return timeTableExample;
};

const timeTables = (() => {
  const a: any = {};

  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 4; j++) {
      a[`timeTable${i}_${j}`] = getTimeTable(`${i}_${j}`);
    }
  }

  return a;
})();

const myClassTimeTable: string[] = [
  '성직',
  '체육',
  '문학',
  '영어',
  '임베디드 시스템',
  '임베디드 시스템',
  '수학',
];

const fixNum = (num: number): string => (num < 10 ? `0${num}` : String(num));

const Timetable: FC<Props> = (): ReactElement => {
  const [grade, setGrade] = useState<number>(0);
  const [classNum, setClassNum] = useState<number>(0);
  const resetRef = useRef<HTMLImageElement>(null);

  const resetFn = () => {
    setGrade(0);
    setClassNum(0);
    resetRef.current.classList.add('rolling');
    setTimeout(() => {
      resetRef.current.classList.remove('rolling');
    }, 1000);
  };

  const isSelectAll = () => grade !== 0 && classNum !== 0;

  return (
    <S.Timetable>
      <S.TimetableTitle>
        {isSelectAll() ? (
          <span>{`${grade}학년 ${classNum}반`} 시간표</span>
        ) : (
          <span>우리반 시간표</span>
        )}
        <FilterWrap resetFn={resetFn} resetRef={resetRef}>
          <Filters
            filterLen={3}
            selected={grade}
            setSelected={setGrade}
            type="grade"
          />
          <Filters
            filterLen={4}
            selected={classNum}
            setSelected={setClassNum}
            type="class"
          />
        </FilterWrap>
      </S.TimetableTitle>
      <S.TimetableList>
        {isSelectAll()
          ? timeTables[`timeTable${grade}_${classNum}`].map(
              (time: any, i: number) => (
                <S.TimetableItem key={i}>
                  <S.TimetableItemDate>{fixNum(i + 1)}</S.TimetableItemDate>
                  {time}
                </S.TimetableItem>
              ),
            )
          : myClassTimeTable.map((time: any, i: number) => (
              <S.TimetableItem key={i}>
                <S.TimetableItemDate>{fixNum(i + 1)}</S.TimetableItemDate>
                {time}
              </S.TimetableItem>
            ))}
      </S.TimetableList>
    </S.Timetable>
  );
};

export default Timetable;
