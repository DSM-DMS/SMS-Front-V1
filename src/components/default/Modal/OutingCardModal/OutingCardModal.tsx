import React from "react";
import { FC } from "react";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { stateType } from "../../../../modules/reducer";
import { useCallback } from "react";
import { CloseOutingCardModal } from "../../../../modules/action/outingCard";
import { getOutingCardTime } from "../../../../lib/utils";

const OutingCardModal: FC = () => {
  const dispatch = useDispatch();
  const { isOpen, data } = useSelector((state: stateType) => ({
    data: state.outingCard.list.find(
      ({ outing_uuid }) => outing_uuid === state.outingCard.outingUuid
    ) || {
      outing_uuid: "",
      name: "",
      grade: 0,
      group: 0,
      number: 0,
      place: "",
      reason: "",
      start_time: 0,
      end_time: 0,
      outing_situation: "",
      outing_status: "",
      is_late: false
    },
    isOpen: state.outingCard.modalIsOpen
  }));

  const closeModal = useCallback(() => {
    dispatch(CloseOutingCardModal());
  }, []);

  const {
    grade,
    name,
    group,
    number,
    start_time,
    end_time,
    place,
    reason
  } = data;

  const [date, startTime, endTime] = getOutingCardTime(start_time, end_time);

  return (
    <>
      {isOpen && (
        <S.Container>
          <S.Modal>
            <h1>신청정보</h1>
            <hr />
            <S.Content>
              <div>
                <div>
                  <strong>학번</strong>
                  <span>
                    {grade}
                    {group}
                    {`${number}`.padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <strong>이름</strong>
                  <span>{name}</span>
                </div>
                <div>
                  <strong>날짜</strong>
                  <span>{date}</span>
                </div>
                <div>
                  <strong>시간</strong>
                  <span>
                    {startTime} : {endTime}
                  </span>
                </div>
                <div>
                  <strong>장소</strong>
                  <span>{place}</span>
                </div>
                <div>
                  <strong>사유</strong>
                  <span>{reason}</span>
                </div>
              </div>
              <div>
                <S.Button color="#242424">승인</S.Button>
                <S.Button color="#FF5555">거절</S.Button>
              </div>
            </S.Content>
            <S.CloseButton onClick={closeModal} />
          </S.Modal>
        </S.Container>
      )}
    </>
  );
};

export default OutingCardModal;
