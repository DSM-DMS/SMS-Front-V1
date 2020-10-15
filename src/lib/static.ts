import {
  NavIconHomeWhite,
  NavIconHomeBlue,
  NavIconNoticeWhite,
  NavIconNoticeBlue,
  NavIconCircleWhite,
  NavIconCircleBlue,
  NavIconOutingWhite,
  NavIconOutingBlue,
  NavIconScheduleWhite,
  NavIconScheduleMint,
  NavIconOutingMint,
  NavIconNoticeMint,
  NavIconNoticeBlack,
  NavIconCircleBlack,
  NavIconAllBlack,
  NavIconAllBlue,
  NavIconWaringBlack,
  NavIconWaringRed,
  NavIconOutingBlack,
  NavIconHistoryBlack,
  NavIconCircleMint,
  NavIconUnauthorizedBlack,
  NavIconUnauthorizedMint,
  NavIconHomeBlack,
} from '../assets';
import {
  MainSubItem,
  NavItem,
} from '../components/Navigation/Main/body/NavigationBody';

export interface RouteData {
  main: NavItem[];
  sub: MainSubItem[];
  color: string;
  isManagementMode?: boolean;
}

export const userRoute: RouteData = {
  main: [
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
  ],
  sub: [
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
  ],
  color: '#5323B2',
};

export const adminRouter: RouteData = {
  main: [
    {
      name: '학사 일정',
      route: '/admin/home',
      white: NavIconScheduleWhite,
      blue: NavIconScheduleMint,
    },
  ],
  sub: [
    {
      name: '외출 관리',
      route: '/admin/out/wait',
      subUrl: '승인대기 외출증',
      white: NavIconOutingWhite,
      blue: NavIconOutingMint,
    },
    {
      name: '공지사항',
      subUrl: '전체 공지',
      route: '/admin/notice/all',
      white: NavIconNoticeWhite,
      blue: NavIconNoticeMint,
    },
  ],
  color: '#23B2AD',
};

export const managementRouter: RouteData = {
  main: [
    {
      name: '정보수정',
      route: '/management/edit',
      white: NavIconHomeBlack,
      blue: NavIconHomeBlack,
    },
    {
      name: '모집관리',
      route: '/management/wanted',
      white: NavIconCircleBlack,
      blue: NavIconCircleBlack,
    },
    {
      name: '공지 관리',
      route: '/management/notice',
      white: NavIconNoticeBlack,
      blue: NavIconNoticeBlack,
    },
  ],
  sub: [],
  color: '#FFFFFF',
  isManagementMode: true,
};

interface SubNavItem {
  name: string;
  route: string;
  url: string;
  acitveUrl: string;
}

export type SubNavObj = {
  동아리: SubNavItem[];
  외출신청: SubNavItem[];
  '외출 관리': SubNavItem[];
  공지사항: SubNavItem[];
};

export type PageType = '동아리' | '외출신청' | '외출 관리' | '공지사항';

export const subNavRouter: SubNavObj = {
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
  '외출 관리': [
    {
      name: '승인대기 외출증',
      url: NavIconOutingBlack,
      acitveUrl: NavIconOutingMint,
      route: '/admin/out/wait',
    },
    {
      name: '현재 외출 학생',
      url: NavIconCircleBlack,
      route: '/admin/out/now',
      acitveUrl: NavIconCircleMint,
    },
    {
      name: '미인증 외출증',
      url: NavIconUnauthorizedBlack,
      route: '/admin/out/certified',
      acitveUrl: NavIconUnauthorizedMint,
    },
  ],
  공지사항: [
    {
      name: '전체 공지',
      url: NavIconAllBlack,
      acitveUrl: '',
      route: '/admin/notice/all',
    },
    {
      name: '내가 올린 공지',
      url: NavIconWaringBlack,
      acitveUrl: '',
      route: '/admin/notice/mine',
    },
    {
      name: '공지사항 작성',
      url: '',
      acitveUrl: '',
      route: '/admin/notice/writing',
    },
  ],
};
