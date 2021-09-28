import {signIn} from '../actionCreators/actionString';
import {ActionType} from 'redux-promise-middleware';
import {storeData} from '../../utils/AsyncStorage';

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
      };
    case signIn.concat('_', Rejected):
      return {
        ...prevState,
        isPending: false,
        isFulfilled: false,
        isRejected: true,
        isLogin: false,
        error: action.payload,
      };
    case signIn.concat('_', Fulfilled):
      storeData('token', action.payload.data.result.token);
      storeData('userInfo', '');
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        isLogin: true,
        authInfo: action.payload.data.result.userInfo,
        token: action.payload.data.result.token,
      };
  }
};

export default authReducer;
