import React, { FC, useState, useCallback, ChangeEvent } from 'react';
import * as S from './styles';

interface Props {
  option: {
    border: boolean;
    height: number;
    placeholder: string;
  };
}

const CommentWrite: FC<Props> = ({ option }) => {
  const [content, setContent] = useState<string>('');
  const changeContent = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }, []);

  return (
    <S.Container>
      <S.TextArea
        height={option.height}
        onChange={changeContent}
        value={content}
        border={option.border}
        placeholder={option.placeholder}
      />
      <S.SubmitButton>확인</S.SubmitButton>
    </S.Container>
  );
};

export default CommentWrite;
