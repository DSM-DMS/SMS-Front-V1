import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";
import { NavIconNoticeBlack } from "../../../assets";
import * as S from "../../Admin/Notice/writing/styles";
import { PageHeader } from "../../default";
import EditerJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { writeActionCreater } from "../../../modules/action/write";

const ManagementNoticeWrite: FC = () => {
  const dispatch = useDispatch();
  const editerRef = useRef<EditerJS>();
  const [title, setTitle] = useState<string>("");

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

  const changeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
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

    const writeDataStr: string = JSON.stringify(writeData);
    dispatch(
      writeActionCreater.writeCircleNoticeSaga({ content: writeDataStr, title })
    );
  }, [title]);

  return (
    <S.Container>
      <PageHeader
        imgSrc={NavIconNoticeBlack}
        title="동아리 공지사항"
        type="DETAIL"
      />
      <S.Hr />
      <S.TitleInput placeholder="제목을 입력하세요." onChange={changeTitle} />
      <S.Hr />
      <S.EditerBackground>
        <S.Editer id="editer" />
      </S.EditerBackground>
      <S.Footer>
        <S.Button color="black" borderColor="#DDDDDD" backgroundColor="#FBFBFB">
          취소
        </S.Button>
        <S.Button
          color="white"
          borderColor="#5323B2"
          backgroundColor="#5323B2"
          onClick={saveHandler}
        >
          작성
        </S.Button>
      </S.Footer>
    </S.Container>
  );
};

export default ManagementNoticeWrite;
