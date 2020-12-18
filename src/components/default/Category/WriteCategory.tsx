import React, { ChangeEvent, FC, useCallback, useState } from "react";
import { BoardWriteFilter } from "../../../lib/api/payloads/Board";
import * as S from "./styles";

interface MakeWriteFilter {
  name: string;
  keyName: string;
  values: {
    key: string;
    value: number;
  }[];
}

const filterDatas: MakeWriteFilter[] = [
  {
    name: "학년",
    keyName: "target_grade",
    values: [
      {
        key: "1학년",
        value: 1
      },
      {
        key: "2학년",
        value: 2
      },
      {
        key: "3학년",
        value: 3
      }
    ]
  },
  {
    name: "반",
    keyName: "target_group",
    values: [
      {
        key: "1반",
        value: 1
      },
      {
        key: "2반",
        value: 2
      },
      {
        key: "3반",
        value: 3
      },
      {
        key: "4반",
        value: 4
      }
    ]
  }
];

interface Props {
  onChange: (data: BoardWriteFilter) => void;
}

const WriteCategory: FC<Props> = ({ onChange }) => {
  const [filterData, setFilterData] = useState<BoardWriteFilter>({});
  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFilterData(prev => {
      const newState: BoardWriteFilter = {
        ...prev,
        [name]: !checked ? 0 : value
      };
      onChange(newState);
      return newState;
    });
  }, []);

  return (
    <S.WriteCatrgoty>
      {filterDatas.map(({ name, values, keyName }, i) => {
        return (
          <>
            <span>{name}</span>
            {values.map(({ value, key }) => (
              <div>
                <label>
                  <input
                    name={keyName}
                    value={value}
                    onChange={changeHandler}
                    checked={filterData[keyName] === value}
                    type="checkbox"
                  />
                  <span>{key}</span>
                </label>
              </div>
            ))}
            {filterDatas[i + 1] && <S.Hr />}
          </>
        );
      })}
    </S.WriteCatrgoty>
  );
};

export default WriteCategory;
