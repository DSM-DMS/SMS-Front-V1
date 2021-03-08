import styled, { css } from "styled-components";
import TextareaAutosize from "react-autosize-textarea";

import { OutingWarningRedBase, OutingBalloons } from "../../assets";

export const OutingCommonWrap = styled.div`
  padding: 80px;
  border-radius: 5px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
  box-sizing: border-box;
`;

export const WarningWrap = styled(OutingCommonWrap)`
  padding: 24px 80px;
`;

export const WarningHead = styled.header`
  margin-bottom: 4px;
  padding-bottom: 4px;
  border-bottom: 2px solid #f7f6ff;
`;

export const WarningTitle = styled.h2`
  margin-top: 12px;
  font-size: 24px;
  font-weight: bold;
`;

export const WarningDescWarning = styled.p`
  padding-left: 8px;
  border-left: 2px solid #242424;
`;

export const WarningOuterList = styled.ol`
  line-height: 1.5;
  font-size: 14px;
`;

export const WarningOuterItem = styled.li`
  margin: 16px 0;
`;

export const WarningInnerItem = styled.li`
  margin: 8px 0;
  padding-left: 12px;
  font-size: 12px;
  > a {
    color: #5323b2;
    text-decoration: none;
  }
`;

export const ApplyWrap = styled(OutingCommonWrap)`
  position: relative;
`;

export const ApplyHead = styled.header`
  position: relative;
  margin-bottom: 4px;
  padding-bottom: 4px;
  border-bottom: 2px solid #f7f6ff;
`;

export const ApplyTitle = styled.h2`
  margin-top: 12px;
  font-size: 24px;
  font-weight: bold;
`;

const CircleAni = styled.div`
  animation: boxFade infinite ease-in-out alternate;
  @keyframes boxFade {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const ApplyCircle1 = styled(CircleAni)`
  position: absolute;
  bottom: 30px;
  right: -35px;
  width: 100px;
  height: 100px;
  background-image: linear-gradient(225deg, #ffffff, rgb(83 35 178 / 50%));
  border-radius: 50%;
  animation-duration: 4s;
`;

export const ApplyCircle2 = styled(CircleAni)`
  position: absolute;
  bottom: 25px;
  right: 100px;
  width: 40px;
  height: 40px;
  background-image: linear-gradient(45deg, #ffffff, rgb(83 35 178 / 50%));
  border-radius: 50%;
  animation-duration: 6s;
`;

export const ApplyCircle3Wrap = styled(CircleAni)`
  position: absolute;
  bottom: calc(100% - 50px);
  right: 160px;
  animation-duration: 2s;
`;

export const ApplyCircle4Wrap = styled(CircleAni)`
  position: absolute;
  bottom: 100%;
  right: 80px;
  animation-duration: 8s;
`;

export const ApplyCircle3 = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  background-image: linear-gradient(225deg, #ffffff, rgb(83 35 178 / 50%));
  border-radius: 50%;
  box-sizing: border-box;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: white;
    box-sizing: border-box;
  }
`;

export const ApplyCircle4 = styled.div`
  position: relative;
  width: 14px;
  height: 14px;
  background-image: linear-gradient(225deg, #ffffff, rgb(83 35 178 / 50%));
  border-radius: 50%;
  box-sizing: border-box;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: white;
    box-sizing: border-box;
  }
`;

export const ApplyDescWarning = styled.p`
  margin-top: 12px;
  padding-left: 8px;
  border-left: 2px solid #242424;
  > a {
    color: #5323b2;
    text-decoration: none;
    &:hover {
      color: #ff5555;
    }
  }
`;

export const ApplyForm = styled.div`
  margin-bottom: 16px;
`;

export const ApplyFormItemTitle = styled.label`
  width: 100px;
  font-size: 14px;
  cursor: pointer;
`;

export const ApplyFormInputWrap = styled.div`
  position: relative;
  align-items: center;
  justify-content: space-between;
  display: flex;
  width: 35%;
  margin: 8px 0;
  padding: 8px;
  border: 1px solid #888888;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const FormDate = styled.div`
  display: flex;
  align-items: center;
`;

export const FormDateText = styled.span`
  color: #dddddd;
  font-size: 14px;
  user-select: none;
  &.selected {
    color: black;
  }
`;

export const FormDateInput = styled.input`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 46px;
  height: 100%;
  border: 0;
  padding: 0;
  background-color: transparent;
`;

export const FormTime = styled.div``;

export const FormTimeListWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const FormTimeType = styled.span`
  color: #dddddd;
  font-size: 14px;
  user-select: none;
  &.selected {
    color: black;
  }
`;

export const FormTimeInput = styled.input`
  height: 100%;
  border: 0;
  width: 28px;
`;

export const FormTimeItem = styled.li`
  margin: 2px;
  padding: 0 16px;
  color: #828282;
  transition: 100ms ease-in-out;
  &:hover {
    color: #5323b2;
  }
`;

export const FormPlace = styled.div`
  display: flex;
  align-items: center;
`;

export const PlaceSearchWrap = styled.div`
  width: 35%;
  > span {
    color: #ff2200;
    font-size: 12px;
    font-weight: 400;
  }
`;

export const FormPlaceInputWrap = styled.div`
  position: relative;
  align-items: center;
  justify-content: space-between;
  display: flex;
  min-width: 100%;
  margin: 8px 0;
  padding: 8px;
  border-radius: 4px;
  background-color: #f6f6f6;
  box-sizing: border-box;
  &:last-child {
    min-width: calc(100% + 100px);
  }
`;

export const FormPlaceInput = styled.p`
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  font-size: 14px;
  color: #888888;
  background-color: transparent;
`;

export const FormPlaceInputSearch = styled.img`
  width: 16px;
  cursor: pointer;
`;

export const FormPlaceSearchBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9;
`;

export const FormPlaceSearchListWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 600px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 3px 5px #555;
  box-sizing: border-box;
  z-index: 10;
`;

export const PlaceDetailWrap = styled.div`
  width: 100%;
  height: 100%;
  font-size: 14px;
  margin: 8px 0;
  padding: 8px;
  border: 1px solid #888888;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const PlaceDetailInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  &::placeholder {
    color: #dddddd;
  }
`;

export const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: red;
  animation: progress 1s;

  @keyframes progress {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

export const PlaceSearchHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-radius: 4px 4px 0 0;
  color: white;
  background-color: #242424;
  #title {
    font-size: 16px;
  }
  #close {
    width: 14px;
    height: 14px;
    cursor: pointer;
  }
`;

export const PlaceSearchInputWrap = styled.div`
  padding: 10px 30px;
`;

export const PlaceSearchInputBox = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border: 1px solid #888888;
  cursor: text;
  #searchInput {
    width: 100%;
    border: 0;
  }
  #search {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

