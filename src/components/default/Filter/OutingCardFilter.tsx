import React, { ChangeEvent, FC, useCallback, useState } from "react";
import { OutingCardFilter } from "../../../lib/api/payloads/OutingCard";
import * as S from "./styles";

interface Props {
  onChange: (data: OutingCardFilter) => void;
}

const OutingCardFilter: FC<Props> = ({ onChange }) => {
  const [settingIsOpen, setSetiingIsOpen] = useState<boolean>(false);
  const [typeIsFloor, setTypeIsFloor] = useState<boolean>(false);
  const [filterData, setFilterData] = useState<OutingCardFilter>({});

  const changeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilterData(prev => {
      const newState = { ...prev, [name]: Number(value) };
      onChange(newState);
      return newState;
    });
  }, []);

  const changeSetiingIsOpen = useCallback(() => {
    setSetiingIsOpen(prev => !prev);
  }, []);

  const changeTypeisFloor = useCallback(() => {
    setTypeIsFloor(prev => !prev);
  }, []);

  const resetFilter = useCallback(() => {
    onChange({});
    setFilterData({});
  }, []);

  const { floor, grade, group } = filterData;

  return (
    <>
      <S.Container>
        <S.FilterBasic>
          <S.FilterWrap onClick={changeSetiingIsOpen}>
            <S.Triangle />
            <div>필터링</div>
          </S.FilterWrap>
          {settingIsOpen && (
            <S.HiddenWrap>
              <div onClick={changeTypeisFloor}>
                <S.SettingType active={typeIsFloor}>층</S.SettingType>
                <S.SettingType active={!typeIsFloor}>학번</S.SettingType>
              </div>
              {typeIsFloor ? (
                <>
                  <S.SelectWrap>
                    <span>층</span>
                    <select
                      name="floor"
                      value={floor || 1}
                      onChange={changeHandler}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="4">5</option>
                    </select>
                  </S.SelectWrap>
                </>
              ) : (
                <>
                  <S.SelectWrap>
                    <span>학년</span>
                    <select
                      name="grade"
                      value={grade || 1}
                      onChange={changeHandler}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </S.SelectWrap>
                  <S.SelectWrap>
                    <span>반</span>
                    <select
                      name="group"
                      value={group || 1}
                      onChange={changeHandler}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </S.SelectWrap>
                </>
              )}
            </S.HiddenWrap>
          )}
        </S.FilterBasic>
        <S.ResetBtn onClick={resetFilter}>초기화</S.ResetBtn>
      </S.Container>
    </>
  );
};

export default OutingCardFilter;
