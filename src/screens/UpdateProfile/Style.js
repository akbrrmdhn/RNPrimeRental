import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollView: {
    margin: 10,
  },
  profileAvatar: {
    borderRadius: 50,
    width: '25%',
    height: '70%',
  },
  profileImageSet: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: '20%',
  },
  imageButtons: {
    justifyContent: 'space-evenly',
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
    marginHorizontal: 20,
    paddingBottom: '45%',
  },
  genders: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  genderText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 13,
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
    fontFamily: 'Nunito-Regular',
  },
  submitButton: {
    backgroundColor: '#FFCD61',
    justifyContent: 'center',
    alignItems: 'center',
    height: '15%',
    borderRadius: 10,
  },
  submitText: {
    fontFamily: 'Nunito-Black',
    fontSize: 24,
  },
});
