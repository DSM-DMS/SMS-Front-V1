import React from 'react';
import { FC } from 'react';
import * as S from './styles';
import NavigationItem from './item/NavigationItem';
import { useSelector } from 'react-redux';
import { stateType } from '../../../../modules/reducer';
import {
  NavIconHomeWhite,
  NavIconHomeBlue,
  NavIconNoticeWhite,
  NavIconNoticeBlue,
  NavIconCircleWhite,
  NavIconCircleBlue,
  NavIconOutsideWhite,
  NavIconOutsideBlue,
} from '../../../../assets';

interface NavItem {
  name: string;
  white: string;
  blue: string;
  route: string;
}

const navItemArr: NavItem[] = [
  {
    name: '홈',
    route: 'home',
    white: NavIconHomeWhite,
    blue: NavIconHomeBlue,
  },
  {
    name: '공지',
    route: 'notice',
    white: NavIconNoticeWhite,
    blue: NavIconNoticeBlue,
  },
  {
    name: '동아리',
    route: 'circles',
    white: NavIconCircleWhite,
    blue: NavIconCircleBlue,
  },
  {
    name: '외출신청',
    route: '?',
    white: NavIconOutsideWhite,
    blue: NavIconOutsideBlue,
  },
];

const NavigationBody: FC = () => {
  const page = useSelector((state: stateType) => state.page);
  return (
    <S.Container>
      {navItemArr.map(({ name, white, blue, route }, index) => (
        <NavigationItem
          isActive={name === page}
          name={name}
          src={page === name ? blue : white}
          route={route}
          key={index}
        />
      ))}
    </S.Container>
  );
};

export default NavigationBody;
