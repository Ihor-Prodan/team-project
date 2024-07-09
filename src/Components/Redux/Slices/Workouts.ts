/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice, Slice } from '@reduxjs/toolkit';
import axios from 'axios'; // Імпорт Axios
import { AppDispatch } from '../Store/store';

export const BASE_URL = 'http://localhost:8080';

export const fetchWorkout = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/webinar/all`);

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    dispatch(workoutLoaded(response.data.workouts));
  } catch (error) {}
};

export type Workouts = {
  name: string;
  category: string;
  duration: string;
  couch: string;
  hardLewel: string;
  description: string;
  preparationTips: string;
  image: string;
  id: string;
  date: string;
};

export interface WorkoutsState {
  workouts: Workouts[];
  loading: boolean;
  error: string | null;
}

const initialState: WorkoutsState = {
  workouts: [],
  loading: false,
  error: null,
};

export const workoutsSlice: Slice<WorkoutsState> = createSlice({
  name: 'workouts',
  initialState,
  reducers: {
    workoutLoaded: (state, action: PayloadAction<Workouts[]>) => {
      state.workouts = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: state => {
      state.loading = true;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { workoutLoaded, setLoading, setError } = workoutsSlice.actions;

export default workoutsSlice.reducer;
