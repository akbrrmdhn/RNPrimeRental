import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Style from './Style';
import ForgotPasswordBackground from '../../assets/images/forgotpassword.jpg';
export class ForgotPassword extends Component {
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
              placeholder="Enter your email address"
            />
            <TouchableOpacity style={Style.sendButton}>
              <Text style={Style.sendText}>Send Code</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.resendButton}>
              <Text style={Style.sendText}>Resend Code</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default ForgotPassword;
