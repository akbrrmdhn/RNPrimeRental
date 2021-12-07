import axios from 'axios';
import {API_URL} from '@env';

export const getUser = token => {
  return axios.get(`${API_URL}/users/`, {
    headers: {'x-access-token': `Bearer ${token}`},
  });
};

export const postUpdateProfile = (body, token) => {
  return axios.patch(`${API_URL}/users/edituser/`, body, {
    headers: {'x-access-token': `Bearer ${token}`},
  });
};

export const forgotPassword = body => {
  return axios.post(`${API_URL}/auth/forgot-password`, body);
};

export const checkCode = body => {
  return axios.post(`${API_URL}/auth/forgot-password/code`, body);
};

export const changePassword = body => {
  return axios.patch(`${API_URL}/auth/forgot-password/change-password`, body);
};
