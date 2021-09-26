import axios from 'axios';

const url = process.env.API_URL;
export const postLogin = body => {
  return axios.post(`${url}/auth/login`, body);
};

export const postRegister = body => {
  return axios.post(`${url}/auth/register`, body);
};
