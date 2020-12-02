import React, { FC } from "react";
import { Comment as CommentType } from "../../../../../containers/Circle/Wanted/Detail/CircleWantedDetailContainer";
import * as S from "./styles";
import { DetailContent, Hr, Where, People, Who, Field } from "../../default";
import Comment from "../../../Comment/Comment";
import { customSelector } from "../../../../../lib/utils";

const WantedMain: FC = () => {
  const {
    introduce,
    grade,
    field,
    leader,
    three,
    two,
    one,
    where,
    comments
  } = customSelector((state) => state.poster.wanted.detail);
  return (
    <S.Container>
      <S.P>동아리 소개</S.P>
      <DetailContent>{introduce}</DetailContent>
      <Hr />
      <Who grade={grade} />
      <Hr />
      <Field field={field} />
      <Hr />
      <People leader={leader} three={three} two={two} one={one} />
      <Hr />
      <Where>{where}</Where>
      <Comment comments={comments} />
    </S.Container>
  );
};

export default WantedMain;
