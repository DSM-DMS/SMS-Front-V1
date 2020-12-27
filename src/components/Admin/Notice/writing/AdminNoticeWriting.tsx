import React, {
  FC,
  useState,
  useEffect,
  useRef,
  useCallback,
  ChangeEvent
} from "react";
import { toast, ToastContainer } from "react-toastify";
import { NavIconNoticeMint } from "../../../../assets";
import { PageHeader } from "../../../default";
import * as S from "./styles";
import EditerJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import WriteCategory, {
  BoardWriteFilterSate
} from "../../../default/Category/WriteCategory";
import { BoardWriteFilter } from "../../../../lib/api/payloads/Board";
import { useDispatch } from "react-redux";
import { writeActionCreater } from "../../../../modules/action/write";
import { isIncludeEmpty } from "../../../../lib/utils";

const AdminNoticeWriting: FC = () => {
  const dispatch = useDispatch();
  const editerRef = useRef<EditerJS>();
  const [title, setTitle] = useState<string>("");
  const [filterData, setFilterData] = useState<BoardWriteFilter>({
    target_grade: 0,
    target_group: 0
  });

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
    setTitle(e.target.value);
  }, []);

  const writeFilterHandler = useCallback((data: BoardWriteFilter) => {
    setFilterData(data);
  }, []);

  const saveHandler = useCallback(async () => {
    if (!editerRef) return;
    if (!title) {
      toast.dark("제목을 입력하세요");
      return;
    }
    const writeData = await editerRef.current.save();
    if (!writeData.blocks.length) {
      toast.dark("내용을 입력하세요");
      return;
    }

    if (isIncludeEmpty(filterData)) {
      toast.dark("필터를 적용해 주세요");
      return;
    }

    const writeDataStr: string = JSON.stringify(writeData);
    dispatch(
      writeActionCreater.writeNoticeSaga({
        content: writeDataStr,
        title,
        ...filterData
      })
    );
  }, [title, filterData]);

  return (
    <S.Container>
      <ToastContainer autoClose={2000} />
      <PageHeader imgSrc={NavIconNoticeMint} title="공지사항" type="DETAIL" />
      <S.Hr />
      <S.TitleInput
        onChange={changeHeaderText}
        value={title}
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
