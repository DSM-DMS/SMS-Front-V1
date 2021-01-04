import React, { FC, ReactElement, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { ManagementInfo } from "../../../components";
import {
  getClubInfoWithUuid,
  getClubUuidFromLeader
} from "../../../lib/api/Management";
import { ManagementInfoHandler } from "../../../modules/action/management/info";

interface Props {}

const ManagementInfoContainer: FC<Props> = (): ReactElement => {
  const history = useHistory();
  const handler = new ManagementInfoHandler();
  const [clubUuid, setClubUuid] = useState<string>("");

  const getClubUuid = async () => {
    try {
      const res = await getClubUuidFromLeader(localStorage.getItem("uuid"));
      setClubUuid(res.data.club_uuid);
    } catch (err) {
      const status = err?.response?.status;

      if (status === 403) {
        alert("학생 또는 관리자의 계정이 아닙니다.");
      } else if (status === 404 || status === 409) {
        alert("동아리 장인 동아리가 없습니다.");
      }

      return history.push("/login");
    }
  };

  const getClubInfo = async (clubUuid: string) => {
    try {
      const { data } = await getClubInfoWithUuid(clubUuid);

      handler.handleInit(data);
    } catch (err) {}
  };

  useEffect(() => {
    if (clubUuid !== "") {
      getClubInfo(clubUuid);
    }
  }, [clubUuid]);
  useEffect(() => {
    getClubUuid();
  }, []);

  return <ManagementInfo clubUuid={clubUuid} />;
};

export default ManagementInfoContainer;
