import React, { FC, useCallback, memo } from "react";
import * as S from "./styles";
import { useHistory } from "react-router";
import { BoardListItem } from "../../../../../../lib/api/payloads/Board";

const BoardTableItem: FC<BoardListItem> = ({
  announcement_uuid,
  date,
  is_checked,
  number,
  title,
  views,
  writer_name
}) => {
  const history = useHistory();
  const onClick = useCallback(() => {
    history.push(`${history.location.pathname}/${announcement_uuid}`);
  }, []);

  const dateStr = new Date(Number(date)).toLocaleDateString();

  return (
    <S.ItemContainer onClick={onClick}>
      <div>{number}</div>
      <div>
        {is_checked ? "" : <S.New>NEW</S.New>}
        {title}
      </div>
      <div>{dateStr}</div>
      <div>{writer_name}</div>
      <div>{views}</div>
    </S.ItemContainer>
  );
};

export default memo(BoardTableItem);
