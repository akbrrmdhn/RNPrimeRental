import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Profile} from './src/screens/Profile/Profile';
import Login from './src/screens/Login/Login';
import Signup from './src/screens/Signup/Signup';
import ForgotPassword from './src/screens/ForgotPassword/ForgotPassword';
import BottomTabs from './src/components/BottomTabs';

const App = () => {
  const {Navigator: StackNav, Screen: StackScreen} = createStackNavigator();
  return (
    <NavigationContainer>
      <StackNav initialRouteName="Login">
        <StackScreen name="Profile">
          {props => <Profile {...props} />}
        </StackScreen>
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
          options={{headerShown: true, headerTransparent: true}}
          name="ForgotPassword">
          {props => <ForgotPassword {...props} />}
        </StackScreen>
        {/* <StackScreen name="BottomTabs">
          {props => <BottomTabs {...props} />}
        </StackScreen> */}
      </StackNav>
    </NavigationContainer>
  );
};

export default App;
