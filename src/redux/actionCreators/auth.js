import {deleteLogout, postLogin, postRegister} from '../../utils/https/auth';
import {postUpdateProfile} from '../../utils/https/users';
import {signIn, signedIn, signUp, signOut, updateProfile} from './actionString';

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

export const updateProfileAction = (body, id) => {
  return {
    type: updateProfile,
    payload: postUpdateProfile(body, id),
  };
};

export const logoutAction = () => {
  return {
    type: signOut,
    payload: deleteLogout(),
  };
};
