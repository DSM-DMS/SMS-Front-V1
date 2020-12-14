import React, {
  FC,
  useState,
  useCallback,
  ChangeEvent,
  useEffect
} from "react";
import { NavIconNoticeBlue } from "../../../assets";
import { Board, ListPageHeader } from "../../default";
import * as S from "./styles";
import { makeFilterFunc } from "../../../lib/utils";
import { BoardObj } from "../../default/Board/Board";
import { useDispatch, useSelector } from "react-redux";
import { stateType } from "../../../modules/reducer";
import { BoardListitem } from "../../../modules/type/board";
import { getNoticeListSaga } from "../../../modules/action/notice";

const names = ["번호", "제목", "날짜", "조회수"];

const NoticeContainer: FC = () => {
  const dispatch = useDispatch();
  const [index, setIndex] = useState<number>(0);
  const data = useSelector((state: stateType) => state.notice.list);
  const noticeFilterFunc = makeFilterFunc<BoardListitem>(
    data,
    ({ title }, keyword) => title.includes(keyword)
  );
  const [keyword, setKeyword] = useState("");
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }, []);

  useEffect(() => {
    dispatch(getNoticeListSaga(index));
  }, []);

  return (
    <S.Container>
      <ListPageHeader
        onChange={onChange}
        title="공지사항"
        imgSrc={NavIconNoticeBlue}
      />
      <Board names={names} data={noticeFilterFunc(keyword)} />
    </S.Container>
  );
};

export default NoticeContainer;
