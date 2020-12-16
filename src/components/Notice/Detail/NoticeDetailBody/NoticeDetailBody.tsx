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
    const editer = new EditerJS({
      holder: "content",
      tools: {
        header: Header
      },
      data: {
        time: 1608026241908,
        blocks: [
          { type: "header", data: { text: "시간이 됬어 아츄~", level: 1 } },
          { type: "header", data: { text: "시간이 됬어 아츄~", level: 2 } },
          { type: "header", data: { text: "시간이 됬어 아츄~", level: 3 } },
          { type: "header", data: { text: "시간이 됬어 아츄~", level: 4 } },
          { type: "header", data: { text: "시간이 됬어 아츄~", level: 5 } },
          { type: "header", data: { text: "시간이 됬어 아츄~", level: 6 } }
        ],
        version: "2.19.0"
      }
    });
    editerRef.current = editer;
  }, []);

  return (
    <S.Container>
      <S.Hr />
      <S.Content id="content"></S.Content>
    </S.Container>
  );
};

export default NoticeDetailBody;
