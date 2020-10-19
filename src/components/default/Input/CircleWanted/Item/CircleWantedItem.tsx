import React, { FC, MouseEvent } from "react";
import { useEffect } from "react";
import { memo } from "react";
import { useState } from "react";
import { useCallback } from "react";
import * as S from "../styles";

interface Props {
  name: string;
  onChange: (data: any) => void;
}
interface WantedInputState {
  grade: string | null;
  description: string | null;
  number: string | null;
}

const CircleWantedInputItem: FC<Props> = ({ name, onChange }) => {
  const [data, setData] = useState<WantedInputState>({
    grade: null,
    description: null,
    number: null
  });
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const changeMenuIsOpen = useCallback(e => {
    setMenuIsOpen(prev => !prev);
  }, []);

  const changeHandler = useCallback(e => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  }, []);

  const clickMenu = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const { value } = (e.target as HTMLElement).dataset;
    setData(prev => ({
      ...prev,
      grade: value
    }));
  }, []);

  useEffect(() => {
    onChange({ name, data });
  }, [data]);
  return (
    <S.ItemContainer>
      <S.SelectWrap onClick={changeMenuIsOpen}>
        <div>
          <span>{data.grade || "0"}</span>
          <S.Triangle />
        </div>
        {menuIsOpen && (
          <S.SelectMenu>
            <div>전체</div>
            <div data-value="1" onClick={clickMenu}>
              1
            </div>
            <div data-value="2" onClick={clickMenu}>
              2
            </div>
            <div data-value="3" onClick={clickMenu}>
              3
            </div>
          </S.SelectMenu>
        )}
      </S.SelectWrap>
      <div>
        <input onChange={changeHandler} type="text" name="description" />
      </div>
      <div>
        <input onChange={changeHandler} type="number" name="number" />
      </div>
    </S.ItemContainer>
  );
};

export default memo(CircleWantedInputItem);
