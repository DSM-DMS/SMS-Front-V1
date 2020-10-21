import React, {
  ChangeEvent,
  FC,
  ReactElement,
  useCallback,
  useRef,
  useState
} from "react";

import * as S from "./style";

import { Search } from "../../../assets";

interface Props {
  handleCloseModal: () => void;
}

const initUsers: string[] = [
  "1101 홍길동1",
  "1102 홍길동2",
  "1103 홍길동3",
  "1104 홍길동4",
  "1105 홍길동5",
  "1106 홍길동6",
  "1107 홍길동7",
  "1108 홍길동8"
];

const MemberAddModal: FC<Props> = ({ handleCloseModal }): ReactElement => {
  const scrollWrap = useRef<HTMLUListElement>(null);
  const [searchQueue, setSearchQueue] = useState<string[]>([]);
  const [addQueue, setAddResult] = useState<string[]>([]);

  const addMembers = async () => {
    // const url = "http://www.naver.com";
    // const data = {};
    // const config = {};
    // await axios.post(url, data, config);
    handleCloseModal();
  };

  const handleChangeFindUser = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === "") {
      setSearchQueue([]);
      return;
    }

    setSearchQueue(initUsers.filter(user => user.match(value)));
  };

  const handleClickAddQueue = useCallback((user: string) => {
    setSearchQueue(prev => prev.filter(u => u !== user));
    setAddResult(prev => [...prev, user]);
  }, []);

  const handleClickRemoveQueue = useCallback((user: string) => {
    setAddResult(prev => prev.filter(u => u !== user));
    setSearchQueue(prev => [...prev, user]);
  }, []);

  return (
    <S.Modal>
      <S.ModalBack onClick={handleCloseModal} />
      <S.ModalForm>
        <S.ModalFormInner>
          <div>
            <S.SearchingWrap>
              <p>학생 검색</p>
              <S.SearchLabel>
                <img src={Search} alt="search" title="search" />
                <S.SearchText
                  onChange={handleChangeFindUser}
                  type="text"
                  placeholder="학번 또는 이름으로 검색하세요."
                />
              </S.SearchLabel>
              <S.Result ref={scrollWrap}>
                {searchQueue
                  .sort((a, b) => (a > b ? 1 : -1))
                  .map((r, i) => (
                    <S.ResultItem
                      key={`${i}_${r}`}
                      onClick={() => handleClickAddQueue(r)}
                    >
                      <span>{i + 1}</span>
                      <span>{r}</span>
                    </S.ResultItem>
                  ))}
              </S.Result>
            </S.SearchingWrap>
          </div>
          <S.Queue>
            <p>추가 됨</p>
            {addQueue
              .sort((a, b) => (a > b ? 1 : -1))
              .map((q, i) => (
                <li key={i} onClick={() => handleClickRemoveQueue(q)}>
                  {q}
                </li>
              ))}
          </S.Queue>
        </S.ModalFormInner>
        <S.ModalButtonWrap>
          <S.ModalCancel onClick={handleCloseModal}>취소</S.ModalCancel>
          <S.ModalAdd onClick={addMembers}>추가</S.ModalAdd>
        </S.ModalButtonWrap>
      </S.ModalForm>
    </S.Modal>
  );
};

export default MemberAddModal;
