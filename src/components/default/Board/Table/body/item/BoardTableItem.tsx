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
    history.push(`./${announcement_uuid}`);
  }, []);

  return (
    <S.ItemContainer onClick={onClick}>
      <div>{number}</div>
      <div>{title}</div>
      <div>{date}</div>
      <div>{writer_name}</div>
      <div>{views}</div>
    </S.ItemContainer>
  );
};

export default memo(BoardTableItem);
