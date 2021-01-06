import React, { ChangeEvent, FC, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { NavIconNoticeMint } from "../../../../assets";
import { stateType } from "../../../../modules/reducer";
import { Board, ListPageHeader } from "../../../default";
import * as S from "./styles";

const AdminNoticeAll: FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const { data, size } = useSelector((state: stateType) => ({
    data: state.notice.list,
    size: state.notice.size
  }));
  const changeKeyword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }, []);

  return (
    <S.Container>
      <ListPageHeader
        imgSrc={NavIconNoticeMint}
        onChange={changeKeyword}
        title="전체 공지사항"
      />
      <Board
        maxSize={size}
        names={["번호", "제목", "날짜", "글쓴이", "조회수"]}
        data={data.filter(
          ({ title, writer_name }) =>
            title.includes(keyword) || writer_name.includes(keyword)
        )}
      />
    </S.Container>
  );
};

export default AdminNoticeAll;
