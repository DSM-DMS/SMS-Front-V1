import React, { FC, useState, useCallback, ChangeEvent } from "react";
import * as S from "./styles";
import { PageHeader, Category } from "../../../../components/default";
import { NavIconCircleBlue } from "../../../../assets";
import { WantedCircleBox } from "../../../../components/default";
import { makeFilterFunc, customSelector } from "../../../../lib/api";
import { Hr } from "../../../../components/default/Board/styles";
import { useSelector } from "react-redux";
import { stateType } from "../../../../modules/reducer";
import { WantedInfo } from "../../../../modules/type/poster";

const CircleWanted: FC = () => {
  const data = useSelector((state: stateType) => state.poster.wanted.list);
  const [keyword, setkeyword] = useState<string>("");
  const filterFunc = makeFilterFunc<WantedInfo>(data, ({}, keyword) => true);

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
        {filterFunc(keyword).map(data => (
          <WantedCircleBox {...data} />
        ))}
      </S.BoxWrap>
    </S.Container>
  );
};

export default CircleWanted;
