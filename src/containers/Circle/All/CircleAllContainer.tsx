import React, { FC } from 'react';
import { CircleAll } from '../../../components';
import { AllCircleBoxType } from '../../../components/default/CircleBox/AllCircleBox';

const data: AllCircleBoxType[] = [
  {
    name: '동아리1',
    leader: '익명의 동아리장1',
    description: '여기는 동아리1 입니다',
    field: '몰라',
    imgSrc:
      'https://pbs.twimg.com/profile_images/635150602478030848/M9jimJ1w_400x400.jpg',
    where: '1-1',
  },
  {
    name: '동아리2',
    leader: '익명의 동아리장2',
    description: '여기는 동아리2 입니다',
    field: '몰라',
    imgSrc:
      'https://pbs.twimg.com/profile_images/635150602478030848/M9jimJ1w_400x400.jpg',
    where: '2-2',
  },
  {
    name: '동아리3',
    leader: '익명의 동아리장3',
    description: '여기는 동아리3 입니다',
    field: '몰라',
    imgSrc:
      'https://pbs.twimg.com/profile_images/635150602478030848/M9jimJ1w_400x400.jpg',
    where: '3-3',
  },
  {
    name: '동아리4',
    leader: '익명의 동아리장4',
    description: '여기는 동아리4 입니다',
    field: '몰라',
    imgSrc:
      'https://pbs.twimg.com/profile_images/635150602478030848/M9jimJ1w_400x400.jpg',
    where: '4-4',
  },
  {
    name: '동아리5',
    leader: '익명의 동아리장5',
    description: '여기는 동아리5 입니다',
    field: '몰라',
    imgSrc:
      'https://pbs.twimg.com/profile_images/635150602478030848/M9jimJ1w_400x400.jpg',
    where: '5-5',
  },
  {
    name: '동아리1',
    leader: '익명의 동아리장1',
    description: '여기는 동아리1 입니다',
    field: '몰라',
    imgSrc:
      'https://pbs.twimg.com/profile_images/635150602478030848/M9jimJ1w_400x400.jpg',
    where: '1-1',
  },
  {
    name: '동아리2',
    leader: '익명의 동아리장2',
    description: '여기는 동아리2 입니다',
    field: '몰라',
    imgSrc:
      'https://pbs.twimg.com/profile_images/635150602478030848/M9jimJ1w_400x400.jpg',
    where: '2-2',
  },
  {
    name: '동아리3',
    leader: '익명의 동아리장3',
    description: '여기는 동아리3 입니다',
    field: '몰라',
    imgSrc:
      'https://pbs.twimg.com/profile_images/635150602478030848/M9jimJ1w_400x400.jpg',
    where: '3-3',
  },
  {
    name: '동아리4',
    leader: '익명의 동아리장4',
    description: '여기는 동아리4 입니다',
    field: '몰라',
    imgSrc:
      'https://pbs.twimg.com/profile_images/635150602478030848/M9jimJ1w_400x400.jpg',
    where: '4-4',
  },
  {
    name: '동아리5',
    leader: '익명의 동아리장5',
    description: '여기는 동아리5 입니다',
    field: '몰라',
    imgSrc:
      'https://pbs.twimg.com/profile_images/635150602478030848/M9jimJ1w_400x400.jpg',
    where: '5-5',
  },
  {
    name: '동아리1',
    leader: '익명의 동아리장1',
    description: '여기는 동아리1 입니다',
    field: '몰라',
    imgSrc:
      'https://pbs.twimg.com/profile_images/635150602478030848/M9jimJ1w_400x400.jpg',
    where: '1-1',
  },
  {
    name: '동아리2',
    leader: '익명의 동아리장2',
    description: '여기는 동아리2 입니다',
    field: '몰라',
    imgSrc:
      'https://pbs.twimg.com/profile_images/635150602478030848/M9jimJ1w_400x400.jpg',
    where: '2-2',
  },
  {
    name: '동아리3',
    leader: '익명의 동아리장3',
    description: '여기는 동아리3 입니다',
    field: '몰라',
    imgSrc:
      'https://pbs.twimg.com/profile_images/635150602478030848/M9jimJ1w_400x400.jpg',
    where: '3-3',
  },
  {
    name: '동아리4',
    leader: '익명의 동아리장4',
    description: '여기는 동아리4 입니다',
    field: '몰라',
    imgSrc:
      'https://pbs.twimg.com/profile_images/635150602478030848/M9jimJ1w_400x400.jpg',
    where: '4-4',
  },
  {
    name: '동아리5',
    leader: '익명의 동아리장5',
    description: '여기는 동아리5 입니다',
    field: '몰라',
    imgSrc:
      'https://pbs.twimg.com/profile_images/635150602478030848/M9jimJ1w_400x400.jpg',
    where: '5-5',
  },
];

const CircleAllContainer: FC = () => {
  return <CircleAll data={data} />;
};

export default CircleAllContainer;
