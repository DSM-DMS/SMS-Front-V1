export interface CircleInfo {
  club_uuid: string;
  leader_uuid: string;
  member_uuids: string[];
  name: string;
  field: string;
  location: string;
  floor: number;
  club_concept: string;
  introduction: string;
  link: string;
  logo_uri: string;
}

export interface WantedInfo {
  club_uuid: string;
  recruitment_uuid: string;
  start_period: string;
  end_period: string;
  recruit_concept: string;
  recruit_members: WantedObj[];
}

export interface WantedObj {
  field: string;
  grade: number;
  number: number;
}

export interface WantedInfoDetail extends CircleInfo, WantedInfo {}
