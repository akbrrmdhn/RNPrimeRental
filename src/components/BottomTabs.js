import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IoniconsIcon from '../../node_modules/react-native-vector-icons/Ionicons';

import {Home} from '../screens/Home/Home';
import {History} from '../screens/History/History';
import {Chat} from '../screens/Chat/Chat';
import {Profile} from '../screens/Profile/Profile';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
              <Icon name="home" size={20} color="#000" />
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
              <IoniconsIcon name="newspaper" size={20} color="#000" />
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
              <IoniconsIcon name="chatbubble" size={20} color="#000" />
            </View>
          ),
        }}
        name="Chat"
        component={Chat}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          tabBarIcon: ({focused}) => (
            <View>
              <IoniconsIcon name="person-sharp" size={20} color="#000" />
            </View>
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
