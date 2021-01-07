import styled from "styled-components";

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
  > div,
  > label {
    margin: 4px 0;
    > p {
      color: #242424 !important;
      font-weight: bold !important;
    }
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

export const ClubName = styled(ClubCommonStyle)``;

export const ClubField = styled(ClubCommonStyle)``;

export const ClubLocation = styled(ClubCommonStyle)``;

export const ClubConcept = styled(ClubCommonStyle)``;

export const ClubIntro = styled(ClubCommonStyle)``;

export const ClubLeader = styled(ClubCommonStyle)``;

export const ClubMember = styled(ClubCommonStyle)``;

export const ClubMemberList = styled.ul`
  display: grid;
  grid-gap: 0 40px;
  grid-template-columns: 45% 45%;
`;

export const ClubMemberItem = styled.li`
  ${CommonItemStyle}
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s ease-in-out;
  font-size: 14px;
`;

export const ClubMemberItemSetting = styled.div`
  position: relative;
  cursor: pointer;
  &:hover > img {
    background-color: #d8d8d8;
  }
  > div {
    position: absolute;
    top: 110%;
    right: 0;
    width: 100px;
    margin-top: 2px;
    padding: 4px 0;
    background-color: white;
    border: 1px solid #919191;
    border-radius: 4px;
    box-shadow: 0 0 10px #bbbbbb;
    text-align: center;
    z-index: 10;
    &::before {
      content: "";
      position: absolute;
      top: -16px;
      right: 4px;
      display: inline-block;
      border: 8px solid transparent;
      border-bottom: 8px solid white;
    }
    > p {
      padding: 2px 8px;
      &:hover {
        color: white;
        background-color: #a1a1a1;
      }
    }
  }
`;

export const ClubMemberItemSettingImg = styled.img`
  width: 14px;
  padding: 4px;
  border: 1px solid #a1a1a1;
  border-radius: 4px;
  box-shadow: 0 1px 1px #e1e1e1;
  transition: 300ms;
`;

export const ClubMemberDeleteImg = styled.img`
  display: none;
  width: 14px;
  cursor: pointer;
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

export const ClubMemberDeleteModal = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50.2%);
  width: 400px;
  border-color: white;
  border-radius: 8px;
  color: black;
  background-color: white;
  background-clip: padding-box;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.4);
  font-size: 15px;
  z-index: 12;
`;

export const ClubMemberDeleteModalHead = styled.div`
  position: relative;
  padding: 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: #f5f8fa;
  color: #576069;
  font-weight: 600;
`;

export const ClubMemberModalClose = styled.img`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const ClubMemberDeleteModalBody = styled.div`
  padding: 20px;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  > .followingDeleteMember {
    font-size: 14px;
    color: #616161;
  }
`;

export const ModalBodyList = styled.ul`
  padding: 8px 0;
  > .member {
    padding: 8px 12px;
    border: 1px solid #eaeaea;
    color: #e74c3c;
    border-radius: 4px;
  }
`;

export const ClubMemberDeleteModalFoot = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  color: red;
  > .delete {
    padding: 4px 8px;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    color: #ea2237;
    background-color: #fdfdfd;
    box-shadow: 0 1px 3px #e2e2e2;
    transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    transition-property: color, background-color;
    &:hover {
      color: #fdfdfd;
      background-color: #ea2237;
    }
  }
`;

export const ClubMemberDeleteBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #8c8f909e;
  z-index: 11;
`;

export const ClubPicture = styled(ClubCommonStyle)``;

export const CenterRight = styled.div``;

export const ClubPictureInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InnerTextCommon = styled.span`
  display: inline-block;
  height: 20px;
  margin: 4px 0;
  color: #888888;
  font-size: 14px;
  box-sizing: border-box;
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
  transform: translate(-50%, -50.2%);
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
`;

export const SearchingWrap = styled.div`
  position: relative;
  > div {
    width: 400px;
  }
`;

export const SearchFilterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 8px;
`;

export const SearchFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 4px;
  padding: 4px 8px;
  border: 1px solid #00adf9;
  border-radius: 24px;
  cursor: pointer;
  &.selected {
    color: white;
    background-color: #00adf9;
    > div {
      border-color: white;
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50%;
        height: 50%;
        transform: translate(-50%, -50%);
        border: 2px solid #00adf9;
        border-radius: 50%;
        background-color: white;
      }
    }
  }
`;

export const SearchFilterCircle = styled.div`
  position: relative;
  width: 12px;
  height: 12px;
  border: 2px solid #00adf9;
  border-radius: 50%;
`;

export const SearchFilterText = styled.span`
  margin-left: 4px;
  font-size: 12px;
`;

export const SearchLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 12px 0;
  padding: 4px 8px;
  background-color: #f6f6f6;
  box-sizing: border-box;
  > img {
    cursor: pointer;
  }
`;

export const SearchText = styled.input`
  width: 100%;
  margin-left: 12px;
  padding: 0;
  border: 0;
  background-color: transparent;
`;

export const Result = styled.ul`
  width: 100%;
  height: 120px;
  margin: 8px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid #e2e2e2;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0);
  background-color: white;
  transition: color 0.3s ease;
  overflow-y: scroll;
  text-shadow: 0 0 black;
  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    width: 16px;
    border-radius: 13px;
    background-clip: padding-box;
    border: 4px solid transparent;
    box-shadow: inset 0 0 0 10px;
  }
  > .searchResult:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const ResultItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  color: #1d1d1d;
  font-weight: 300;
  > span {
    flex: 1;
  }
`;

export const QueueWrap = styled.div`
  margin-left: 8px;
`;

export const Queue = styled.ul`
  width: 200px;
  height: 200px;
  margin: 8px 0;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0);
  background-color: white;
  overflow-y: scroll;
  text-shadow: 0 0 black;
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
  > p {
    font-size: 14px;
    color: #838383;
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
