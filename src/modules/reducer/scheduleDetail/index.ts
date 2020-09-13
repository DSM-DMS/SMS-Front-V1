import {
  Schedule,
  SET_SCHEDULE_DETAIL,
  scheduleDetailAction,
} from '../../action/scheduleDetail';

interface ScheduleDetail {
  schedules: Schedule[];
}

const initialState: ScheduleDetail = {
  schedules: [
    {
      schedule: '스카프 마무리 1칸',
      startDate: '8.16',
      endDate: '8.16',
    },
    {
      schedule: '스카프 마무리 2칸',
      startDate: '8.19',
      endDate: '8.23',
    },
    {
      schedule: '스카프 마무리 3칸',
      startDate: '8.19',
      endDate: '8.30',
    },
  ],
};

const scheduleDetailReducer = (
  state: ScheduleDetail = initialState,
  action: scheduleDetailAction,
): ScheduleDetail => {
  switch (action.type) {
    case SET_SCHEDULE_DETAIL: {
      return {
        ...state,
        schedules: action.payload.schedules,
      };
    }
    default: {
      return state;
    }
  }
};

export default scheduleDetailReducer;
