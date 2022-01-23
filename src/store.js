import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';

import rootReducer from './reducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorageLib,
    stateReconciler: hardSet
}

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer);
export const persistor = persistStore(store);