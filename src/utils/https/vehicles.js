import axios from 'axios';
import {API_URL} from '@env';

export const getFavourites = user_id => {
  return axios.get(`${API_URL}/vehicles/like`, {
    params: {
      user_id,
    },
  });
};

export const likeVehicle = queries => {
  return axios.post(`${API_URL}/vehicles/like`, {
    params: {
      queries,
    },
  });
};

export const unlikeVehicle = queries => {
  return axios.delete(`${API_URL}/vehicles/like`, {
    params: {
      queries,
    },
  });
};
