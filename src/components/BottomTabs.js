import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IoniconsIcon from '../../node_modules/react-native-vector-icons/Ionicons';

import Home from '../screens/Home/Home';
import History from '../screens/History/History';
import Chat from '../screens/Chat/Chat';
import Profile from '../screens/Profile/Profile';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import person from '../assets/images/person.jpg';
import config from '../../config';
import Style from './BottomTabsStyle';

const Tab = createBottomTabNavigator();

const BottomTabs = props => {
  const url = config.API_URL;
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
          tabBarIcon: ({focused}) => (
            <View>
              <IoniconsIcon
                name="person-sharp"
                size={20}
                color={focused ? '#FFCD61' : '#DFDEDE'}
              />
            </View>
          ),
          headerShown: true,
          title: (
            <View style={Style.container}>
              <Image
                source={
                  `${url}${props.auth.authInfo.image}`
                    ? {uri: `${url}${props.auth.authInfo.image}`}
                    : person
                }
                resizeMode="cover"
                style={Style.profileAvatar}
              />
              <Text style={Style.name}>{props.auth.authInfo.name}</Text>
            </View>
          ),
          headerStyle: {height: 100},
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

const mapStateToProps = ({auth}) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(BottomTabs);
