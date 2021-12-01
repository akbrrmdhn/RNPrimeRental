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
import {checkCode} from '../../../utils/https/users';
export class CheckCode extends Component {
  state = {
    email: this.props.route.params.email,
    code: '',
  };
  codeHandler = () => {
    console.log(this.state.email);
    console.log(this.state.code);
    const body = {email: this.state.email, code: this.state.code};
    checkCode(body)
      .then(result =>
        setTimeout(
          () =>
            this.props.navigation.navigate('ChangePassword', {
              email: this.state.email,
              code: this.state.code,
            }),
          2000,
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
              Please submit the code that you've received from the email.
            </Text>
            <TextInput
              style={Style.textInput}
              placeholderTextColor="black"
              placeholder="Your code..."
              onChangeText={text => this.setState({code: text})}
            />
            <TouchableOpacity
              style={Style.sendButton}
              onPress={() => this.codeHandler()}>
              <Text style={Style.sendText}>Submit Code</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default CheckCode;
