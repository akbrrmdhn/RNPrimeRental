import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    marginHorizontal: 20,
  },
  mainData: {
    alignItems: 'center',
    height: 250,
    marginVertical: 20,
  },
  image: {
    height: 100,
    width: 100,
    marginVertical: 10,
  },
  addPictureButton: {
    marginVertical: 10,
    backgroundColor: '#393939',
    borderRadius: 10,
    width: '35%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPictureText: {
    color: '#FFCD61',
    fontFamily: 'Nunito-Black',
    fontSize: 10,
  },
  textInput: {
    width: '70%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    textAlign: 'center',
  },
  sections: {
    marginVertical: 20,
  },
  sectionHeading: {
    fontFamily: 'Nunito-Black',
    fontSize: 17,
  },
  descriptionTextInput: {
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  pickerView: {
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: 'rgba(250, 250, 250, 0.4)',
    // height: '100%',
    width: '100%',
    fontFamily: 'Nunito-Regular',
    borderColor: 'black',
    borderWidth: 1,
  },
  stockSection: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  counter: {
    flexDirection: 'row',
    width: 150,
    justifyContent: 'space-between',
  },
  counterButton: {
    backgroundColor: '#FFCD61',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  buttons: {
    flexDirection: 'row',
  },
  submitSection: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCD61',
    borderRadius: 10,
    width: '100%',
    height: 50,
  },
  submitText: {
    fontFamily: 'Nunito-Black',
    fontSize: 17,
    color: '#393939',
  },
});
