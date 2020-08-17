import styled from 'styled-components';

export const MainWrap = styled.div`
  display: flex;
  background-color: #f7f6ff;
`;

export const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
`;

export const MainRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
`;

export const MainContentCommon = styled.div`
  border-radius: 5px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
`;

export const Schedule = styled(MainContentCommon)`
  margin-bottom: 15px;
  margin-right: 15px;
`;

export const Timetable = styled(MainContentCommon)`
  margin-right: 15px;
`;

export const ScheduleDetail = styled(MainContentCommon)``;

export const Outing = styled(MainContentCommon)``;