export const PlaceSearchInfoMessage = styled.p`
  color: #888888;
  font-size: 12px;
`;

export const PlaceSearchListBox = styled.div`
  flex: 1;
  padding: 30px 10px 20px;
  background-color: #f7f6ff;
`;

export const PlaceSearchList = styled.ul`
  height: 400px;
  border-bottom: 1px solid #888888;
`;

export const PlaceSearchItem = styled.li<{ time: number }>`
  width: 100%;
  padding: 8px;
  border-bottom: 1px solid #dddddd;
  background-color: transparent;
  box-sizing: border-box;
  cursor: pointer;
  animation: slideIn ${({ time }) => 1000 + time}ms;
  &:hover {
    background-color: #deceff;
  }
  #title {
    color: black;
  }
  #roadAddress {
    color: #242424;
  }
  #address {
    color: #444;
  }

  @keyframes slideIn {
    from {
      transform: translateY(100px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const PlaceSearchResultText = styled.p`
  display: flex;
  & > span:first-child {
    width: 20%;
    color: #5323b2;
    font-size: 11px;
  }
  & > span:last-child {
    width: 80%;
    font-size: 12px;
  }
  &#title b {
    font-weight: 500;
  }
  &#address {
    color: #444;
  }
  &#roadAddress {
    color: #666;
  }
`;

export const FormReason = styled.div``;

export const FormInnerReason = styled.div`
  display: flex;
  align-items: center;
`;

export const FormReasonTextarea = styled(TextareaAutosize)`
  width: 100%;
  height: 100%;
  border: 0;
  padding: 0;
  font-size: 14px;
  resize: none;
  &::placeholder {
    color: #dddddd;
  }
  ::-webkit-scrollbar {
    width: 0;
  }
  ::-webkit-scrollbar-track {
    background-color: white;
  }
  ::-webkit-scrollbar-thumb {
    background-color: white;
  }
