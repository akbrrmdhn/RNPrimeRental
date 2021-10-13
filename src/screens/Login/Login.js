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

import {connect} from 'react-redux';
import {loginAction} from '../../redux/actionCreators/auth';

export class Login extends Component {
  state = {
    email: '',
    password: '',
  };
  submitLogin = () => {
    if (this.state.email === '') {
      return ToastAndroid.show('Email must not be empty!', ToastAndroid.SHORT);
    }
    if (this.state.password === '') {
      return ToastAndroid.show(
        'Password must not be empty!',
        ToastAndroid.SHORT,
      );
    }

    const form = new URLSearchParams();
    form.append('email', this.state.email);
    form.append('password', this.state.password);
    this.props.onLogin(form);
    ToastAndroid.show('Logged in successfully', ToastAndroid.SHORT);
  };
  componentDidMount() {
    if (this.props.auth.isLogin) {
      this.props.navigation.push('BottomTabs');
    }
  }
  componentDidUpdate() {
    if (this.props.auth.isLogin) {
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
              onChangeText={text => this.setState({email: text})}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              style={Style.textInput}
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
