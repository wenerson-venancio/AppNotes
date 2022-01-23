import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { NavigationContainer } from '@react-navigation/native';

import { persistor, store } from './src/store';

import MainStack from './src/stacks/MainStack';

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainStack/>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
