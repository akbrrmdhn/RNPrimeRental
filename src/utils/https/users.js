import axios from 'axios';
import config from '../../../config';

const url = config.API_URL;

export const getUser = id => {
  return axios.get(`${url}/users/${id}`, {
    params: {
      id: String(id),
    },
  });
};

export const postUpdateProfile = (body, id) => {
  return axios.patch(`${url}/users/edituser/${id}`, body);
};
