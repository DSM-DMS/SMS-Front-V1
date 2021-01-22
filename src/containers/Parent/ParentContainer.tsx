import React, { FC, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { Approve } from "../../components";
import { ResOutingInfo } from "../../lib/api/payloads/Parent";
import { getOutingInfo, postOutingAction } from "../../lib/api/Parent";
import { getAxiosError } from "../../lib/utils";
import Confirm from "../../lib/confirm/confirm";
import WithLoadingContainer, {
  LoadingProps
} from "../Loading/WithLoadingContainer";

export class ParentActions {
  static PARENT_REJECT = "parent-reject";
  static PARENT_APPROVE = "parent-approve";
}

interface Props extends LoadingProps {}

const ApproveContainer: FC<Props> = ({ loading, startLoading, endLoading }) => {
  const { confirmUuid } = useParams<{ confirmUuid: string }>();
  const [outingInfo, setOutingInfo] = useState<ResOutingInfo>({
    outing_uuid: "",
    start_time: 0,
    end_time: 0,
    place: "",
    reason: "",
    outing_situation: ""
  });

  const fetchOutingInfo = async () => {
    startLoading();
    try {
      const { data } = await getOutingInfo(confirmUuid);

      setOutingInfo(data);
    } catch (err) {
      const { status } = getAxiosError(err);

      if (status === 404) {
        toast.error("외출증 코드에 해당하는 외출증이 없습니다.");
      }
    }
    endLoading();
  };

  const controlOuting = async (
    outing_uuid: string,
    action: ParentActions,
    confirmUuid: string
  ) => {
    const typeText = action === ParentActions.PARENT_APPROVE ? "승인" : "거절";
    const confirm = await Confirm.confirm([
      `자녀의 외출증을 ${typeText}하시겠습니까?`,
      "취소",
      typeText
    ]);
    if (!confirm) return;

    startLoading();
    try {
      await postOutingAction(outing_uuid, action, confirmUuid);

      toast.success(`자녀의 외출증을 ${typeText}했습니다.`);
    } catch (err) {
      const { status } = getAxiosError(err);

      if (status === 404) {
        toast.error("존재하지 않는 외출증입니다.");
      } else if (status === 409) {
        toast.error("현재 학부모님이 접근할 수 없는 외출증입니다.");
      }
    }
    endLoading();
  };

  const approveOuting = useCallback(() => {
    const approve = ParentActions.PARENT_APPROVE;
    controlOuting(outingInfo.outing_uuid, approve, confirmUuid);
  }, [outingInfo, confirmUuid]);

  const rejectOuting = useCallback(() => {
    const reject = ParentActions.PARENT_REJECT;
    controlOuting(outingInfo.outing_uuid, reject, confirmUuid);
  }, [outingInfo, confirmUuid]);

  useEffect(() => {
    if (!confirmUuid) return;
    if (
      confirmUuid.length !== 20 ||
      confirmUuid.substring(0, 7) !== "confirm" ||
      isNaN(+confirmUuid.substring(8, 20))
    ) {
      toast.error("잘못된 접근입니다.");
      location.href = "/login";
    }
  }, [confirmUuid]);
  useEffect(() => {
    fetchOutingInfo();
  }, []);

  return (
    <Approve
      loading={loading}
      outingInfo={outingInfo}
      approveOuting={approveOuting}
      rejectOuting={rejectOuting}
    />
  );
};

export default WithLoadingContainer(ApproveContainer);
