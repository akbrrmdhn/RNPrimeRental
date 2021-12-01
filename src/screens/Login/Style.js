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
    fontFamily: 'Roboto-Black',
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
    paddingHorizontal: 10,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(250, 250, 250, 0.7)',
    width: '80%',
    fontFamily: 'Nunito-Regular',
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
    fontFamily: 'Nunito-Black',
    fontSize: 18,
  },
  dontHave: {
    flexDirection: 'row',
  },
  dontHaveText: {
    fontFamily: 'Nunito-Regular',
    color: '#FFF',
    fontSize: 14,
  },
  signupText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  wrapperError: {
    alignItems: 'center',
    marginVertical: 20,
  },
  textError: {
    color: '#FF5B37',
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
  },
});
