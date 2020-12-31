import { WantedObj } from "../../../../modules/type/poster";

export interface ReqAddRecruitment {
  club_uuid: string;
  recruit_concept: string;
  end_period: string;
  members: WantedObj[];
}

export interface ReqEditRecruitment {
  recruit_concept: string;
  recruitment_uuid: string;
  members: WantedObj[];
}
