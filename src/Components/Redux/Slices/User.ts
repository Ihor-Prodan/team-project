/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice, Slice } from '@reduxjs/toolkit';
import { Workouts } from './Workouts';
import { Membership } from '../../Prices/Helpers/priceCardInfo';

export const BASE_URL = 'http://localhost:8080';

// export const usersFetch = () => async (dispatch: AppDispatch) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/user/${id}`);

//     // eslint-disable-next-line @typescript-eslint/no-use-before-define
//     dispatch(userLoad(response.data.user));
//   } catch (error) {
//     // eslint-disable-next-line @typescript-eslint/no-use-before-define
//     setError('Enable to load user');
//   }
// };

export type User = {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  password: string | null;
  membership: Membership;
  workouts: Workouts[];
};

export interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export const userSlice: Slice<UserState> = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoad: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateUser: (state, action: PayloadAction<User>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }

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

export const { userLoad, setLoading, setError, updateUser } = userSlice.actions;

export default userSlice.reducer;
