import React, { FC, useCallback, useState } from "react";
import * as S from "./styles";

const OutingCardFilter: FC = () => {
  const [settingIsOpen, setSetiingIsOpen] = useState<boolean>(false);
  const [typeIsFloor, setTypeIsFloor] = useState<boolean>(false);

  const changeSetiingIsOpen = useCallback(() => {
    setSetiingIsOpen(prev => !prev);
  }, []);

  const changeTypeisFloor = useCallback(() => {
    setTypeIsFloor(prev => !prev);
  }, []);

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
                    <span>방과후</span>
                    <select>
                      <option value="1">자습</option>
                      <option value="2">자습</option>
                      <option value="3">자습</option>
                    </select>
                  </S.SelectWrap>
                  <S.SelectWrap>
                    <span>층</span>
                    <select>
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
                    <select>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </S.SelectWrap>
                  <S.SelectWrap>
                    <span>반</span>
                    <select>
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
        <S.ResetBtn>초기화</S.ResetBtn>
      </S.Container>
    </>
  );
};

export default OutingCardFilter;
