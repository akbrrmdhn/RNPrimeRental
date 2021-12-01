import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from 'react-native';
import Style from './Style';
import ForgotPasswordBackground from '../../../assets/images/forgotpassword.jpg';
import {changePassword} from '../../../utils/https/users';
export class ChangePassword extends Component {
  state = {
    email: this.props.route.params.email,
    code: this.props.route.params.code,
    password: '',
    error: '',
    confirm: '',
  };
  codeHandler = () => {
    console.log(this.state.password.length);
    if (this.state.password.length < 5) {
      return this.setState({error: 'Password must be 5 characters or longer.'});
    } else if (this.state.password !== this.state.confirm) {
      return this.setState({error: "Password doesn't match"});
    } else {
      const body = {
        email: this.state.email,
        code: this.state.code,
        password: this.state.password,
      };
      changePassword(body)
        .then(
          result =>
            ToastAndroid.show(
              'Password changed successfully',
              ToastAndroid.SHORT,
            ),
          setTimeout(() => this.props.navigation.replace('Login'), 500),
        )
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
      <View style={Style.container}>
        <ImageBackground
          source={ForgotPasswordBackground}
          resizeMode="cover"
          style={Style.image}>
          <Text style={Style.heading}>THAT'S OKAY, WE{'\n'}GOT YOUR BACK</Text>
          <View style={Style.content}>
            <Text style={Style.enterEmailText}>
              Enter your email to get reset password code
            </Text>
            <TextInput
              style={Style.textInput}
              placeholderTextColor="black"
              placeholder="New Password"
              secureTextEntry
              onChangeText={text => this.setState({password: text})}
            />
            <TextInput
              style={Style.textInput}
              placeholderTextColor="black"
              placeholder="Confirm new Password..."
              secureTextEntry
              onChangeText={text => this.setState({confirm: text})}
            />
            {this.state.error ? (
              <View style={Style.wrapperError}>
                <Text style={Style.textError}>{this.state.error}</Text>
              </View>
            ) : (
              <View />
            )}
            <TouchableOpacity
              style={Style.sendButton}
              onPress={() => this.codeHandler()}>
              <Text style={Style.sendText}>Change Password</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default ChangePassword;
