import React, {
  ChangeEvent,
  FC,
  ReactElement,
  useEffect,
  useState
} from "react";
import { useHistory } from "react-router-dom";

import { ManagementInfo } from "../../../components";
import {
  getClubInfoWithUuid,
  getClubUuidFromLeader
} from "../../../lib/api/Management";
import { ManagementInfoHandler } from "../../../modules/action/management/info";
import { patchClubInfo } from "../../../lib/api/Management";

interface Props {}

const ManagementInfoContainer: FC<Props> = (): ReactElement => {
  const history = useHistory();
  const handler = new ManagementInfoHandler();
  const [clubUuid, setClubUuid] = useState<string>("");
  const [club_concept, setConcept] = useState<string>("");
  const [introduction, setIntroduce] = useState<string>("");
  const [link, setFbLink] = useState<string>("");
  const [logo, setLogo] = useState<File>(null);

  useEffect(() => {
    console.log([club_concept, introduction, link, logo]);
  }, [club_concept, introduction, link, logo]);

  const handleConcept = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    handler.handleClubConcept(value);
    setConcept(value);
  };

  const handleIntroduction = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    handler.handleIntroduction(e.target.value);
    setIntroduce(value);
  };

  const handleLink = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    handler.handleLink(e.target.value);
    setFbLink(value);
  };

  const handleLogo = (file: File) => {
    setLogo(file);
  };

  const getModifiedFd = () => {
    const fd = new FormData();
    if (club_concept.trim()) fd.append("club_concept", club_concept);
    if (introduction.trim()) fd.append("introduction", introduction);
    if (link.trim()) fd.append("link", link);
    if (logo) fd.append("logo", logo);
    return fd;
  };

  const modifyClubInfo = async () => {
    try {
      await patchClubInfo(clubUuid, getModifiedFd());
    } catch (err) {
      const status = err?.response?.status;
      const code = err?.code;

      if (status === 403 && code === -1711)
        return alert("학생 또는 관리자 계정이 아닙니다.");
      if (status === 403 && code === -1712)
        return alert("본인이 해당 동아리의 동아리 장이 아닙니다.");
      if (status === 404 && code === -1721)
        return alert("수정하려는 동아리가 없습니다.");
    }
  };

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

      history.push("/login");
      return;
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

  return (
    <ManagementInfo
      clubUuid={clubUuid}
      handleConcept={handleConcept}
      handleIntroduction={handleIntroduction}
      handleLink={handleLink}
      handleLogo={handleLogo}
      modifyClubInfo={modifyClubInfo}
    />
  );
};

export default ManagementInfoContainer;
