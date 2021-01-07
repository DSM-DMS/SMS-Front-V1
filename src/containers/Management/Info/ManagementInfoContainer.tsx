import React, {
  ChangeEvent,
  FC,
  ReactElement,
  useEffect,
  useState
} from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { ManagementInfo } from "../../../components";
import {
  getClubInfoWithUuid,
  getClubUuidFromLeader
} from "../../../lib/api/Management";
import { ManagementInfoHandler } from "../../../modules/action/management/info";
import { patchClubInfo } from "../../../lib/api/Management";
import { getAxiosError } from "../../../lib/utils";
import WithLoadingContainer, {
  LoadingProps
} from "../../Loading/WithLoadingContainer";

interface Props extends LoadingProps {}

const ManagementInfoContainer: FC<Props> = ({
  loading,
  startLoading,
  endLoading
}): ReactElement => {
  const history = useHistory();
  const handler = new ManagementInfoHandler();
  const [clubUuid, setClubUuid] = useState<string>("");
  const [club_concept, setConcept] = useState<string>("");
  const [introduction, setIntroduce] = useState<string>("");
  const [link, setFbLink] = useState<string>("");
  const [logo, setLogo] = useState<File>(null);

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
    if (!(club_concept || introduction || link || logo)) {
      toast.error("'컨셉, 소개, 사진, 링크' 중 하나 이상 변경해야 합니다.");
      return;
    }

    startLoading();
    try {
      await patchClubInfo(clubUuid, getModifiedFd());

      toast.success("동아리 정보를 수정했습니다.");
    } catch (err) {
      const { status, code } = getAxiosError(err);

      if (status === 403 && code === -1711) {
        toast.error("학생 또는 관리자 계정이 아닙니다.");
      } else if (status === 403 && code === -1712) {
        toast.error("본인이 해당 동아리의 동아리 장이 아닙니다.");
      } else if (status === 404 && code === -1721) {
        toast.error("수정하려는 동아리가 없습니다.");
      }
    }
    endLoading();
  };

  const getClubUuid = async () => {
    try {
      const {
        data: { club_uuid }
      } = await getClubUuidFromLeader(localStorage.getItem("uuid"));

      setClubUuid(club_uuid);
      await getClubInfo(club_uuid);
    } catch (err) {
      const { status } = getAxiosError(err);

      if (status === 403) {
        toast.error("학생 또는 관리자의 계정이 아닙니다.");
      } else if (status === 404 || status === 409) {
        toast.error("본인이 동아리 장인 동아리가 없습니다.");
      }

      history.push("/login");
    }
  };

  const getClubInfo = async (clubUuid: string) => {
    try {
      const { data } = await getClubInfoWithUuid(clubUuid);

      handler.handleInit(data);
    } catch (err) {
      const { status } = getAxiosError(err);

      if (status === 403) {
        toast.error("학생 또는 관리자의 계정이 아닙니다.");
      } else if (status === 404) {
        toast.error("수정하려는 동아리가 없습니다.");
      }
    }
  };

  useEffect(() => {
    getClubUuid();
  }, []);

  return (
    <ManagementInfo
      loading={loading}
      clubUuid={clubUuid}
      handleConcept={handleConcept}
      handleIntroduction={handleIntroduction}
      handleLink={handleLink}
      handleLogo={handleLogo}
      modifyClubInfo={modifyClubInfo}
    />
  );
};

export default WithLoadingContainer(ManagementInfoContainer);
