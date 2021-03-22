import React, {
  ChangeEvent,
  FC,
  MouseEvent,
  useEffect,
  useMemo,
  useRef,
  useCallback,
  useState
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBtn } from "../../../../../../assets";
import { ReqAddRecruitment } from "../../../../../../lib/api/payloads/Club";
import { managementActionCreater } from "../../../../../../modules/action/management";
import { getNoticeClubList } from "../../../../../../modules/action/notice/list";
import { stateType } from "../../../../../../modules/reducer";
import { WantedObj } from "../../../../../../modules/type/poster";
import * as S from "../../../../../../styles/CircleWantedDetail";
import CircleWantedInputHeader from "../../../../../default/Input/CircleWanted/Header/CircleWantedInputHeader";
import CircleWantedInputItem from "../../../../../default/Input/CircleWanted/Item/CircleWantedItem";
import DateInput from "../../../../../default/Input/Date/DateInput";
import LabelCheckBox from "../../../../../default/Input/LabelCheckBox/LabelCheckBox";

export interface WantedManagement extends WantedObj {
  id: number;
  menuIsOpen: boolean;
}

const ManagementWantedContentLeft: FC = () => {
  const [wantedData, setWantedData] = useState<WantedManagement[]>([]);
  const [recruitmentData, setRecruitmentData] = useState<ReqAddRecruitment>({
    club_uuid: "",
    end_period: "",
    members: [],
    recruit_concept: ""
  });
  const dispatch = useDispatch();
  const initialData = useSelector((store: stateType) => store.management);
  const idLen = useRef<number>(0);

  useEffect(() => {
    if (!initialData.club_uuid) return;
    dispatch(getNoticeClubList(0));
    const {
      club_uuid,
      end_period,
      recruit_concept,
      recruit_members
    } = initialData;
    setRecruitmentData({
      club_uuid,
      end_period,
      recruit_concept,
      members: recruit_members
    });

    const membersManagement: WantedManagement[] = initialData.recruit_members.map(
      (data, i) => ({ ...data, menuIsOpen: false, id: i })
    );

    idLen.current = membersManagement.length;
    setWantedData(membersManagement);
  }, [initialData.club_uuid]);

  useEffect(() => {
    const { club_uuid, recruit_concept, end_period } = recruitmentData;
    const wantedArr: WantedObj[] = wantedData.map(
      ({ field, grade, number }) => ({
        field,
        grade,
        number
      })
    );

    dispatch(
      managementActionCreater.setManagementWantedInfo({
        club_uuid,
        recruit_concept,
        end_period,
        members: wantedArr
      })
    );
  }, [recruitmentData, wantedData]);

  const changeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRecruitmentData(prev => ({ ...prev, [name]: value }));
  }, []);
  const addList = useCallback(() => {
    setWantedData(prev =>
      prev.concat({
        field: "분야",
        grade: 1,
        number: 1,
        id: idLen.current++,
        menuIsOpen: false
      })
    );
  }, []);

  const changeMenuIsOpen = useCallback((id: number) => {
    setWantedData(prev =>
      prev.map(data =>
        data.id === id ? { ...data, menuIsOpen: !data.menuIsOpen } : data
      )
    );
  }, []);

  const changeGrade = useCallback((id: number, grade: number) => {
    setWantedData(prev =>
      prev.map(data => (data.id === id ? { ...data, grade } : data))
    );
  }, []);

  const changeNumber = useCallback((id: number, number: number) => {
    if (number < 1 || number > 10) {
      return;
    }
    setWantedData(prev =>
      prev.map(data => (data.id === id ? { ...data, number } : data))
    );
  }, []);

  const changeField = useCallback((id: number, field: string) => {
    if (field.length > 20) {
      return;
    }
    setWantedData(prev =>
      prev.map(data => (data.id === id ? { ...data, field } : data))
    );
  }, []);

  const deleteData = useCallback((id: number) => {
    setWantedData(prev => prev.filter(data => data.id !== id));
  }, []);

  const dateChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setRecruitmentData(prev => ({ ...prev, end_period: value }));
  }, []);

  const changeWantedAlways = useCallback((e: MouseEvent<HTMLDivElement>) => {
    setRecruitmentData(prev => ({ ...prev, end_period: "" }));
  }, []);

  const isEdit: boolean = useMemo(() => !!initialData.recruit_concept, [
    initialData.recruit_concept
  ]);

  return (
    <S.ContentLeftWrap>
      <S.MarginHeight height="15">
        <S.H2>동아리 소개</S.H2>
      </S.MarginHeight>
      <S.MarginHeight height="15">
        <S.IntroduceText>{initialData.introduction}</S.IntroduceText>
      </S.MarginHeight>
      <S.MarginHeight height="15">
        <S.MarginHeight height="5">
          <S.GrayTile>&gt; 모집 소개</S.GrayTile>
          <S.GrayInput
            type="text"
            placeholder="해당 모집에 대해 간략히 적어주세요"
            width="40%"
            name="recruit_concept"
            onChange={changeInput}
            value={recruitmentData.recruit_concept}
          />
        </S.MarginHeight>

        {isEdit || (
          <S.MarginHeight height="5">
            <S.GrayTile>&gt; 모집 기간</S.GrayTile>
            <S.MarginHeight height="5">
              <S.Bold>날짜</S.Bold>
              <LabelCheckBox
                htmlFor="wantedAlways"
                color="#888888"
                clickHandler={changeWantedAlways}
                active={!!!recruitmentData.end_period}
              >
                상시 모집
              </LabelCheckBox>
              <S.DateWrap>
                <DateInput changeHandler={dateChangeHandler} name="end_period">
                  {recruitmentData.end_period || "종료 날짜"}
                </DateInput>
              </S.DateWrap>
            </S.MarginHeight>
          </S.MarginHeight>
        )}
        <S.MarginHeight height="5">
          <S.GrayTile>&gt; 모집 대상</S.GrayTile>
          <S.InputWrap>
            <CircleWantedInputHeader />
            {wantedData.map(data => {
              return (
                <CircleWantedInputItem
                  {...data}
                  key={data.id}
                  changeField={changeField}
                  changeGrade={changeGrade}
                  changeMenuIsOpen={changeMenuIsOpen}
                  changeNumber={changeNumber}
                  deleteData={deleteData}
                />
              );
            })}
            <S.AddBtn onClick={addList}>
              <img src={addBtn} />
            </S.AddBtn>
          </S.InputWrap>
        </S.MarginHeight>
      </S.MarginHeight>
    </S.ContentLeftWrap>
  );
};

export default ManagementWantedContentLeft;
