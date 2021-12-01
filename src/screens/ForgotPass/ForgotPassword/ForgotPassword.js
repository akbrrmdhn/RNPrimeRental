import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Style from './Style';
import ForgotPasswordBackground from '../../../assets/images/forgotpassword.jpg';
import {forgotPassword} from '../../../utils/https/users';
export class ForgotPassword extends Component {
  state = {
    email: '',
  };
  codeHandler = () => {
    console.log(this.state.email);
    const body = {email: this.state.email};
    forgotPassword(body)
      .then(result =>
        setTimeout(
          () =>
            this.props.navigation.navigate('CheckCode', {
              email: this.state.email,
            }),
          5000,
        ),
      )
      .catch(err => console.log(err));
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
              placeholder="Enter your email address"
              onChangeText={text => this.setState({email: text})}
            />
            <TouchableOpacity
              style={Style.sendButton}
              onPress={() => this.codeHandler()}>
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
