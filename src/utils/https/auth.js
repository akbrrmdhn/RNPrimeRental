import axios from 'axios';
import config from '../../../config';

const url = config.API_URL;
export const postLogin = body => {
  return axios.post(`${url}/auth/login`, body);
};

export const postRegister = body => {
  return axios.post(`${url}/auth/register`, body);
};

export const deleteLogout = token => {
  return axios.delete(`${url}/auth/logout`, {
    headers: {'x-access-token': `Bearer ${token}`},
  });
};
