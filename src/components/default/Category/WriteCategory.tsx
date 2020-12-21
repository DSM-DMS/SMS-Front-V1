import React, {
  FC,
  useCallback,
  useEffect,
  useState,
  ChangeEvent
} from "react";
import { BoardWriteFilter } from "../../../lib/api/payloads/Board";
import * as S from "./styles";

interface Props {
  onChange: (data: BoardWriteFilter) => void;
}

export interface BoardWriteFilterSate {
  grade: [number, number, number];
  group: [number, number, number, number];
}

const WriteCategory: FC<Props> = ({ onChange }) => {
  const [filterData, setFilterData] = useState<BoardWriteFilterSate>({
    grade: [0, 0, 0],
    group: [0, 0, 0, 0]
  });

  useEffect(() => {
    const grade: number = Number(
      filterData.grade.reduce(
        (state, value) => (value ? state + `${value}` : state),
        ""
      )
    );

    const group: number = Number(
      filterData.group.reduce(
        (state, value) => (value ? state + `${value}` : state),
        ""
      )
    );
    onChange({ target_group: group, target_grade: grade });
  }, [filterData]);

  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value: targetI, checked } = e.target;
    if (!checked) {
      setFilterData(prev => ({
        ...prev,
        [name]: prev[name].map((value, i) =>
          i + 1 === Number(targetI) ? 0 : value
        )
      }));
      return;
    }
    setFilterData(prev => ({
      ...prev,
      [name]: prev[name].map((value, i) =>
        i + 1 === Number(targetI) ? i + 1 : value
      )
    }));
  }, []);

  return (
    <S.WriteCatrgoty>
      <span>학년</span>
      <div>
        <label>
          <input
            onChange={changeHandler}
            name="grade"
            value="1"
            type="checkbox"
          />
          <span>1학년</span>
        </label>
        <label>
          <input
            onChange={changeHandler}
            name="grade"
            value="2"
            type="checkbox"
          />
          <span>2학년</span>
        </label>
        <label>
          <input
            onChange={changeHandler}
            name="grade"
            value="3"
            type="checkbox"
          />
          <span>3학년</span>
        </label>
      </div>
      <S.Hr />
      <span>반</span>
      <div>
        <label>
          <input
            onChange={changeHandler}
            name="group"
            value="1"
            type="checkbox"
          />
          <span>1반</span>
        </label>
        <label>
          <input
            onChange={changeHandler}
            name="group"
            value="2"
            type="checkbox"
          />
          <span>2반</span>
        </label>
        <label>
          <input
            onChange={changeHandler}
            name="group"
            value="3"
            type="checkbox"
          />
          <span>3반</span>
        </label>
        <label>
          <input
            onChange={changeHandler}
            name="group"
            value="4"
            type="checkbox"
          />
          <span>4반</span>
        </label>
      </div>
    </S.WriteCatrgoty>
  );
};

export default WriteCategory;
