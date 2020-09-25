import React, { FC } from 'react';
import { WantedCircleBoxData } from '../../../../components/default/CircleBox/WantedCircleBox';
import { CircleWantedList } from '../../../../components';
import { useEffect } from 'react';
import { updatePosterListWanted } from '../../../../modules/action/poster';
import { useDispatch } from 'react-redux';

const data: WantedCircleBoxData[] = [
  {
    name: 'VCC',
    field: '임베디드',
    description: '임베디드를 함께 공부할 열정있는 학생을 모집합니다!',
    job: ['PCB 디자이너 1', 'Hardware 엔지니어 2'],
    where: '세미나실 4-4',
    grade: '2학년',
    imgSrc:
      'https://img.insight.co.kr/static/2018/09/12/700/z7n04ul8ig3y27w6l6ok.jpg',
    date: '2020-07-25 ~ 08-01',
  },
  {
    name: '동아리1',
    field: '임베디드',
    description: '저희는 동아리1 입니다!',
    job: ['동아리1 일원', '동아리2 일원'],
    where: '세미나실 1-1',
    grade: '1학년',
    imgSrc:
      'https://img.insight.co.kr/static/2018/09/12/700/z7n04ul8ig3y27w6l6ok.jpg',
  },
  {
    name: '동아리2',
    field: '임베디드',
    description: '저희는 동아리2 입니다!',
    job: ['동아리2 일원', '동아리2 일원'],
    where: '세미나실 2-2',
    grade: '2학년',
    imgSrc:
      'https://img.insight.co.kr/static/2018/09/12/700/z7n04ul8ig3y27w6l6ok.jpg',
  },
];

const CircleWantedContainer: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updatePosterListWanted(data));
  });
  return <CircleWantedList />;
};

export default CircleWantedContainer;
