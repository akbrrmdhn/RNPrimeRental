import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Style from './Style';
import IoniconsIcon from '../../../node_modules/react-native-vector-icons/Ionicons';

import {connect} from 'react-redux';
import {logoutAction} from '../../redux/actionCreators/auth';

export class Profile extends Component {
  logoutHandler = () => {
    this.props.onLogout();
  };
  componentDidUpdate() {
    if (!this.props.auth.isLogin) {
      this.props.navigation.replace('Login');
    }
  }
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
              onPress={() => this.logoutHandler()}>
              <Text style={Style.logoutText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: body => {
      dispatch(logoutAction(body));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
