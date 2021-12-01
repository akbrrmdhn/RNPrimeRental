import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollView: {
    marginHorizontal: 10,
  },
  profileAvatar: {
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  profileImageSet: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 150,
  },
  imageButtons: {
    justifyContent: 'space-evenly',
    height: '100%',
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
    paddingBottom: '20%',
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
    marginVertical: 10,
  },
  textInput: {
    borderBottomColor: '#393939',
    borderBottomWidth: 1,
    marginBottom: 10,
    fontFamily: 'Nunito-Regular',
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: '#FFCD61',
    justifyContent: 'center',
    alignItems: 'center',
    height: '12%',
    borderRadius: 10,
  },
  submitText: {
    fontFamily: 'Nunito-Black',
    fontSize: 24,
  },
  datePicker: {
    marginTop: 20,
    width: '100%',
    height: 20,
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: 'rgba(240, 240, 240, 0.4)',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
