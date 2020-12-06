import React, { FC } from "react";
import { CircleAllDetail } from "../../../../components";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getCircleInfoDetail,
  updatePosterDetail
} from "../../../../modules/action/poster";
import { CircleInfo } from "../../../../modules/type/poster";

const data: CircleInfo = {
  club_concept: "한줄소개",
  club_uuid: "클럽 uuid",
  field: "분야",
  floor: 1,
  introduction: "소개",
  leader_uuid: "리더 uuid",
  link: "페북 링크",
  location: "장소",
  logo_uri: "로고 url",
  member_uuids: ["멤버 uuid1", "멤버 uuid2", "멤버 uuid3"],
  name: "동아리 이름"
};

const CircleAllDetailContainer: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCircleInfoDetail(data));
  }, []);
  return <CircleAllDetail />;
};

export default CircleAllDetailContainer;
