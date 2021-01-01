import React, { FC, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import * as S from "./styles";

interface Props {
  page: number;
}

const PagiNation: FC<Props> = ({ page }) => {
  const startPage = Math.floor(page / 5);
  const history = useHistory();

  const { pathname } = history.location;
  const baseUrl = `${pathname}?page=`;

  useEffect(() => {
    if (page <= 0) {
      history.push(`${pathname}`);
    }
  }, [page]);
  return (
    <S.Container>
      <div>
        <S.PageButton to={baseUrl + (page - 1)}>
          <S.MovePage rotate={270} />
        </S.PageButton>
      </div>
      <div>
        {new Array(5).fill(0).map((_, i) => {
          let pageN = startPage * 5 + (i + 1);
          if (pageN <= 0) pageN = 0;
          return (
            <S.PageButton
              key={pageN}
              to={baseUrl + (pageN - 1)}
              className={page + 1 === pageN ? "active" : ""}
            >
              {pageN}
            </S.PageButton>
          );
        })}
      </div>
      <div>
        <S.PageButton to={baseUrl + (page + 1)}>
          <S.MovePage rotate={90} />
        </S.PageButton>
      </div>
    </S.Container>
  );
};

export default PagiNation;
