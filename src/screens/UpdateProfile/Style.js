import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  profileAvatar: {
    borderRadius: 70,
    width: 100,
    height: 100,
  },
  profileImageSet: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1,
    marginBottom: -100,
  },
  imageButtons: {
    justifyContent: 'space-evenly',
    height: '50%',
  },
  takeButton: {
    backgroundColor: '#393939',
    justifyContent: 'center',
    alignItems: 'center',
    width: '110%',
    height: '30%',
    borderRadius: 10,
  },
  browseButton: {
    backgroundColor: '#FFCD61',
    justifyContent: 'center',
    alignItems: 'center',
    width: '110%',
    height: '30%',
    borderRadius: 10,
  },
  takeText: {
    color: '#FFCD61',
    fontFamily: 'Nunito-Black',
    fontSize: 13,
  },
  browseText: {
    color: '#393939',
    fontFamily: 'Nunito-Black',
    fontSize: 13,
  },
  updateContent: {
    margin: 20,
    flex: 1,
    paddingBottom: '80%',
  },
  genders: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  radioStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inputLabel: {
    fontFamily: 'Nunito-Black',
    fontSize: 13,
    color: '#B8B8B8',
  },
  textInput: {
    borderBottomColor: '#393939',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#FFCD61',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25%',
    borderRadius: 10,
  },
  submitText: {
    fontFamily: 'Nunito-Black',
    fontSize: 24,
  },
});
