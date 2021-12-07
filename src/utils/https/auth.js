import axios from 'axios';
import {API_URL} from '@env';

export const postLogin = body => {
  return axios.post(`${API_URL}/auth/login`, body);
};

export const postRegister = body => {
  return axios.post(`${API_URL}/auth/register`, body);
};

export const deleteLogout = token => {
  return axios.delete(`${API_URL}/auth/logout`, {
    headers: {'x-access-token': `Bearer ${token}`},
  });
};
