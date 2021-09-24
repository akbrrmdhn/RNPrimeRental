import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistAuth = {
  key: 'auth',
  storage: AsyncStorage,
};
