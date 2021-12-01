import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import reduxStore from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import Login from './src/screens/Login/Login';
import Signup from './src/screens/Signup/Signup';
import BottomTabs from './src/components/BottomTabs';
import UpdateProfile from './src/screens/UpdateProfile/UpdateProfile';
import Details from './src/screens/Details/Details';
import Payment from './src/screens/Payment/Payment';
import Payment2 from './src/screens/Payment/Payment2';
import Payment3 from './src/screens/Payment/Payment3';
import ViewMore from './src/screens/ViewMore/ViewMore';
import Search from './src/screens/Search/Search';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import AddItem from './src/screens/AddItem/AddItem';
import EditItem from './src/screens/EditItem/EditItem';
import Filter from './src/screens/Filter/Filter';
import {NativeBaseProvider} from 'native-base';
import Favourites from './src/screens/Favourites/Favourites';
import UpdatePassword from './src/screens/UpdatePassword/UpdatePassword';
import ForgotPassword from './src/screens/ForgotPass/ForgotPassword/ForgotPassword';
import ChangePassword from './src/screens/ForgotPass/ChangePassword/ChangePassword';
import CheckCode from './src/screens/ForgotPass/CheckCode/CheckCode';
import {black} from 'react-native-paper/lib/typescript/styles/colors';

const redux = reduxStore();

const App = () => {
  const {Navigator: StackNav, Screen: StackScreen} = createStackNavigator();
  return (
    <Provider store={redux.store}>
      <PersistGate persistor={redux.persistor}>
        <NativeBaseProvider>
          <NavigationContainer>
            <StackNav
              initialRouteName="SplashScreen"
              screenOptions={{headerTintColor: '#FFF'}}>
              <StackScreen
                name="SplashScreen"
                options={{headerShown: false}}
                component={SplashScreen}
              />
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
                  headerTransparent: true,
                  title: 'Check Code',
                }}
                name="CheckCode">
                {props => <CheckCode {...props} />}
              </StackScreen>
              <StackScreen
                options={{
                  headerShown: true,
                  headerTransparent: true,
                  title: 'Change Password',
                }}
                name="ChangePassword">
                {props => <ChangePassword {...props} />}
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
                options={{
                  headerShown: true,
                  headerTransparent: true,
                  title: '',
                  headerTintColor: 'black',
                }}
                name="Details">
                {props => <Details {...props} />}
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
              <StackScreen
                options={({route}) => ({
                  headerShown: true,
                  headerTintColor: '#000',
                  title: route.params.name,
                })}
                name="ViewMore">
                {props => <ViewMore {...props} />}
              </StackScreen>
              <StackScreen options={{headerShown: false}} name="Search">
                {props => <Search {...props} />}
              </StackScreen>
              <StackScreen
                name="AddItem"
                options={{headerTintColor: 'black', title: 'Add New Item'}}
                component={AddItem}
              />
              <StackScreen name="EditItem" options={{headerShown: false}}>
                {props => <EditItem {...props} />}
              </StackScreen>
              <StackScreen
                name="Favourites"
                options={{
                  headerShown: true,
                  headerTransparent: false,
                  headerTintColor: 'black',
                }}>
                {props => <Favourites {...props} />}
              </StackScreen>
              <StackScreen name="UpdatePassword">
                {props => <UpdatePassword {...props} />}
              </StackScreen>
              <StackScreen
                name="Filter"
                options={{
                  headerShown: true,
                  title: 'Filter',
                  headerTintColor: '#393939',
                }}>
                {props => <Filter {...props} />}
              </StackScreen>
            </StackNav>
          </NavigationContainer>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
