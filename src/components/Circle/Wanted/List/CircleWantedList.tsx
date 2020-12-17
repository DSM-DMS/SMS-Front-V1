import React, {
  FC,
  useState,
  useCallback,
  ChangeEvent,
  useEffect
} from "react";
import * as S from "./styles";
import { PageHeader, Category } from "../../../../components/default";
import { NavIconCircleBlue } from "../../../../assets";
import { WantedCircleBox } from "../../../../components/default";
import { makeFilterFunc, customSelector } from "../../../../lib/utils";
import { Hr } from "../../../../components/default/Board/styles";
import { useSelector } from "react-redux";
import { stateType } from "../../../../modules/reducer";
import { WantedInfo } from "../../../../modules/type/poster";
import { apiDefault } from "../../../../lib/api/client";

const CircleWanted: FC = () => {
  const data = useSelector((state: stateType) => state.poster.wanted.list);
  const [keyword, setkeyword] = useState<string>("");
  const [circleCount, setCircleCount] = useState<number>(0);
  const filterFunc = makeFilterFunc<WantedInfo>(data, ({}, keyword) => true);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setkeyword(e.target.value);
  }, []);

  useEffect(() => {
    apiDefault()
      .get<{ count: number }>("/clubs/count")
      .then(res => {
        setCircleCount(res.data.count);
      });
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
        count={circleCount}
        placeHolder="검색할 동아리 이름을 입력하세요"
      >
        현재 모집중
      </Category>
      <S.BoxWrap>
        {filterFunc(keyword).map(data => (
          <WantedCircleBox {...data} />
        ))}
      </S.BoxWrap>
    </S.Container>
  );
};

export default CircleWanted;
