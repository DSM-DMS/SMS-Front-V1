import React, { FC } from 'react';
import { useEffect } from 'react';
import { NavIconNoticeMint } from '../../../../assets';
import { PageHeader } from '../../../default';
import * as S from './styles';
import EditerJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import { useRef } from 'react';
import { useCallback } from 'react';

const AdminNoticeWriting: FC = () => {
  const editerRef = useRef<EditerJS>();
  useEffect(() => {
    const editer = new EditerJS({
      holder: 'editer',
      tools: {
        header: Header,
        list: List,
      },
    });
    editerRef.current = editer;
  }, []);

  const saveHandler = useCallback(async () => {
    if (!editerRef) return;
    console.log(await editerRef.current.save());
  }, []);

  return (
    <S.Container>
      <PageHeader imgSrc={NavIconNoticeMint} title="공지사항" type="DETAIL" />
      <S.Hr />
      <S.TitleInput type="text" placeholder="제목을 입력하세요" />
      <S.Hr />
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
          첨부파일
        </S.Button>
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

export default AdminNoticeWriting;
