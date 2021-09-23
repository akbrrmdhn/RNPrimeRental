import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Style from './Style';

export class Profile extends Component {
  render() {
    return (
      <View style={Style.container}>
        <View style={Style.content}>
          <View style={Style.menu}>
            <Text>Your Favourites</Text>
            <Text>{'>'}</Text>
          </View>
          <View style={Style.menu}>
            <Text>FAQ</Text>
            <Text>{'>'}</Text>
          </View>
          <View style={Style.menu}>
            <Text>Help</Text>
            <Text>{'>'}</Text>
          </View>
          <View style={Style.menu}>
            <Text>Update Profile</Text>
            <Text>{'>'}</Text>
          </View>
          <View style={Style.logout}>
            <TouchableOpacity style={Style.logoutButton}>
              <Text style={Style.logoutText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Profile;
