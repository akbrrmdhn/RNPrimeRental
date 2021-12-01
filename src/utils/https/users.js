import axios from 'axios';
import config from '../../../config';

const url = config.API_URL;

export const getUser = token => {
  return axios.get(`${url}/users/`, {
    headers: {'x-access-token': `Bearer ${token}`},
  });
};

export const postUpdateProfile = (body, token) => {
  return axios.patch(`${url}/users/edituser/`, body, {
    headers: {'x-access-token': `Bearer ${token}`},
  });
};

export const forgotPassword = body => {
  return axios.post(`${url}/auth/forgot-password`, body);
};

export const checkCode = body => {
  return axios.post(`${url}/auth/forgot-password/code`, body);
};

export const changePassword = body => {
  return axios.patch(`${url}/auth/forgot-password/change-password`, body);
};
