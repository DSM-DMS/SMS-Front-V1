import { SituationType } from "../../../../containers/Outing/ApplyContainer";
import { ResDefault } from "../index";

export interface ResOutingInfo {
  outing_uuid: string;
  place: string;
  reason: string;
  start_time: number;
  end_time: number;
  outing_situation: SituationType | "";
}

export interface ResOutingInfoWithDefault extends ResOutingInfo, ResDefault {}
