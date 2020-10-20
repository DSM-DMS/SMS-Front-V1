import React, { FC, ReactElement, useState } from "react";
import axios from "axios";

import * as S from "./style";

import { Search } from "../../../assets";

interface Props {
  handleCloseModal: () => void;
}

const users: string[] = [
  "1101 홍길동",
  "1102 홍길동",
  "1103 홍길동",
  "1104 홍길동",
  "1105 홍길동",
  "1106 홍길동",
  "1107 홍길동",
  "1108 홍길동"
];

const MemberAddModal: FC<Props> = ({ handleCloseModal }): ReactElement => {
  const [queue, setQueue] = useState<string[]>([]);

  const addMembers = async () => {
    // const url = "http://www.naver.com";
    // const data = {};
    // const config = {};
    // await axios.post(url, data, config);
    handleCloseModal();
  };

  React.useEffect(() => {
    setQueue(["2115 이성진", "2115 이성진"]);
  }, []);

  return (
    <S.Modal>
      <div className="back" onClick={handleCloseModal} />
      <div className="form">
        <p>학생 검색</p>
        <label>
          <img src={Search} alt="search" title="search" />
          <input type="text" placeholder="이름으로 검색하세요." />
        </label>
        <div className="queue">
          {queue.map((q, i) => (
            <div key={i}>{q}</div>
          ))}
        </div>
        <div>
          <button onClick={handleCloseModal}>취소</button>
          <button onClick={addMembers}>추가</button>
        </div>
      </div>
    </S.Modal>
  );
};

export default MemberAddModal;
