import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ToastAndroid,
} from 'react-native';
import Style from './Style';
import IoniconsIcon from '../../../node_modules/react-native-vector-icons/Ionicons';

import {connect} from 'react-redux';
import {logoutAction} from '../../redux/actionCreators/auth';
import config from '../../../config';
import person from '../../assets/images/person.jpg';
class Profile extends Component {
  state = {
    image: this.props.auth.authInfo.image,
    name: this.props.auth.authInfo.name,
    userSelection: '',
  };
  logoutHandler = () => {
    this.props.onLogout();
    ToastAndroid.show('Logged out successfully.', ToastAndroid.SHORT);
  };
  promptUser = () => {
    const title = 'Log Out';
    const message = 'Do you really want to log out?';
    const buttons = [
      {
        text: 'No',
        type: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => this.logoutHandler(),
      },
    ];
    Alert.alert(title, message, buttons);
  };

  componentDidMount() {
    if (!this.props.auth.isLogin) {
      this.props.navigation.replace('Login');
    }
  }
  componentDidUpdate() {
    if (!this.props.auth.isLogin) {
      this.props.navigation.replace('Login');
    }
  }
  render() {
    const url = config.API_URL;
    return (
      <View style={Style.container}>
        <View style={Style.content}>
          <View style={Style.head}>
            <Image
              source={
                `${url}${this.state.image}`
                  ? {uri: `${url}${this.state.image}`}
                  : person
              }
              resizeMode="cover"
              style={Style.profileAvatar}
            />
            <Text style={Style.name}>{this.state.name}</Text>
          </View>
          <View style={Style.menuItem}>
            <TouchableOpacity
              style={Style.pressUpdate}
              onPress={() => this.props.navigation.navigate('Favourites')}>
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
              onPress={() => this.promptUser()}>
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
