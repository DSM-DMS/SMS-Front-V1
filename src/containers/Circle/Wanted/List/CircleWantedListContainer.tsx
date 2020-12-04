import React, { FC } from "react";
import { CircleWantedList } from "../../../../components";
import { useEffect } from "react";
import { getWantedInfoList } from "../../../../modules/action/poster";
import { useDispatch } from "react-redux";
import { WantedInfo } from "../../../../modules/type/poster";

const data: WantedInfo[] = [
  {
    club_uuid: "클럽 uuid",
    end_period: "2020-08-01",
    start_period: "2020-07-25",
    recruitment_uuid: "모집 uuid",
    field: "모집 분야",
    grade: 0,
    number: 0,
    recruit_concept: "모집 한줄 소개"
  }
];

const CircleWantedContainer: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWantedInfoList(data));
  });
  return <CircleWantedList />;
};

export default CircleWantedContainer;
