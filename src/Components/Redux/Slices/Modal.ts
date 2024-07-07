/* eslint-disable @typescript-eslint/indent */
import { PayloadAction, createSlice, Slice } from '@reduxjs/toolkit';

export type ModalType = {
  isModal: boolean;
  isConfirm: boolean;
};

const initialState: ModalType = {
  isModal: false,
  isConfirm: false,
};

export const modalSlice: Slice<
  ModalType,
  {
    setIsModal: (state: ModalType, action: PayloadAction<boolean>) => ModalType;
    setIsConfirm: (
      state: ModalType,
      action: PayloadAction<boolean>,
    ) => ModalType;
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

    setIsConfirm: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isConfirm: action.payload,
      };
    },
  },
});

export const { setIsModal, setIsConfirm } = modalSlice.actions;

export default modalSlice.reducer;
