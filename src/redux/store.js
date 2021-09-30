import {applyMiddleware, combineReducers, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rpm from 'redux-promise-middleware';

import authReducer from './reducers/auth';
import logger from 'redux-logger';

const config = {
  key: 'root',
  storage: AsyncStorage,
};
const rootReducer = {
  auth: authReducer,
};

const persistReducers = persistReducer(config, combineReducers(rootReducer));

const enhancers = applyMiddleware(rpm, logger);

const store = createStore(persistReducers, enhancers);

const persistor = persistStore(store);
export default () => {
  return {persistor, store};
};