`;

export const FormReasonSick = styled.div`
  position: relative;
  margin: 8px 0;
  width: calc(35% + 100px);
  color: #242424;
  text-align: right;
  font-size: 12px;
`;

export const FormReasonSickCheckboxLabel = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  > #sickWrap {
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover ~ #warning {
      display: block;
    }
  }
`;

export const FormReasonSickCheckbox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  height: 16px;
  width: 16px;
  margin-right: 4px;
  border: 0;
  outline: 1px solid #888888;
  &.checked {
    outline: 0;
    background-color: #5323b2;
  }
  #check {
    width: 12px;
    height: 12px;
  }
`;

export const FormReasonSickDesc = styled.div`
  position: absolute;
  top: calc(100% + 1px);
  right: 0;
  display: none;
  width: calc(100% - 100px);
  line-height: 1.5;
  padding: 8px 0;
  border-radius: 4px;
  color: #242424;
  font-size: 12px;
  box-sizing: border-box;
  z-index: 7;
  background-color: white;
  box-shadow: 0 3px 6px #00000030;
  padding: 8px 12px;
  &::after {
    content: "";
    position: absolute;
    top: 8px;
    left: 12px;
    width: 12px;
    height: 12px;
    background: url(${OutingWarningRedBase}) no-repeat;
    background-size: contain;
  }
  > p {
    text-align: right;
  }
  > div {
    position: relative;
    text-align: left;
  }
`;

export const FormButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #dddddd;
`;

const FormButtonCommon = styled.button`
  margin: 0 8px;
  padding: 6px 8px;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: 120ms;
  box-shadow: inset -3px -3px 3px rgba(0, 0, 0, 0.2),
    3px 3px 3px rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const FormButtonCancel = styled(FormButtonCommon)`
  width: 80px;
  color: #242424;
  background-color: white;
`;

export const FormButtonSubmit = styled(FormButtonCommon)`
  width: 80px;
  color: white;
  background-color: #5323b2;
`;

export const FormSubmitModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 12px 24px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 16%);
  background-color: white;
  cursor: all-scroll;
  user-select: none;
`;

export const FormSubmitModalText = styled.p`
  margin: 4px 0;
`;

export const FormSubmitModalCancelButton = styled(FormButtonCommon)`
  padding: 4px 16px;
  color: #242424;
  background-color: white;
  font-size: 16px;
`;

export const FormSubmitModalSubmitButton = styled(FormButtonCommon)`
  padding: 4px 16px;
  color: white;
  background-color: #5323b2;
  font-size: 16px;
`;

export const HistoryWrap = styled(OutingCommonWrap)``;

export const HistoryHead = styled.header`
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f7f6ff;
  > div {
    display: flex;
    align-items: center;
  }
`;

export const HistoryTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

export const HistoryRefresh = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-left: 12px;
  padding: 4px;
  border-radius: 50%;
  transition: 300ms;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background: #e2e2e2;
  }
  > img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`;

export const HistoryContent = styled.div``;

export const HistoryNoContent = styled.div`
  text-align: center;
  font-size: 18px;
  word-break: break-all;
  a {
    color: #5323b2;
    text-decoration: none;
  }
`;

export const HistoryCardWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25%, 30%));
  row-gap: 40px;
  justify-content: space-between;
  margin-bottom: 60px;
`;

export const HistoryCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 160px;
  padding: 16px;
  border: 1px solid #dddddd;
  cursor: pointer;
`;

export const CardTop = styled.div``;

interface Emergency {
  emergency: boolean;
}

export const CardDate = styled.p<Emergency>`
  position: relative;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
  padding-right: 32px;
  border-right: 2px solid #242424;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    ${({ emergency }) =>
      emergency &&
      css`
        background-image: url(${OutingWarningRedBase});
      `}
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 16px;
    height: 16px;
  }
`;

export const CardPlace = styled.p`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
`;

export const CardBottom = styled.div``;

const REJECT = "#ff6409";
const PENDING = "#ffeb00";
const APPROVE = "#7aff00";
const START = "#1000ff";
const END = "#ff5555";
const CERTIFY = "#242424";

interface Status {
  status: number;
}

export const CardStatus = styled.span<Status>`
  color: ${({ status }) => {
    switch (status) {
      case -2:
      case -1:
        return REJECT;
      case 0:
      case 1:
        return PENDING;
      case 2:
        return APPROVE;
      case 3:
        return START;
      case 4:
        return END;
      case 5:
        return CERTIFY;
      default:
        return CERTIFY;
    }
  }};
  font-size: 14px;
