import React, { FC } from 'react';
import { CircleAllDetail } from '../../../../components';

export interface CircleAllDetail {
  name: string;
  introduce: string;
  leader: string;
  where: string;
  imgSrc: string;
  peoples: {
    three: string[];
    two: string[];
    one: string[];
  };
  tags: string[];
  projects: string[];
}

const data: CircleAllDetail = {
  name: 'VCC',
  introduce: `VCC는 임베디드 소프트웨어에 연구동아리 입니다. 주로 AVR을 통한 마이크로프로세서 제어에 대해 공부하고,
    이를 활용한 프로젝트를 함께 진행합니다.
   `,
  leader: '홍성민',
  where: '4-4 세미나실',
  imgSrc:
    'https://0gichul.com/files/attach/images/204/125/877/003/79160512de6dcb7eab93212a13d56fad.jpg',
  tags: ['임베디드'],
  projects: ['Now you see me 물방울 마술', 'VCC_RC카'],
  peoples: {
    three: ['한기태', '신윤성'],
    two: ['신유빈', '강신희'],
    one: ['정환', '장윤주', '유진아'],
  },
};

const CircleAllDetailContainer: FC = () => {
  return <CircleAllDetail data={data} />;
};

export default CircleAllDetailContainer;
