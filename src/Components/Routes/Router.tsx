import { HashRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { NotFoundPage } from '../Not-Found-Page/Not-Found-Page';
import App from '../../App';
import store from '../../Store/store';

export const Root: React.FC = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
};
