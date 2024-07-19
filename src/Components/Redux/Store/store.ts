import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import { calendarSlice } from '../Slices/Calendar';
import { modalSlice } from '../Slices/Modal';
import { themeSlice } from '../Slices/themeMode';
import { workoutsSlice } from '../Slices/Workouts';
import { trainersSlice } from '../Slices/Trainers';
import { userSlice } from '../Slices/User';
import { menuSlice } from '../Slices/Menu';
import { alertSlice } from '../Slices/Alert';

const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  calendar: calendarSlice.reducer,
  modal: modalSlice.reducer,
  workouts: workoutsSlice.reducer,
  trainers: trainersSlice.reducer,
  user: userSlice.reducer,
  menu: menuSlice.reducer,
  alertMessage: alertSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persister = persistStore(store);

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
