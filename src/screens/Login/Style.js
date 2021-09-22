import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
  },
  heading: {
    fontFamily: 'roboto-black',
    color: '#fff',
    fontSize: 36,
    marginBottom: 75,
    paddingLeft: 20,
  },
  content: {
    marginTop: 70,
    alignItems: 'center',
  },
  textInput: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(250, 250, 250, 0.4)',
    width: '80%',
    fontFamily: 'nunito-regular',
  },
  forgotPassword: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'left',
    marginVertical: 20,
    paddingRight: 160,
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#FFCD61',
    width: '80%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 50,
  },
  loginText: {
    textAlign: 'center',
    fontFamily: 'nunito-black',
    fontSize: 18,
  },
  dontHave: {
    flexDirection: 'row',
  },
  dontHaveText: {
    fontFamily: 'nunito-regular',
    color: '#FFF',
    fontSize: 14,
  },
  signupText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'nunito-regular',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
