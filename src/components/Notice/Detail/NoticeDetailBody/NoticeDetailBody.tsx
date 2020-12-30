import React, { FC, useCallback, useEffect, useRef } from "react";
import Header from "@editorjs/header";
import EditerJS from "@editorjs/editorjs";
import * as S from "./styles";

interface Props {
  content: string;
}

const NoticeDetailBody: FC<Props> = ({ content }) => {
  const editerRef = useRef<EditerJS>();
  useEffect(() => {
    if (!content) return;
    const editer = new EditerJS({
      holder: "editer",
      tools: {
        header: Header
      },
      data: JSON.parse(content)
    });
    editerRef.current = editer;
  }, [content]);

  return (
    <S.Container>
      <S.Hr />
      <S.Content id="editer"></S.Content>
    </S.Container>
  );
};

export default NoticeDetailBody;
