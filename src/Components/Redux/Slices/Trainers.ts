/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice, Slice } from '@reduxjs/toolkit';
import axios from 'axios'; // Імпорт Axios
import { AppDispatch } from '../Store/store';

export const BASE_URL = 'http://localhost:8080';

export const fetchTrainers = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/couch/find`);

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    dispatch(trainersLoaded(response.data.workouts));
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    setError('Enable to load trainers');
  }
};

export interface Trainers {
  id: string;
  name: string;
  price: string;
  image: string;
  experience: string;
  experiencetwo: string;
  specialty: string;
  isTop: boolean;
}

export interface TrainersState {
  trainers: Trainers[];
  loading: boolean;
  error: string | null;
}

const initialState: TrainersState = {
  trainers: [],
  loading: false,
  error: null,
};

export const trainersSlice: Slice<TrainersState> = createSlice({
  name: 'trainers',
  initialState,
  reducers: {
    trainersLoaded: (state, action: PayloadAction<Trainers[]>) => {
      state.trainers = action.payload;
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

export const { trainersLoaded, setLoading, setError } = trainersSlice.actions;

export default trainersSlice.reducer;
