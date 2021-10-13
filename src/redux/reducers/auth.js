import {
  signIn,
  signOut,
  signUp,
  updateProfile,
} from '../actionCreators/actionString';
import {ActionType} from 'redux-promise-middleware';

const initialState = {
  authInfo: {},
  token: '',
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  isLogin: false,
  error: {},
};

const authReducer = (prevState = initialState, action) => {
  const {Pending, Fulfilled, Rejected} = ActionType;

  switch (action.type) {
    case signIn.concat('_', Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
        isLogin: false,
      };
    case signIn.concat('_', Rejected):
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        isLogin: false,
        error: action.payload,
      };
    case signIn.concat('_', Fulfilled):
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        isLogin: true,
        authInfo: action.payload.data.result.userInfo,
        token: action.payload.data.result.token,
      };
    case signUp.concat('_', Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case signUp.concat('_', Rejected):
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        error: action.payload,
      };
    case signUp.concat('_', Fulfilled):
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
      };
    case signOut.concat('_', Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case signOut.concat('_', Rejected):
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        error: action.payload,
      };
    case signOut.concat('_', Fulfilled):
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        authInfo: {},
        isLogin: false,
        token: '',
      };
    case updateProfile.concat('_', Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case updateProfile.concat('_', Rejected):
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        error: action.payload,
      };
    case updateProfile.concat('_', Fulfilled):
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        authInfo: action.payload.data.result,
      };
    default:
      return prevState;
  }
};

export default authReducer;
