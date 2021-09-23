import React, {Component} from 'react';
import {TouchableOpacity, ImageBackground, Text, View} from 'react-native';
import Style from './Style';
import LoginBackground from '../../assets/images/Login.jpg';
import {TextInput} from 'react-native-gesture-handler';

export class Login extends Component {
  render() {
    return (
      <View style={Style.container}>
        <ImageBackground
          source={LoginBackground}
          resizeMode="cover"
          style={Style.image}>
          <Text style={Style.heading}> LET'S EXPLORE{'\n'} THE WORLD </Text>
          <View style={Style.content}>
            <TextInput placeholder="Email" style={Style.textInput} />
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              style={Style.textInput}
            />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ForgotPassword')}>
              <Text style={Style.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Style.loginButton}
              onPress={() => this.props.navigation.navigate('BottomTabs')}>
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

export default Login;
