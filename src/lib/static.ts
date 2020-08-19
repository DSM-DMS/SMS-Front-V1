import {
  NavIconNoticeBlue,
  NavIconCircleBlue,
  NavIconOutingBlue,
  NavIconOutingBlack,
  NavIconAllBlack,
  NavIconAllBlue,
  NavIconNoticeBlack,
  NavIconCircleBlack,
  NavIconWaringBlack,
  NavIconWaringRed,
  NavIconHistoryBlack,
} from '../assets';

interface SubNavItem {
  name: string;
  route: string;
  url: string;
  acitveUrl: string;
}

type SubNavObj = {
  동아리: SubNavItem[];
  외출신청: SubNavItem[];
};

export type PageType = '동아리' | '외출신청';

export const subNavObj: SubNavObj = {
  동아리: [
    {
      name: '공지사항',
      url: NavIconNoticeBlack,
      acitveUrl: NavIconNoticeBlue,
      route: '/circles/notice',
    },
    {
      name: '부원 모집',
      url: NavIconCircleBlack,
      acitveUrl: NavIconCircleBlue,
      route: '/circles/wanted',
    },
    {
      name: '동아리 전체보기',
      url: NavIconAllBlack,
      acitveUrl: NavIconAllBlue,
      route: '/circles/all',
    },
  ],
  외출신청: [
    {
      name: '유의사항',
      url: NavIconWaringBlack,
      acitveUrl: NavIconWaringRed,
      route: '/outing/waring',
    },
    {
      name: '외출신청',
      url: NavIconOutingBlack,
      acitveUrl: NavIconOutingBlue,
      route: '/outing/apply',
    },
    {
      name: '내 외출신청 내역',
      url: NavIconHistoryBlack,
      acitveUrl: NavIconHistoryBlack,
      route: '/outing/history',
    },
  ],
};
