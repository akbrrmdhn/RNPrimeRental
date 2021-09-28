import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    height: 200,
    zIndex: 0,
    // marginTop: 20,
  },
  vehicleFinder: {
    backgroundColor: '#393939',
    marginTop: '-5%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 220,
  },
  finderRow: {
    marginHorizontal: 10,
    marginBottom: 20,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textInput: {
    marginTop: 20,
    borderRadius: 10,
    height: '100%',
    backgroundColor: 'rgba(250, 250, 250, 0.4)',
    width: '50%',
    fontFamily: 'Nunito-Regular',
  },
  pickerView: {
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: 'rgba(250, 250, 250, 0.4)',
    height: '100%',
    width: '40%',
    fontFamily: 'Nunito-Regular',
  },
  findButton: {
    backgroundColor: '#FFCD61',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'Nunito-Black',
    fontSize: 18,
  },
  recommended: {
    marginVertical: 10,
  },
  recommendedHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  cardImage: {
    width: 250,
    height: 150,
    margin: 10,
    borderRadius: 10,
  },
  recommendedTitle: {
    fontFamily: 'Nunito-Black',
    fontSize: 18,
  },
  viewMore: {
    fontFamily: 'Nunito-Black',
    fontSize: 12,
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  datePicker: {
    marginTop: 20,
    width: '50%',
    height: '100%',
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: 'rgba(240, 240, 240, 0.4)',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
