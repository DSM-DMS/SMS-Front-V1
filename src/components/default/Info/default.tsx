import React, { FC } from "react";
import { WantedObj } from "../../../modules/type/poster";
import { Color } from "./Body/styles";

export const DetailContent: FC = ({ children }) => {
  return (
    <div>
      <Color>{children}</Color>
      <br />
    </div>
  );
};

export const RightContent: FC = ({ children }) => {
  return (
    <div>
      <br />
      {children}
    </div>
  );
};

export const Hr: FC = ({ children }) => {
  return (
    <Color>
      --------------------------------------------------------------------
    </Color>
  );
};

export const Standard: FC<{ title: string }> = ({ title, children }) => {
  return (
    <DetailContent>
      <div>
        <b>&gt; {title}</b>
      </div>
      {children}
    </DetailContent>
  );
};

export const People: FC<{
  leader: string;
  three?: string[];
  two?: string[];
  one?: string[];
}> = ({ leader, three, two, one }) => {
  return (
    <Standard title="인원">
      <p>- 부장 {leader}</p>
      {three && <p>- 3학년 {three.join(", ")}</p>}
      {two && <p>- 2학년 {two.join(", ")}</p>}
      {one && <p>- 1학년 {one.join(", ")}</p>}
    </Standard>
  );
};

export const Where: FC<{}> = ({ children }) => {
  return <Standard title="동아리실">-{children}</Standard>;
};

export const Who: FC<{ data: WantedObj[] }> = ({ data }) => {
  return (
    <Standard title="모집대상">
      {data.map(({ field, grade, number }, i) => (
        <div key={i}>
          {grade}학년 {field}분야 {number}명
        </div>
      ))}
    </Standard>
  );
};
