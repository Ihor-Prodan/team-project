/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice, Slice } from '@reduxjs/toolkit';
import { addDays, format } from 'date-fns';

interface Day {
  day: string;
  date: string;
  dayIndex: number;
}

export interface CalendarState {
  days: Day[];
  currentDayIndex: number;
}

const initialState: CalendarState = {
  days: [],
  currentDayIndex: 0,
};

const updateDays = () => {
  const today = new Date();

  return Array.from({ length: 21 }).map((_, index) => {
    const date = addDays(today, index);

    return {
      day: format(date, 'EEE'),
      date: format(date, 'dd.MM'),
      dayIndex: index,
    };
  });
};

export const calendarSlice: Slice<
  CalendarState,
  {
    setDays: (state: CalendarState) => void;
    setCurrentDayIndex: (
      state: CalendarState,
      action: PayloadAction<number>,
    ) => void;
  }
> = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setDays: state => {
      state.days = updateDays();
      state.currentDayIndex = 0;
    },
    setCurrentDayIndex: (state, action: PayloadAction<number>) => {
      state.currentDayIndex = action.payload;
    },
  },
});

export const { setDays, setCurrentDayIndex } = calendarSlice.actions;

export default calendarSlice.reducer;
