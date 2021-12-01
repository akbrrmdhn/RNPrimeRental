import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from 'react-native';
import Style from './Style';
import Axios from 'axios';
import config from '../../../config';
import {connect} from 'react-redux';

class UpdatePassword extends Component {
  state = {
    oldPass: '',
    newPass: '',
    repeatPass: '',
  };

  updateHandler = () => {
    const url = config.API_URL;
    const id = this.props.auth.authInfo.user_id;
    const queries = new URLSearchParams();
    queries.append('oldPass', this.state.oldPass);
    queries.append('newPass', this.state.newPass);
    Axios.patch(`${url}/users/password/${id}`, queries);
  };
  componentDidUpdate() {
    if (this.props.auth.isFulfilled) {
      ToastAndroid.show('Password updated successfully.', ToastAndroid.SHORT);
      this.props.navigation.pop();
    }
  }
  promptUser = () => {
    const title = 'Update Password';
    const message = 'Do you really want to update your password?';
    const buttons = [
      {
        text: 'No',
        type: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => this.updateHandler(),
      },
    ];
    Alert.alert(title, message, buttons);
  };

  render() {
    return (
      <View style={Style.container}>
        <View style={Style.passwordArea}>
          <Text>Old Password</Text>
          <TextInput
            style={Style.textInput}
            placeholder="Old password"
            secureTextEntry
            onChangeText={text => this.setState({oldPass: text})}
          />
          <Text>New Password</Text>
          <TextInput
            style={Style.textInput}
            placeholder="New password"
            secureTextEntry
            onChangeText={text => this.setState({newPass: text})}
          />
          <Text>Repeat New Password</Text>
          <TextInput
            style={Style.textInput}
            placeholder="Repeat new password"
            secureTextEntry
            onChangeText={text => this.setState({repeatPass: text})}
          />
        </View>
        <View style={Style.buttonArea}>
          <TouchableOpacity
            style={Style.submitButton}
            onPress={() => this.promptUser()}>
            <Text style={Style.submitText}>Change Password</Text>
          </TouchableOpacity>
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

export default connect(mapStateToProps)(UpdatePassword);
