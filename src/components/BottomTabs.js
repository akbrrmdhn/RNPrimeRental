import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IoniconsIcon from '../../node_modules/react-native-vector-icons/Ionicons';

import {Home} from '../screens/Home/Home';
import {History} from '../screens/History/History';
import {Chat} from '../screens/Chat/Chat';
import {Profile} from '../screens/Profile/Profile';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarShowLabel: false}}
      initialRouteName="Home">
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name="home"
                size={20}
                color={focused ? '#FFCD61' : '#DFDEDE'}
              />
            </View>
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <IoniconsIcon
                name="newspaper"
                size={20}
                color={focused ? '#FFCD61' : '#DFDEDE'}
              />
            </View>
          ),
        }}
        name="History"
        component={History}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          tabBarIcon: ({focused}) => (
            <View>
              <IoniconsIcon
                name="chatbubble"
                size={20}
                color={focused ? '#FFCD61' : '#DFDEDE'}
              />
            </View>
          ),
        }}
        name="Chat"
        component={Chat}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          title: 'Profile',
          tabBarIcon: ({focused}) => (
            <View>
              <IoniconsIcon
                name="person-sharp"
                size={20}
                color={focused ? '#FFCD61' : '#DFDEDE'}
              />
            </View>
          ),
        }}
        name="Profile"
        component={Profile}
      />
      {/* <Tab.Screen name="ProfileStack" component={ProfileStack} /> */}
    </Tab.Navigator>
  );
};

export default BottomTabs;
