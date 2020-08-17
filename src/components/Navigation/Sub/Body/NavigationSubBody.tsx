import React, { FC } from 'react';
import * as S from './styles';
import SubNavigationItemContainer from '../../Item/SubNavigationItemContainer';
import {
  NavIconNoticeWhite,
  NavIconNoticeBlue,
  NavIconCircleWhite,
  NavIconCircleBlue,
  NavIconOutingWhite,
  NavIconOutingBlue,
} from '../../../../assets';
import { useSelector } from 'react-redux';
import { stateType } from '../../../../modules/reducer';

interface SubNavItem {
  name: string;
  blue: string;
  white: string;
  route: string;
}

type SubNavObj = {
  동아리: SubNavItem[];
  외출신청: SubNavItem[];
};

type PageType = '동아리' | '외출신청';

const subNavObj: SubNavObj = {
  동아리: [
    {
      name: '공지사항',
      white: NavIconNoticeWhite,
      blue: NavIconNoticeBlue,
      route: '/circles/notice',
    },
    {
      name: '부원 모집',
      white: NavIconCircleWhite,
      blue: NavIconCircleBlue,
      route: '/circles/wanted',
    },
    {
      name: '동아리 전체보기',
      white: '',
      blue: '',
      route: '/circles/all',
    },
  ],
  외출신청: [
    {
      name: '유의사항',
      white: NavIconNoticeWhite,
      blue: NavIconNoticeBlue,
      route: '/outside/waring',
    },
    {
      name: '외출신청',
      white: NavIconOutingWhite,
      blue: NavIconOutingBlue,
      route: '/outside/apply',
    },
    {
      name: '내 외출신청 내역',
      white: '',
      blue: '',
      route: '/outside/history',
    },
  ],
};

const NavigationSubBody: FC<{ page: string }> = ({ page }) => {
  const subUrl = useSelector((store: stateType) => store.page.subUrl);
  return (
    <S.Container>
      {subNavObj[page as PageType].map(
        ({ name, blue, white, route }, index) => (
          <SubNavigationItemContainer
            isActive={subUrl === name}
            name={name}
            src={subUrl === name ? blue : white}
            route={route}
            key={index}
          />
        ),
      )}
    </S.Container>
  );
};

export default NavigationSubBody;
