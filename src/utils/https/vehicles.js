import axios from 'axios';
import config from '../../../config';

const url = config.API_URL;

export const getFavourites = user_id => {
  return axios.get(`${url}/vehicles/like`, {
    params: {
      user_id,
    },
  });
};

export const likeVehicle = queries => {
  return axios.post(`${url}/vehicles/like`, {
    params: {
      queries,
    },
  });
};

export const unlikeVehicle = queries => {
  return axios.delete(`${url}/vehicles/like`, {
    params: {
      queries,
    },
  });
};
