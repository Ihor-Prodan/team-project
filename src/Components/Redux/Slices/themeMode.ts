/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice, Slice } from '@reduxjs/toolkit';

export enum Theme {
  dark = 'dark',
  light = 'light',
}

export interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: Theme.light,
};

export const themeSlice: Slice<
  ThemeState,
  {
    toggleTheme: (state: ThemeState, action: PayloadAction<Theme>) => void;
  }
> = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
