import { PageState } from '../modules/reducer/page';

type valueType = [string, string];

interface UrlObj {
  home: valueType;
  notice: valueType;
  circles: valueType;
  outside: valueType;
}

const urlObj: UrlObj = {
  home: ['홈', ''],
  notice: ['공지', ''],
  circles: ['동아리', '공지사항'],
  outside: ['외출신청', '유의사항'],
};

interface SubUrlObj {
  notice: string;
  wanted: string;
  all: string;
  waring: string;
  apply: string;
  history: string;
  [key: string]: string;
}

const subUrlObj: SubUrlObj = {
  notice: '공지사항',
  wanted: '부원 모집',
  all: '동아리 전체보기',
  waring: '유의사항',
  apply: '외출신청',
  history: '내 외출신청 내역',
};

export const getNavUrl = (url: string): PageState => {
  const stringArr = url.split('/');
  const filterStr = stringArr[3] as 'home' | 'notice' | 'circles' | 'outside';
  const urlArr = urlObj[filterStr];
  return {
    mainUrl: urlArr[0],
    subUrl: subUrlObj[stringArr[4]] || urlArr[1],
  };
};