`;

export const CardTime = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  font-size: 14px;
`;

export const MoreButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  border: 0;
  border-radius: 4px;
  background-color: white;
  box-shadow: inset -2px -2px 5px rgba(0, 0, 0, 0.2),
    2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: 60ms;
  &:hover {
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const HistoryModalWrap = styled.div``;

export const ModalBack = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% - 0.5px), calc(-50% - 0.5px));
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 10%);
  z-index: 10;
  cursor: default;
`;

export const ModalContentWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% - 0.5px), calc(-50% - 0.5px));
  z-index: 11;
  border-radius: 8px;
  cursor: default;
  background-image: url(${OutingBalloons});
  background-repeat: no-repeat;
  background-position: 90% 5%;
`;

export const ModalApply = styled.div`
  position: relative;
  width: 600px;
  padding: 40px 80px;
  border-radius: 4px;
  background-color: white;
`;

export const ModalTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #dddddd;
`;

export const ModalList = styled.ul``;

export const ModalItem = styled.li`
  margin: 10px 0;
  font-size: 14px;
`;

export const ModalStatus = styled.p`
  margin-top: 24px;
  color: #16191f;
  font-weight: 300;
`;

export const ModalCategory = styled.span`
  width: 100px;
  margin-right: 8px;
  font-weight: bold;
`;

export const ModalClose = styled.img`
  position: absolute;
  top: 5%;
  right: 5%;
  cursor: pointer;
`;

export const ModalButtonWrap = styled.div`
  text-align: right;
`;

export const ModalApplyButton = styled.button`
  margin: 0 12px;
  padding: 10px 20px;
  border: 0;
  border-radius: 4px;
  box-shadow: -3px -3px 2px rgba(255, 255, 255, 0.3),
    5px 5px 5px rgba(0, 0, 0, 0.2), 10px 10px 10px rgba(0, 0, 0, 0.3);
  font-size: 16px;
`;

export const OnlineCardButton = styled(ModalApplyButton)`
  border: 1px solid #10012e;
  color: #10012e;
  background-color: white;
`;

export const OutingStartBtn = styled(ModalApplyButton)`
  border: 1px solid #10012e;
  color: white;
  background-color: #10012e;
`;

export const OutingEndBtn = styled(ModalApplyButton)`
  border: 1px solid #ff5555;
  color: white;
  background-color: #ff5555;
`;

export const ModalOnlineCard = styled.div`
  position: relative;
  width: 450px;
  border-radius: 8px;
  background-color: white;
  background-color: white;
`;

export const OnlineCardTitle = styled.h3`
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 16px;
  border-bottom: 1px solid #dddddd;
`;

export const OnlineCardContentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const OnlineCardUserPictureWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

export const OnlineCardUserPicture = styled.img`
  height: 160px;
  width: 140px;
  padding: 8px;
  border: 2px dashed #242424;
`;

export const OnlineCardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const OnlineCardMoveApply = styled.button`
  background-color: #10012e;
  color: white;
  font-size: 16px;
  padding: 4px 8px;
  border: 0;
  border-radius: 4px;
  box-shadow: -3px -3px 2px rgba(255, 255, 255, 0.3),
    5px 5px 5px rgba(0, 0, 0, 0.2), 10px 10px 10px rgba(0, 0, 0, 0.3);
`;

export const WithModalAniWrap = styled.div`
  animation: showUp 300ms cubic-bezier(0.4, 1.6, 1, 1);

  @keyframes showUp {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const GuideModalWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 500px;
  line-height: 1.5;
  padding: 24px;
  border-radius: 8px;
  background-color: white;
  font-size: 14px;
  p {
    margin-bottom: 12px;
  }
  ul li {
    margin: 6px 0;
  }
`;

export const GuideModalBack = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9;
`;

export const GuideModalButtons = styled.button`
  float: right;
  margin: 0 8px;
  padding: 4px 16px;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  &:first-of-type {
    color: white;
    background-color: #5323b2;
  }
  &:last-of-type {
    color: #242424;
    background-color: white;
  }
`;
