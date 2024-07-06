/* eslint-disable @typescript-eslint/indent */
import { PayloadAction, createSlice, Slice } from '@reduxjs/toolkit';

export type ModalType = {
  isModal: boolean;
};

const initialState: ModalType = {
  isModal: false,
};

export const modalSlice: Slice<
  ModalType,
  {
    setIsModal: (state: ModalType, action: PayloadAction<boolean>) => ModalType;
  }
> = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsModal: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isModal: action.payload,
      };
    },
  },
});

export const { setIsModal } = modalSlice.actions;

export default modalSlice.reducer;
