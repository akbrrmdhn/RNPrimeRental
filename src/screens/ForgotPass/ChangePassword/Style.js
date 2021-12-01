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
    color: '#FFF',
    fontSize: 36,
    marginTop: 100,
    padding: 25,
    textAlign: 'center',
  },
  content: {
    marginTop: 70,
    alignItems: 'center',
  },
  enterEmailText: {
    fontFamily: 'Nunito-Regular',
    color: '#FFF',
  },
  textInput: {
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(250, 250, 250, 0.6)',
    width: '80%',
    fontFamily: 'Nunito-Regular',
    color: '#000',
    paddingHorizontal: 15,
  },
  sendButton: {
    marginVertical: 20,
    backgroundColor: '#FFCD61',
    width: '80%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendText: {
    fontFamily: 'Nunito-Black',
    fontSize: 18,
  },
  resendButton: {
    backgroundColor: '#FFF',
    width: '80%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
