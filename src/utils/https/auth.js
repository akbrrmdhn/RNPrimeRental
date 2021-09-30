import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import config from '../../../config';

const url = config.API_URL;
export const postLogin = body => {
  return axios.post(`${url}/auth/login`, body);
};

export const postRegister = body => {
  return axios.post(`${url}/auth/register`, body);
};

export const deleteLogout = async () => {
  const token = await AsyncStorage.getItem('token');
  return await axios.delete(`${url}/auth/logout`, {token: token});
};
