import React, { FC, useCallback, memo } from "react";
import { BoardObj } from "../../../Board";
import * as S from "./styles";
import { useHistory } from "react-router";
import { BoardListitem } from "../../../../../../modules/type/board";

const BoardTableItem: FC<BoardListitem> = ({
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
