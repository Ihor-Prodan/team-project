import { HashRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { NotFoundPage } from '../Not-Found-Page/Not-Found-Page';
import App from '../../App';
import store from '../Redux/Store/store';
import { TimeTable } from '../Time-Table/Time-Table';
import { Theme } from '../Redux/Slices/themeMode';

export const Root: React.FC = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App themeColor={Theme.light} />} />
          <Route
            path="/Timetable"
            element={<TimeTable themeColor={Theme.dark} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
};
