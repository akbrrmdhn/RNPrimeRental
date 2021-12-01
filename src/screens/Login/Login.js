import React, {Component} from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
  ToastAndroid,
} from 'react-native';
import Style from './Style';
import LoginBackground from '../../assets/images/Login.jpg';
import {TextInput} from 'react-native-gesture-handler';
import socket from '../../utils/SocketIo';
import PushNotification from 'react-native-push-notification';
import {connect} from 'react-redux';
import {loginAction} from '../../redux/actionCreators/auth';

export class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  };
  submitLogin = () => {
    if (this.state.email === '') {
      return ToastAndroid.show('Email must not be empty!', ToastAndroid.LONG);
    }
    if (this.state.password === '') {
      return ToastAndroid.show(
        'Password must not be empty!',
        ToastAndroid.LONG,
      );
    }

    const form = new URLSearchParams();
    form.append('email', this.state.email);
    form.append('password', this.state.password);
    this.props.onLogin(form);
  };
  componentDidMount() {
    this.props.auth.isFulfilled = false;
    this.props.auth.isRejected = false;
    if (this.props.auth.isLogin) {
      this.props.navigation.push('BottomTabs');
    }
  }
  setError = msg => {
    this.setState({error: msg});
  };
  componentDidUpdate() {
    if (this.props.auth.isRejected === true) {
      if (String(this.props.auth.error.message).includes('401')) {
        return ToastAndroid.show(
          'Incorrect Email or Password',
          ToastAndroid.SHORT,
        );
      }
    }
    if (this.props.auth.isFulfilled === true) {
      socket.on('connect');
      socket.on(this.props.auth.authInfo.user_id, data => {
        PushNotification.localNotification({
          channelId: 'chat-channel',
          title: 'Message from' + data.sender_name,
          message: data.message,
        });
      });
      this.props.navigation.push('BottomTabs');
    }
  }
  render() {
    return (
      <View style={Style.container}>
        <ImageBackground
          source={LoginBackground}
          resizeMode="cover"
          style={Style.image}>
          <Text style={Style.heading}> LET'S EXPLORE{'\n'} THE WORLD </Text>
          <View style={Style.content}>
            <TextInput
              placeholder="Email"
              style={Style.textInput}
              placeholderTextColor="black"
              onChangeText={text => this.setState({email: text})}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              style={Style.textInput}
              placeholderTextColor="black"
              onChangeText={text =>
                this.setState({
                  password: text,
                })
              }
            />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ForgotPassword')}>
              <Text style={Style.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            {this.state.error ? (
              <View style={Style.wrapperError}>
                <Text style={Style.textError}>{this.state.error}</Text>
              </View>
            ) : (
              <View />
            )}
            <TouchableOpacity
              style={Style.loginButton}
              onPress={() => this.submitLogin()}>
              <Text style={Style.loginText}>Login</Text>
            </TouchableOpacity>
            <View style={Style.dontHave}>
              <Text style={Style.dontHaveText}>Don't Have account? </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Signup')}>
                <Text style={Style.signupText}>Sign up now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
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
    onLogin: body => {
      dispatch(loginAction(body));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
