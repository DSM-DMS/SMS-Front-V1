import React, { FC, useState, useCallback, ChangeEvent, memo } from "react";
import * as S from "../Wanted/List/styles";
import { PageHeader, Category, AllCircleBox } from "../../default";
import { NavIconAllBlue } from "../../../assets";
import { Hr } from "../../../components/default/Board/styles";
import { makeFilterFunc } from "../../../lib/api";
import { useSelector } from "react-redux";
import { stateType } from "../../../modules/reducer";
import { CircleInfo } from "../../../modules/type/poster";

const CircleAll: FC = () => {
  const data = useSelector((store: stateType) => store.poster.all.list);
  const [keyword, setkeyword] = useState<string>("");
  const filterFunc = makeFilterFunc<CircleInfo>(data, ({ name }, keyword) =>
    name.includes(keyword)
  );
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setkeyword(e.target.value);
  }, []);

  return (
    <S.Container>
      <PageHeader
        title="동아리 전체보기"
        imgSrc={NavIconAllBlue}
        type="DETAIL"
      />
      <Hr />
      <Category
        onChange={onChange}
        placeHolder="검색할 동아리 이름을 입력하세요"
      />
      <S.BoxWrap>
        {filterFunc(keyword).map(data => (
          <AllCircleBox key={data.club_uuid} {...data} />
        ))}
      </S.BoxWrap>
    </S.Container>
  );
};

export default memo(CircleAll);
