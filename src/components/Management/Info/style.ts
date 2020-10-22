import styled from "styled-components";

interface Track {
  height: number;
}

const BASE_BACK_COLOR = "#f1f1f1";

export const ManagementInfoWrap = styled.div`
  padding: 20px;
`;

export const TopLine = styled.div`
  border-top: 1px solid #f7f6ff;
`;

export const Center = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 80%;
  margin: 20px auto;
  > div {
    width: 45%;
  }
`;

const CommonItemStyle = `
  width: 100%;
  margin: 4px 0;
  padding: 8px;
  border: 0;
  border-radius: 4px;
  background-color: ${BASE_BACK_COLOR};
  box-sizing: border-box;
`;

export const CenterLeft = styled.div``;

const ClubCommonStyle = styled.div`
  margin: 16px 0;
  > p {
    color: #242424;
    font-weight: bold;
  }
`;

export const InputCommonStyle = styled.input`
  ${CommonItemStyle}
  &::placeholder {
    color: #888888;
    font-size: 16px;
  }
`;

export const TextareaCommonStyle = styled.textarea`
  ${CommonItemStyle}
  resize: none;
  &::placeholder {
    color: #888888;
    font-size: 16px;
  }
`;

export const MemberCommonStyle = styled.li`
  ${CommonItemStyle}
  color: #888888;
  font-size: 16px;
`;

export const ClubName = styled(ClubCommonStyle)``;

export const ClubField = styled(ClubCommonStyle)``;

export const ClubFieldLabelWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const ClubFieldLabel = styled.label`
  margin-right: 8px;
  cursor: pointer;
`;

export const ClubFieldLabelRadio = styled.input`
  margin: 0;
  margin-right: 2px;
  cursor: pointer;
`;

export const ClubPosition = styled(ClubCommonStyle)``;

export const ClubConcept = styled(ClubCommonStyle)``;

export const ClubIntro = styled(ClubCommonStyle)``;

export const ClubLeader = styled(ClubCommonStyle)``;

export const ClubMember = styled(ClubCommonStyle)``;

export const ClubMemberList = styled.ul`
  display: grid;
  grid-gap: 0 20px;
  grid-template-columns: 45% 45%;
`;

export const ClubMemberItem = styled.li`
  ${CommonItemStyle}
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #ffffff;
    background-color: #888888;
    > img {
      display: inline-block !important;
    }
  }
  > img {
    display: none;
    width: 14px;
    cursor: pointer;
  }
`;

export const ClubMemberAdd = styled.li`
  ${CommonItemStyle}
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  cursor: pointer;
  &:hover {
    transform: translateY(-4px);
    transition: 0.5s;
    background-color: #d0d0d0;
  }
`;

export const ClubPicture = styled(ClubCommonStyle)``;

export const CenterRight = styled.div``;

export const ClubPictureInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ClubPictureInnerText = styled.span`
  display: inline-block;
  margin: 4px 0;
  padding: 4px;
  border: 0;
  color: #888888;
  background-color: ${BASE_BACK_COLOR};
  box-sizing: border-box;
  font-size: 14px;
`;

export const ClubPictureThumbnail = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 200px;
  border: 2px dashed #dddddd;
  box-sizing: border-box;
  color: #888888;
  background-color: ${BASE_BACK_COLOR};
  font-size: 12px;
  &.dragged {
    background-color: white;
  }
  > img {
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
  }
`;

export const ClubPictureWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0;
  padding: 4px;
  border: 0;
  color: #888888;
  background-color: transparent;
  box-sizing: border-box;
  font-size: 15px;
  cursor: pointer;
  z-index: 10;
  &:hover {
    color: #242424;
  }
`;

export const ClubPicturePreview = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
  opacity: 0.5;
  z-index: 1;
`;

export const ClubFacebook = styled(ClubCommonStyle)``;

export const ClubFacebookFakeLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px;
  border: 0;
  color: #888888;
  background-color: ${BASE_BACK_COLOR};
  box-sizing: border-box;
  > input {
    margin: 0;
    padding: 0;
    font-size: 16px;
  }
`;

export const CenterBottom = styled.div`
  width: 80%;
  margin: auto;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const BottomButton = styled.button`
  margin: 0 12px;
  padding: 4px 36px;
  border-radius: 4px;
  font-size: 18px;
  transition: 0.3s;
  &:hover {
    transform: translateY(-4px);
  }
`;

export const BottomCancelButton = styled(BottomButton)`
  color: #242424;
  background: #fbfbfb;
  border: 1px solid #dddddd;
`;

export const BottomEditButton = styled(BottomButton)`
  color: white;
  background: #5323b2;
  border: 1px solid #5323b2;
`;

export const Modal = styled.div``;

export const ModalBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.23);
  z-index: 10;
`;

export const ModalForm = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 40px;
  background-color: white;
  z-index: 11;
  > p {
    font-weight: bold;
  }
`;

export const ModalFormInner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  > div:first-child {
    margin-right: 20px;
  }
  > div:last-child {
    margin-right: 20px;
  }
`;

export const SearchingWrap = styled.div`
  position: relative;
`;

export const SearchLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 12px 0;
  padding: 4px 8px;
  background-color: #f6f6f6;
  box-sizing: border-box;
`;

export const SearchText = styled.input`
  margin-left: 4px;
  padding: 0;
  border: 0;
  background-color: transparent;
  &::placeholder {
    color: #1d1d1d;
  }
`;

export const Result = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 120px;
  margin: 8px 0;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0);
  background-color: white;
  transition: color 0.3s ease;
  overflow-y: scroll;
  text-shadow: 0 0 black;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    width: 16px;
    border-radius: 13px;
    background-clip: padding-box;
    border: 4px solid transparent;
    box-shadow: inset 0 0 0 10px;
  }
  &:hover {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const ResultItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  color: #1d1d1d;
  font-weight: 300;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const Queue = styled.ul`
  width: 100px;
  margin: 8px 0;
  > p {
    font-size: 14px;
    color: #838383;
  }
  > li {
    transition: 0.3s ease;
    cursor: pointer;
    &:hover {
      color: #ff6961;
    }
  }
`;

export const ModalButtonWrap = styled.div`
  text-align: right;
`;

const ModalButton = styled.button`
  margin: 0 4px;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 14px;
  transition: 0.3s;
  &:hover {
    transform: translateY(-4px);
  }
`;

export const ModalCancel = styled(ModalButton)`
  color: #242424;
  background: #fbfbfb;
  border: 1px solid #dddddd;
`;

export const ModalAdd = styled(ModalButton)`
  color: white;
  background: #5323b2;
  border: 1px solid #5323b2;
`;
