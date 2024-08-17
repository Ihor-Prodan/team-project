/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice, Slice } from '@reduxjs/toolkit';
import { UserType } from '../../../Types/UserType';
import { User } from '../../../Types/CurentUser';

export interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
  token: string | null;
  id: string;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
  token: null,
  id: '',
};

export const userSlice: Slice<UserState> = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoad: (
      state,
      action: PayloadAction<{ user: UserType; token: string }>,
    ) => {
      const serverUser = action.payload.user;

      const transformedUser: User = {
        firstName: serverUser.firstName,
        lastName: serverUser.lastName,
        email: serverUser.email,
        userId: serverUser.userId,
        membership: serverUser.membership || {
          duration: '',
          slogan: '',
          access: '',
          unlimited: '',
          locker: '',
          giveOne: '',
          price: '',
          best: false,
          membershipId: 0,
        },
        workouts: serverUser.workouts || [],
        dataCard: serverUser.dataCard || {
          cardNumber: '',
          cvv: '',
          date: '',
          phoneNumber: '',
          userId: 0,
        },
      };

      state.user = transformedUser;
      state.token = action.payload.token;
      state.loading = false;
      state.error = null;
    },
    updateUser: (state, action: PayloadAction<UserType>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }

      state.loading = false;
      state.error = null;
    },
    removeUser: state => {
      state.user = null;
      state.token = null;
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

export const { userLoad, setLoading, setError, updateUser, removeUser } =
  userSlice.actions;

export default userSlice.reducer;
