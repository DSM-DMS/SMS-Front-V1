import React, {
  FC,
  useState,
  useEffect,
  useRef,
  useCallback,
  ChangeEvent
} from "react";
import { NavIconNoticeMint } from "../../../../assets";
import { PageHeader } from "../../../default";
import * as S from "./styles";
import EditerJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import WriteCategory from "../../../default/Category/WriteCategory";
import { BoardWriteFilter } from "../../../../lib/api/payloads/Board";

const AdminNoticeWriting: FC = () => {
  const editerRef = useRef<EditerJS>();
  const [headeText, setHeaderText] = useState<string>();
  const [filterData, setFilterData] = useState<BoardWriteFilter>({});

  useEffect(() => {
    const editer = new EditerJS({
      holder: "editer",
      tools: {
        header: Header,
        list: List
      }
    });
    editerRef.current = editer;
  }, []);

  const changeHeaderText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setHeaderText(e.target.value);
  }, []);

  const writeFilterHandler = useCallback((data: BoardWriteFilter) => {
    setFilterData(data);
  }, []);

  const saveHandler = useCallback(async () => {
    if (!editerRef) return;
    const writeData = await editerRef.current.save();
  }, [filterData]);

  return (
    <S.Container>
      <PageHeader imgSrc={NavIconNoticeMint} title="공지사항" type="DETAIL" />
      <S.Hr />
      <S.TitleInput
        onChange={changeHeaderText}
        value={headeText}
        type="text"
        placeholder="제목을 입력하세요"
      />
      <S.Hr />
      <WriteCategory onChange={writeFilterHandler} />
      <S.EditerBackground>
        <S.Editer id="editer"></S.Editer>
      </S.EditerBackground>
      <S.Footer>
        <S.Button
          color="white"
          borderColor="#23B2AD"
          backgroundColor="#23B2AD"
          onClick={saveHandler}
        >
          작성
        </S.Button>
        <S.Button color="black" borderColor="#DDDDDD" backgroundColor="#FBFBFB">
          취소
        </S.Button>
      </S.Footer>
    </S.Container>
  );
};

export default AdminNoticeWriting;
