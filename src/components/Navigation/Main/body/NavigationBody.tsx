import React from 'react';
import { FC } from 'react';
import * as S from './styles';
import MainNavigationItemContainer from '../../Item/MainNavigationItemContainer';
import { useSelector } from 'react-redux';
import { stateType } from '../../../../modules/reducer';
import {
  NavIconHomeWhite,
  NavIconHomeBlue,
  NavIconNoticeWhite,
  NavIconNoticeBlue,
  NavIconCircleWhite,
  NavIconCircleBlue,
  NavIconOutingWhite,
  NavIconOutingBlue,
} from '../../../../assets';
import MainSubNavigationItemContainer from '../../Item/MainSubNavigationItemContainer';

export interface NavItem {
  name: string;
  white: string;
  blue: string;
  route: string;
}

interface MainSubItem extends NavItem {
  subUrl: string;
}

export const navItemArr: NavItem[] = [
  {
    name: '홈',
    route: '/home',
    white: NavIconHomeWhite,
    blue: NavIconHomeBlue,
  },
  {
    name: '공지',
    route: '/notice',
    white: NavIconNoticeWhite,
    blue: NavIconNoticeBlue,
  },
];

export const mainSubArr: MainSubItem[] = [
  {
    name: '동아리',
    subUrl: '공지사항',
    route: '/circles/notice',
    white: NavIconCircleWhite,
    blue: NavIconCircleBlue,
  },
  {
    name: '외출신청',
    subUrl: '유의사항',
    route: '/outing/waring',
    white: NavIconOutingWhite,
    blue: NavIconOutingBlue,
  },
];

const NavigationBody: FC = () => {
  const mainUrl = useSelector((store: stateType) => store.page.mainUrl);
  return (
    <S.Container>
      {navItemArr.map(({ name, white, blue, route }, index) => (
        <MainNavigationItemContainer
          isActive={mainUrl === name}
          name={name}
          src={mainUrl === name ? blue : white}
          route={route}
          key={index}
        />
      ))}

      {mainSubArr.map(({ name, white, blue, route, subUrl }, index) => (
        <MainSubNavigationItemContainer
          isActive={mainUrl === name}
          name={name}
          src={mainUrl === name ? blue : white}
          route={route}
          subUrl={subUrl}
          key={index}
        />
      ))}
    </S.Container>
  );
};

export default NavigationBody;
