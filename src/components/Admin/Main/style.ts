import styled from 'styled-components';

const circleSize = {
  big: '80px',
  middle: '40px',
  small: '20px',
};

export const AdminMainWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const CircleBackWrap = styled.div`
  flex: 1;
  align-self: flex-end;
  position: relative;
  width: 70%;
  height: 100%;
`;

const CircleFade = styled.div`
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

const CircleCommon = styled(CircleFade)`
  position: absolute;
  border-radius: 50%;
  > div {
    position: absolute;
    top: 0;
    left: 0;
    background: #f6f6f6;
    border-radius: 50%;
  }
`;

export const CircleBackSmallFill = styled(CircleCommon)`
  top: 50%;
  left: 0;
  width: ${circleSize.small};
  height: ${circleSize.small};
  animation-duration: 4s;
  background: linear-gradient(45deg, rgb(35 178 173), rgb(35 178 173 / 0) 100%);
`;

export const CircleBackSmallHollow = styled(CircleCommon)`
  top: 0;
  left: 55%;
  width: ${circleSize.small};
  height: ${circleSize.small};
  animation-duration: 6s;
  background: linear-gradient(45deg, rgb(35 178 173), rgb(35 178 173 / 0) 100%);
  > div {
    width: calc(${circleSize.small} - 10px);
    height: calc(${circleSize.small} - 10px);
    transform: translate(5px, 5px);
    animation-duration: 5s;
  }
`;

export const CircleBackMiddleFill = styled(CircleCommon)`
  bottom: 0;
  left: 45%;
  width: ${circleSize.middle};
  height: ${circleSize.middle};
  animation-duration: 8s;
  background: linear-gradient(45deg, rgb(35 178 173), rgb(35 178 173 / 0) 100%);
`;

export const CircleBackMiddleHollow = styled(CircleCommon)`
  top: 5%;
  left: 5%;
  width: ${circleSize.middle};
  height: ${circleSize.middle};
  animation-duration: 5s;
  background: linear-gradient(45deg, rgb(35 178 173), rgb(35 178 173 / 0) 100%);
  > div {
    width: calc(${circleSize.middle} - 5px);
    height: calc(${circleSize.middle} - 5px);
    transform: translate(2.5px, 2.5px);
    animation-duration: 5s;
  }
`;

export const CircleBackBigFill = styled(CircleCommon)`
  top: 0;
  right: 0;
  width: ${circleSize.big};
  height: ${circleSize.big};
  animation-duration: 7s;
  background: linear-gradient(45deg, rgb(35 178 173), rgb(35 178 173 / 0) 100%);
`;

export const ScheduleModalWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  min-height: 200px;
  padding: 12px 60px;
  border-radius: 8px;
  background: white;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  z-index: 10;
`;

export const ScheduleModalDarkBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9;
`;

export const ScheduleModalClose = styled.img`
  position: absolute;
  top: 5%;
  right: 5%;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const ScheduleModalTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  padding: 12px 0;
  border-bottom: 1px solid #f7f6ff;
`;

export const ScheduleModalForm = styled.div``;

export const ScheduleModalFormTimes = styled.div`
  margin: 8px 0;
`;

export const ScheduleModalFormDetail = styled.div`
  margin: 8px 0;
`;

export const ScheduleModalFormTitle = styled.p`
  font-size: 12px;
  margin: 8px 0px;
`;

export const ScheduleModalFormInnerWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ScheduleModalFormInput = styled.input`
  flex: 1;
  border: 1px solid #888;
  padding: 4px 8px;
  border-radius: 8px;
`;

export const ScheduleModalFormTilde = styled.span`
  margin: 0 10px;
`;

export const ScheduleModalFormButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ScheduleModalButton = styled.button`
  margin: 0 8px;
  padding: 6px 12px;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  transition: 300ms;
  &:first-child {
    background: white;
    color: #242424;
  }
  &:last-child {
    background: #5323b2;
    color: white;
  }
  &:hover {
    transform: translateY(-5px);
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const ScheduleModalCircleBackWrap = styled.div`
  position: absolute;
  top: 0;
  right: 10%;
  height: 50%;
  width: 50%;
  opacity: 0.2;
  z-index: -1;
  > div {
    width: 100%;
  }
`;

export const DeleteScheduleModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 12px 24px;
  border-radius: 8px;
  background: white;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  text-align: center;
  z-index: 10;
  > p {
    margin: 8px 0;
    font-size: 14px;
    &:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      > img {
        width: 16px;
        height: 16px;
        margin-right: 4px;
      }
    }
    &:last-child {
      letter-spacing: 4px;
    }
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    > button {
      margin: 12px 8px 0;
      padding: 4px 20px;
      border: 0;
      border-radius: 4px;
      font-size: 14px;
      transition: 300ms;
      &:first-child {
        border: 1px solid #dddddd;
        background: #fbfbfb;
        color: #242424;
        &:hover {
          transform: rotate(10deg);
        }
        &:active {
          transform: translateY(-5px);
        }
      }
      &:last-child {
        border: 1px solid #ff5555;
        background: #ff5555;
        color: white;
        &:hover {
          transform: rotate(-10deg);
        }
        &:active {
          transform: translateY(-5px);
        }
      }
    }
  }
`;
