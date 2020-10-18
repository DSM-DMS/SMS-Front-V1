import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 70px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: block;
    font-weight: bold;
  }

  h1 {
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  h2 {
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  h3 {
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  h4 {
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  h5 {
    font-size: 0.83em;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  h6 {
    font-size: 0.67em;
    margin-block-start: 2.33em;
    margin-block-end: 2.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;

export const TitleInput = styled.input`
  color: #888888;
  border: none;
  font-size: 15px;
`;

export const Hr = styled.hr`
  border-top: 1px solid #888888;
  margin: 15px 0;
`;

export const EditerBackground = styled.div`
  background-color: #eef5fa;
  padding: 10px;
  box-sizing: border-box;
`;

export const Editer = styled.div`
  background: white;
  border-radius: 4px;
  box-shadow: 0px 0px 20px 1px rgb(0, 0, 0, 0.2);
  box-sizing: border-box;
  padding: 20px 100px;
  min-height: 500px;
`;

export const Footer = styled.div`
  padding: 5px 10px;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button<{
  color: string;
  backgroundColor: string;
  borderColor: string;
}>`
  &:nth-child(1) {
    margin-right: 10px;
  }
  font-size: 15px;
  border: 1px solid ${(props) => props.borderColor};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  padding: 5px 20px;
`;
