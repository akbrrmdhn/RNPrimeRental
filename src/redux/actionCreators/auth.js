import {postLogin, postRegister} from '../../utils/https/auth';
import {signIn, signedIn, signUp} from './actionString';

export const loginAction = (body, cb) => {
  return {
    type: signIn,
    payload: postLogin(body),
  };
};

export const loggedInAction = () => {
  return {
    type: signedIn,
  };
};

export const registerAction = (body, cb) => {
  return {
    type: signUp,
    payload: postRegister(body),
  };
};
