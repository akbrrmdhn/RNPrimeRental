import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import signupBackground from '../../assets/images/signup.jpg';
import Style from './Style';
export class Signup extends Component {
  render() {
    return (
      <View style={Style.container}>
        <ImageBackground
          source={signupBackground}
          resizeMode="cover"
          style={Style.image}>
          <Text style={Style.heading}>LET'S HAVE{'\n'}SOME RIDE</Text>
          <View style={Style.content}>
            <TextInput
              style={Style.textInput}
              placeholderTextColor="black"
              placeholder="Email"
            />
            <TextInput style={Style.textInput} placeholder="Mobile Phone" />
            <TextInput
              secureTextEntry={true}
              style={Style.textInput}
              placeholder="Password"
            />
            <TouchableOpacity style={Style.signupButton}>
              <Text style={Style.signupText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={Style.alreadyHave}>
              <Text style={Style.alreadyText}>Already have an account? </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={Style.loginText}>Login Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Signup;
