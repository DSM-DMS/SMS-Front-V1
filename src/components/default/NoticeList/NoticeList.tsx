import React, {
  FC,
  useState,
  useCallback,
  KeyboardEvent,
  ChangeEvent
} from "react";
import { Board, ListPageHeader } from "../../default";
import * as S from "./styles";
import { BoardListItem } from "../../../lib/api/payloads/Board";
import { Spinner } from "../../../assets";
import { useHistory } from "react-router-dom";

export interface NoticeListSet {
  title: string;
  imgSrc: string;
  size: number;
  names: string[];
  newButton?: boolean;
}

interface Props {
  notices: BoardListItem[];
  setting: NoticeListSet;
  loading: boolean;
}

const NoticeList: FC<Props> = ({ notices, setting, loading }) => {
  const history = useHistory();
  const [keyword, setKeyword] = useState("");

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }, []);
  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        const path: string = history.location.pathname;
        history.push(`${path}?search=${keyword}`);
      }
    },
    [keyword]
  );

  return (
    <S.Container>
      <ListPageHeader
        newButton={setting.newButton}
        onKeyDown={onKeyDown}
        onChange={onChange}
        title={setting.title}
        imgSrc={setting.imgSrc}
      />
      {loading ? (
        <S.LoadingWrap>
          <img alt="로딩 아이콘" src={Spinner} />
        </S.LoadingWrap>
      ) : (
        <Board maxSize={setting.size} names={setting.names} data={notices} />
      )}
    </S.Container>
  );
};

export default NoticeList;
