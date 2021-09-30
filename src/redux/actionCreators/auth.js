import {deleteLogout, postLogin, postRegister} from '../../utils/https/auth';
import {signIn, signedIn, signUp, signOut} from './actionString';

export const loginAction = body => {
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

export const registerAction = body => {
  return {
    type: signUp,
    payload: postRegister(body),
  };
};

export const logoutAction = () => {
  return {
    type: signOut,
    payload: deleteLogout(),
  };
};
