import React, {
  FC,
  ReactElement,
  useState,
  useEffect,
  useCallback
} from "react";

import * as S from "./style";
import CircleBack from "./CircleBack";

import { OutingClose } from "../../../assets";
import {
  ADD,
  EDIT,
  ModalType
} from "../../../containers/Admin/Main/AdminMainContainer";
import { postSchedules } from "../../../lib/api/Main";
import { useDispatch, useSelector } from "react-redux";
import { getSchedulesSaga } from "../../../modules/action/main";
import { stateType } from "../../../modules/reducer";

interface Props {
  handleCloseModal?: () => void;
  type: ModalType;
}

const ScheduleModal: FC<Props> = ({ handleCloseModal, type }): ReactElement => {
  const dispatch = useDispatch();
  const { schedulerDate } = useSelector((state: stateType) => state.main);
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");
  const [detail, setDetail] = useState<string>("");

  const getLocalDate = useCallback(
    (date: Date = new Date()) =>
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
    []
  );

  const handleCreateSchedule = () => {
    createNewSchedule(start, end, detail);
    handleCloseModal();
  };

  const createNewSchedule = useCallback(
    async (start: string, end: string, detail: string) => {
      console.log(start, end, detail);
      const startDate = new Date(start);
      const endDate = new Date(end);

      try {
        await postSchedules(
          Math.floor(+startDate / 1000),
          Math.floor(+endDate / 1000),
          detail
        );

        dispatch(
          getSchedulesSaga(
            schedulerDate.getFullYear(),
            schedulerDate.getMonth() + 1
          )
        );
      } catch (err) {
        const status = err.response.status;

        if (status === 403) {
          return alert("선생님 계정만 일정을 추가할 수 있습니다.");
        }
      }
    },
    []
  );

  useEffect(() => {
    if (type === EDIT) {
      // TODO : get edit information
    }
  }, [type]);

  return (
    <>
      <S.ScheduleModalWrap>
        <S.ScheduleModalClose
          src={OutingClose}
          alt="close"
          title="close"
          onClick={handleCloseModal}
        />
        <S.ScheduleModalTitle>
          {type === ADD ? "일정 추가" : "일정 수정"}
        </S.ScheduleModalTitle>
        <S.ScheduleModalForm>
          <S.ScheduleModalFormTimes>
            <S.ScheduleModalFormTitle>기간</S.ScheduleModalFormTitle>
            <S.ScheduleModalFormInnerWrap>
              <S.ScheduleModalFormInput
                type="date"
                placeholder="시작일을 선택해 주세요."
                onChange={e => {
                  setStart(e.currentTarget.value);
                }}
                min={getLocalDate()}
                max={end}
              />
              <S.ScheduleModalFormTilde>~</S.ScheduleModalFormTilde>
              <S.ScheduleModalFormInput
                type="date"
                placeholder="종료일을 선택해 주세요."
                onChange={e => {
                  setEnd(e.currentTarget.value);
                }}
                min={start}
              />
            </S.ScheduleModalFormInnerWrap>
          </S.ScheduleModalFormTimes>
          <S.ScheduleModalFormDetail>
            <S.ScheduleModalFormTitle>일정 내용</S.ScheduleModalFormTitle>
            <S.ScheduleModalFormInnerWrap>
              <S.ScheduleModalFormInput
                type="text"
                placeholder="세부 내용을 입력해주세요"
                onChange={e => {
                  setDetail(e.currentTarget.value);
                }}
                value={detail}
              />
            </S.ScheduleModalFormInnerWrap>
          </S.ScheduleModalFormDetail>
          <S.ScheduleModalFormButtonWrap>
            <S.ScheduleModalButton onClick={handleCloseModal}>
              취소
            </S.ScheduleModalButton>
            <S.ScheduleModalButton onClick={handleCreateSchedule}>
              {type === ADD ? "추가" : "수정"}
            </S.ScheduleModalButton>
          </S.ScheduleModalFormButtonWrap>
        </S.ScheduleModalForm>
        <S.ScheduleModalCircleBackWrap>
          <CircleBack />
        </S.ScheduleModalCircleBackWrap>
      </S.ScheduleModalWrap>
      <S.ScheduleModalDarkBack onClick={handleCloseModal} />
    </>
  );
};

export default ScheduleModal;
