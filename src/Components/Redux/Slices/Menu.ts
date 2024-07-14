/* eslint-disable @typescript-eslint/indent */
import { PayloadAction, createSlice, Slice } from '@reduxjs/toolkit';

export type MenuType = {
  isOpen: boolean;
};

const initialState: MenuType = {
  isOpen: false,
};

export const menuSlice: Slice<
  MenuType,
  {
    setIsOpenMenu: (
      state: MenuType,
      action: PayloadAction<boolean>,
    ) => MenuType;
  }
> = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setIsOpenMenu: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isOpen: action.payload,
      };
    },
  },
});

export const { setIsOpenMenu } = menuSlice.actions;

export default menuSlice.reducer;
