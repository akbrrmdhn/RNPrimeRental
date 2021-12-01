import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import signupBackground from '../../assets/images/signup.jpg';
import Style from './Style';
// import {postRegister} from '../../utils/https/auth';
import {registerAction} from '../../redux/actionCreators/auth';
import {connect} from 'react-redux';
export class Signup extends Component {
  state = {
    email: '',
    phone: '',
    password: '',
    error: '',
  };
  submitRegister = () => {
    if (this.state.email === '') {
      return ToastAndroid.show('Email must not be empty!', ToastAndroid.SHORT);
    }
    if (this.state.phone === '') {
      return ToastAndroid.show(
        'Phone number must not be empty!',
        ToastAndroid.SHORT,
      );
    }
    if (this.state.password === '') {
      return ToastAndroid.show(
        'Password must not be empty!',
        ToastAndroid.SHORT,
      );
    }

    const queries = new URLSearchParams();
    queries.append('email', this.state.email);
    queries.append('phone', this.state.phone);
    queries.append('password', this.state.password);
    console.log(queries);
    this.props.onSignup(queries);
  };
  componentDidUpdate() {
    if (this.props.auth.isRejected) {
      if (String(this.props.auth.error.message).includes('409')) {
        this.setError('Email or phone already taken.');
      }
    }
    if (this.props.auth.isFulfilled) {
      ToastAndroid.show('Account created successfully', ToastAndroid.SHORT);
      this.props.navigation.replace('Login');
    }
  }
  setError = msg => {
    this.setState({error: msg});
  };
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
              onChangeText={text => this.setState({email: text})}
            />
            <TextInput
              style={Style.textInput}
              placeholderTextColor="black"
              placeholder="Mobile Phone"
              keyboardType="number-pad"
              maxLength={12}
              onChangeText={text => this.setState({phone: text})}
            />
            <TextInput
              secureTextEntry={true}
              style={Style.textInput}
              placeholderTextColor="black"
              placeholder="Password"
              onChangeText={text => this.setState({password: text})}
            />
            {this.state.error ? (
              <View style={Style.wrapperError}>
                <Text style={Style.textError}>{this.state.error}</Text>
              </View>
            ) : (
              <View />
            )}
            <TouchableOpacity
              style={Style.signupButton}
              onPress={() => this.submitRegister()}>
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

const mapStateToProps = ({auth}) => {
  return {
    auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignup: body => {
      dispatch(registerAction(body));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
