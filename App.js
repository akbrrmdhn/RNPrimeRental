import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import reduxStore from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {Profile} from './src/screens/Profile/Profile';
import Login from './src/screens/Login/Login';
import Signup from './src/screens/Signup/Signup';
import ForgotPassword from './src/screens/ForgotPassword/ForgotPassword';
import BottomTabs from './src/components/BottomTabs';
import UpdateProfile from './src/screens/UpdateProfile/UpdateProfile';
import Order from './src/screens/Order/Order';
import Payment from './src/screens/Payment/Payment';
import Payment2 from './src/screens/Payment/Payment2';
import Payment3 from './src/screens/Payment/Payment3';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';

const redux = reduxStore();

const App = () => {
  const {Navigator: StackNav, Screen: StackScreen} = createStackNavigator();
  return (
    <Provider store={redux.store}>
      <PersistGate persistor={redux.persistor}>
        <NavigationContainer>
          <StackNav
            initialRouteName="SplashScreen"
            screenOptions={{headerTintColor: '#FFF'}}>
            <StackScreen
              name="SplashScreen"
              options={{headerShown: false}}
              component={SplashScreen}
            />
            <StackScreen name="Profile" component={Profile} />
            <StackScreen options={{headerShown: false}} name="BottomTabs">
              {props => <BottomTabs {...props} />}
            </StackScreen>
            <StackScreen options={{headerShown: false}} name="Login">
              {props => <Login {...props} />}
            </StackScreen>
            <StackScreen options={{headerShown: false}} name="Signup">
              {props => <Signup {...props} />}
            </StackScreen>
            <StackScreen
              options={{
                headerShown: true,
                headerTransparent: true,
                title: 'Forgot Password',
              }}
              name="ForgotPassword">
              {props => <ForgotPassword {...props} />}
            </StackScreen>
            <StackScreen
              options={{
                headerShown: true,
                title: 'Update Profile',
                headerTintColor: '#393939',
              }}
              name="UpdateProfile">
              {props => <UpdateProfile {...props} />}
            </StackScreen>
            <StackScreen
              options={{headerShown: true, headerTransparent: true, title: ''}}
              name="Order">
              {props => <Order {...props} />}
            </StackScreen>
            <StackScreen
              options={{
                headerShown: true,
                title: 'Payment',
                headerTintColor: '#393939',
              }}
              name="Payment">
              {props => <Payment {...props} />}
            </StackScreen>
            <StackScreen
              options={{
                headerShown: true,
                title: 'Payment',
                headerTintColor: '#393939',
              }}
              name="Payment2">
              {props => <Payment2 {...props} />}
            </StackScreen>
            <StackScreen
              options={{
                headerShown: true,
                title: 'Payment',
                headerTintColor: '#393939',
              }}
              name="Payment3">
              {props => <Payment3 {...props} />}
            </StackScreen>
          </StackNav>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
