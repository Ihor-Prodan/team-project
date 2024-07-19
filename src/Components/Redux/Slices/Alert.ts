/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

export interface AlertState {
  message: string;
  type: string;
  isVisible: boolean;
}

const initialState: AlertState = {
  message: '',
  type: '',
  isVisible: false,
};

export const alertSlice: Slice<
  AlertState,
  {
    showAlert: (
      state: AlertState,
      action: PayloadAction<{ message: string; type: string }>,
    ) => void;
    hideAlert: (state: AlertState) => void;
  }
> = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert: (
      state,
      action: PayloadAction<{ message: string; type: string }>,
    ) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.isVisible = true;
    },
    hideAlert: state => {
      state.isVisible = false;
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;

export default alertSlice.reducer;
