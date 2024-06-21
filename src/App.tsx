import React from 'react';
import { Provider } from 'react-redux';
import store, { persister } from './Store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { HomePage } from './Components/Home-Page/Home-Page';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <div>
          <HomePage />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
