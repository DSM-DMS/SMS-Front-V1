import React, { ChangeEvent, FC, useState } from "react";
import { useEffect } from "react";
import { NavIconNoticeBlack } from "../../../assets";
import { PageHeader } from "../../default";
import * as S from "../../Admin/Notice/writing/styles";
import EditerJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import { useRef } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stateType } from "../../../modules/reducer";
import { toast } from "react-toastify";
import { editNoticeSaga } from "../../../modules/action/notice";

interface Props {
  id: string;
}

const ManagementNoticeEdit: FC<Props> = ({ id }) => {
  const {
    content,
    date,
    next_announcement_uuid,
    next_title,
    previous_announcement_uuid,
    previous_title,
    title,
    writer_name,
    loading
  } = useSelector((state: stateType) => state.notice.detail);
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState<string>("");
  const editerRef = useRef<EditerJS>();

  useEffect(() => {
    setNewTitle(title);
  }, [title]);

  useEffect(() => {
    if (!content || loading) return;
    const editer = new EditerJS({
      holder: "editer",
      tools: {
        header: Header,
        list: List
      },
      data: JSON.parse(content)
    });
    editerRef.current = editer;
  }, [content]);

  const changeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  }, []);

  const saveHandler = useCallback(async () => {
    if (!editerRef) return;
    if (!newTitle) {
      toast.dark("제목을 입력하세요");
      return;
    }
    const writeData = await editerRef.current.save();
    if (!writeData.blocks.length) {
      toast.dark("내용을 입력하세요");
      return;
    }
    const writeDataStr = JSON.stringify(writeData);

    dispatch(
      editNoticeSaga({ content: writeDataStr, title: newTitle, uuid: id })
    );
  }, [newTitle]);

  return (
    <S.Container>
      <PageHeader imgSrc={NavIconNoticeBlack} title="공지사항" type="DETAIL" />
      <S.Hr />
      <S.TitleInput
        type="text"
        placeholder="제목을 입력하세요"
        value={newTitle}
        onChange={changeTitle}
      />
      <S.Hr />
      <S.EditerBackground>
        <S.Editer id="editer"></S.Editer>
      </S.EditerBackground>
      <S.Footer>
        <S.Button color="black" borderColor="#DDDDDD" backgroundColor="#FBFBFB">
          취소
        </S.Button>
        <S.Button
          color="white"
          borderColor="#23B2AD"
          backgroundColor="#23B2AD"
          onClick={saveHandler}
        >
          작성
        </S.Button>
      </S.Footer>
    </S.Container>
  );
};

export default ManagementNoticeEdit;
