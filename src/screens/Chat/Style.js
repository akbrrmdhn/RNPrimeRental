import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  chatContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: 'rgba(240, 240, 240, 1)',
    width: '80%',
    fontFamily: 'Nunito-Regular',
  },
  chatList: {
    margin: 20,
  },
  chatMessage: {
    margin: 10,
  },
  innerChat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
