import React, {
  FC,
  useState,
  useCallback,
  ChangeEvent,
  memo,
  useEffect
} from "react";
import * as S from "../Wanted/List/styles";
import { PageHeader, Category, AllCircleBox } from "../../default";
import { NavIconAllBlue } from "../../../assets";
import { Hr } from "../../../components/default/Board/styles";
import { makeFilterFunc } from "../../../lib/utils";
import { useSelector } from "react-redux";
import { stateType } from "../../../modules/reducer";
import { CircleInfo } from "../../../modules/type/poster";
import { apiDefault } from "../../../lib/api/client";

const CircleAll: FC = () => {
  const data = useSelector((store: stateType) => store.poster.all.list);
  const [circleCount, setCircleCount] = useState<number>(0);
  const [keyword, setkeyword] = useState<string>("");
  const filterFunc = makeFilterFunc<CircleInfo>(data, ({ name }, keyword) =>
    name.includes(keyword)
  );
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setkeyword(e.target.value);
  }, []);

  useEffect(() => {
    apiDefault()
      .get<{ count: number }>("/recruitments/count")
      .then(res => {
        setCircleCount(res.data.count);
      });
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
        count={circleCount}
        onChange={onChange}
        placeHolder="검색할 동아리 이름을 입력하세요"
      >
        동아리 수
      </Category>
      <S.BoxWrap>
        {filterFunc(keyword).map(data => (
          <AllCircleBox key={data.club_uuid} {...data} />
        ))}
      </S.BoxWrap>
    </S.Container>
  );
};

export default memo(CircleAll);
