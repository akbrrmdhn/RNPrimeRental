import {applyMiddleware, combineReducers, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rpm from 'redux-promise-middleware';

import authReducer from './reducers/authReducer';

const persistAuth = {
  key: 'auth',
  storage: AsyncStorage,
};

const reducers = combineReducers({
  auth: persistReducer(persistAuth, authReducer),
});

const enhancers = applyMiddleware(rpm);

export default () => {
  const reduxStore = createStore(reducers, enhancers);
  const persist = persistStore(reduxStore);
  return {reduxStore, persist};
};
