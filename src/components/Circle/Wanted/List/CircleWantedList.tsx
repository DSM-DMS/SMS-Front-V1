import React, { FC, useState, useCallback, ChangeEvent } from "react";
import * as S from "./styles";
import { PageHeader, Category } from "../../../../components/default";
import { NavIconCircleBlue } from "../../../../assets";
import { WantedCircleBox } from "../../../../components/default";
import { makeFilterFunc, customSelector } from "../../../../lib/utils";
import { WantedCircleBoxData } from "../../../../components/default/CircleBox/WantedCircleBox";
import { Hr } from "../../../../components/default/Board/styles";

const CircleWanted: FC = () => {
  const data = customSelector((state) => state.poster.wanted.list);
  const [keyword, setkeyword] = useState<string>("");
  const filterFunc = makeFilterFunc<WantedCircleBoxData>(
    data,
    ({ name }, keyword) => name.includes(keyword)
  );

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setkeyword(e.target.value);
  }, []);

  return (
    <S.Container>
      <PageHeader
        title="동아리 모집"
        imgSrc={NavIconCircleBlue}
        type="DETAIL"
      />
      <Hr />
      <Category
        onChange={onChange}
        placeHolder="검색할 동아리 이름을 입력하세요"
      />
      <S.BoxWrap>
        {filterFunc(keyword).map(
          ({ name, field, description, job, where, grade, date, imgSrc }) => (
            <WantedCircleBox
              field={field}
              name={name}
              description={description}
              job={job}
              where={where}
              grade={grade}
              date={date}
              imgSrc={imgSrc}
            />
          )
        )}
      </S.BoxWrap>
    </S.Container>
  );
};

export default CircleWanted;
