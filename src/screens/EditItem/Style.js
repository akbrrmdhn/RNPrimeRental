import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    margin: 10,
  },
  image: {
    width: '100%',
    height: '30%',
  },
  itemHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontFamily: 'Nunito-Black',
    fontSize: 28,
  },
  itemMisc: {
    flexDirection: 'row',
  },
  itemMiscText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    marginVertical: 2,
  },
  locationDistance: {
    flexDirection: 'row',
  },
  locationDistanceText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
  },
  selectQty: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reserveButton: {
    backgroundColor: '#FFCD61',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '80%',
    borderRadius: 10,
  },
  date: {
    marginTop: 30,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  datePicker: {
    width: '40%',
    height: '100%',
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: 'rgba(240, 240, 240, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerView: {
    borderRadius: 10,
    backgroundColor: 'rgba(240, 240, 240, 1)',
    width: '40%',
    height: '100%',
    fontFamily: 'Nunito-Regular',
  },
  reserveText: {
    fontFamily: 'Nunito-Black',
    fontSize: 24,
    marginVertical: 10,
  },
  addStockButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  miniButton: {
    backgroundColor: '#FFCD61',
    width: 20,
    height: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stockSection: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stockNum: {
    fontFamily: 'Nunito-Black',
    fontSize: 18,
  },
  counter: {
    flexDirection: 'row',
    width: 150,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  counterButton: {
    backgroundColor: '#FFCD61',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  sectionHeading: {
    fontFamily: 'Nunito-Black',
    fontSize: 17,
  },
});
