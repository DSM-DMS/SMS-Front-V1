import styled from "styled-components";

export const Container = styled.div`
  background-color: #f6f6f6;
  width: 160px;
  padding: 5px;
  display: inline-flex;
  color: #888888;
  position: relative;
  justify-content: space-between;
  align-items: center;

  input[type="date"] {
    position: absolute;
    right: 10px;
    width: 46px;
    border: none;
    background: none;
    height: 100%;
    color: transparent;
  }
`;
