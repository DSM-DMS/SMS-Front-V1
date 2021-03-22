import React, {
  FC,
  ChangeEvent,
  memo,
  useState,
  useCallback,
  useEffect
} from "react";
import { getClubFilter } from "../../../lib/api/club";
import { SearchInput } from "../../default";
import * as S from "./styles";

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  filterHandler: (field: string) => void;
  placeHolder: string;
  count: number;
  children: string;
  field: string;
}

const Category: FC<Props> = ({
  children,
  filterHandler,
  onChange,
  placeHolder,
  count,
  field
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [fields, setFields] = useState<string[]>([]);
  useEffect(() => {
    getClubFilter().then(res => {
      setFields(res.data.fields);
    });
  }, []);
  const changeMenuIsOpen = useCallback(() => {
    setMenuIsOpen(prev => !prev);
  }, []);

  return (
    <S.CategoryWrap>
      <S.Category>
        <S.FieldWrap onClick={changeMenuIsOpen}>
          <S.Triangle />
          <span>{field || "전체"}</span>
          <S.Fields isOpen={menuIsOpen}>
            <S.Field onClick={() => filterHandler("")}>전체</S.Field>
            {fields.map((field: string) => (
              <S.Field key={field} onClick={() => filterHandler(field)}>
                {field}
              </S.Field>
            ))}
          </S.Fields>
        </S.FieldWrap>
        <div>
          {children}
          <S.Count>{count}</S.Count>
        </div>
      </S.Category>
      <SearchInput onChange={onChange} placeHolder={placeHolder} />
    </S.CategoryWrap>
  );
};

export default memo(Category);
