import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Style from './Style';
import IoniconsIcon from '../../../node_modules/react-native-vector-icons/Ionicons';

export class Profile extends Component {
  render() {
    return (
      <View style={Style.container}>
        <View style={Style.content}>
          <View style={Style.menuItem}>
            <TouchableOpacity style={Style.pressUpdate}>
              <Text style={Style.menuText}>Your Favourites</Text>
              <IoniconsIcon name="chevron-forward" size={30} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={Style.menuItem}>
            <TouchableOpacity style={Style.pressUpdate}>
              <Text style={Style.menuText}>FAQ</Text>
              <IoniconsIcon name="chevron-forward" size={30} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={Style.menuItem}>
            <TouchableOpacity style={Style.pressUpdate}>
              <Text style={Style.menuText}>Help</Text>
              <IoniconsIcon name="chevron-forward" size={30} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={Style.menuItem}>
            <TouchableOpacity
              style={Style.pressUpdate}
              onPressOut={() => this.props.navigation.push('UpdateProfile')}>
              <Text style={Style.menuText}>Update Profile</Text>
              <IoniconsIcon name="chevron-forward" size={30} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={Style.logout}>
            <TouchableOpacity
              style={Style.logoutButton}
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={Style.logoutText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Profile;
