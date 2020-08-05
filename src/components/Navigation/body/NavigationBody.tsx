import React from 'react';
import { FC } from 'react';
import * as S from './styles';
import NavigationItem from './item/NavigationItem';
import NavIconCircleWhite from '../../../assets/NavIcon-circle-white.png';
import NavIconCircleBlue from '../../../assets/NavIcon-circle-blue.png';
import NavIconHomeBlue from '../../../assets/NavIcon-home-blue.png';
import NavIconHomeWhite from '../../../assets/NavIcon-home-white.png';
import NavIconNoticeWhite from '../../../assets/NavIcon-notice-white.png';
import NavIconNoticeBlue from '../../../assets/NavIcon-notice-blue.png';
import NavIconOutsideWhite from '../../../assets/NavIcon-outside-white.png';
import NavIconOutsideBlue from '../../../assets/NavIcon-outside-blue.png';
import { useSelector } from 'react-redux';
import { stateType } from '../../../modules/reducer';

interface NavItem {
  name: string;
  white: string;
  blue: string;
}

const navItemArr: NavItem[] = [
  {
    name: '홈',
    white: NavIconHomeWhite,
    blue: NavIconHomeBlue,
  },
  {
    name: '공지',
    white: NavIconNoticeWhite,
    blue: NavIconNoticeBlue,
  },
  {
    name: '동아리',
    white: NavIconCircleWhite,
    blue: NavIconCircleBlue,
  },
  {
    name: '외출신청',
    white: NavIconOutsideWhite,
    blue: NavIconOutsideBlue,
  },
];

const NavigationBody: FC = () => {
  const page = useSelector((state: stateType) => state.page);
  return (
    <S.Container>
      {navItemArr.map(({ name, white, blue }, index) => (
        <NavigationItem
          isActive={page === name}
          name={name}
          src={page === name ? blue : white}
          key={index}
        />
      ))}
    </S.Container>
  );
};

export default NavigationBody;
