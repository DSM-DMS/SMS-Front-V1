import React, { FC } from 'react';
import { CircleWantedDetail } from '../../../../components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updatePosterDetailWanted } from '../../../../modules/action/poster';

export interface SubComment {
  name: string;
  date: string;
  content: string;
}

export interface Comment extends SubComment {
  subComments?: SubComment[];
}

export interface CircleWantedDetail {
  name: string;
  introduce: string;
  date: string;
  leader: string;
  field: string[];
  grade: number[];
  where: string;
  imgSrc: string;
  peoples: {
    three: string[];
    two: string[];
    one: string[];
  };
  tags: string[];
  projects: string[];
  comments: Comment[];
}

const data: CircleWantedDetail = {
  name: 'VCC',
  date: '2020-07-25 ~ 08-01',
  introduce: `VCC는 임베디드 소프트웨어에 연구동아리 입니다. 주로 AVR을 통한 마이크로프로세서 제어에 대해 공부하고,
이를 활용한 프로젝트를 함께 진행합니다.`,
  leader: '홍성민',
  field: [' PCB 디자이너', 'Hardware 엔지니어'],
  grade: [2],
  where: '4-4 세미나실',
  imgSrc: '',
  peoples: {
    three: ['한기태', '신윤성'],
    two: ['신유빈', '강신희'],
    one: ['정환', '장윤주', '유진'],
  },
  tags: ['임베디드'],
  projects: ['Now you see me 물방울 마술', 'VCC_RC카'],
  comments: [
    {
      name: '2113 이성진',
      date: '2020-07-09 13:57',
      content: '저도 들어갈 수 있나요?',
      subComments: [
        {
          name: '2301 강신희',
          date: '2020-07-09 14:32',
          content: '아뇨 특딱은 인밴입니당^^',
        },
        {
          name: '2113 이성진',
          date: '2020-07-09 14:32',
          content: 'ㅜ',
        },
      ],
    },
  ],
};

const CircleWantedDetailContainer: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updatePosterDetailWanted(data));
  }, []);
  return <CircleWantedDetail />;
};

export default CircleWantedDetailContainer;
