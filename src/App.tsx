import React from 'react';
import { Provider } from 'react-redux';
import store, { persister } from './Components/Redux/Store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { HomePage } from './Components/Home-Page/Home-Page';
import { Theme } from './Components/Redux/Slices/themeMode';

interface Props {
  themeColor: Theme;
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const App: React.FC<Props> = ({ themeColor }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <div>
          <HomePage themeColor={themeColor} />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
