import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'space-evenly',
  },
  passwordArea: {
    marginHorizontal: 20,
  },
  buttonArea: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    marginVertical: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
  },
  submitButton: {
    backgroundColor: '#FFCD61',
    width: '80%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    fontFamily: 'Nunito-Black',
    fontSize: 18,
  },
});
