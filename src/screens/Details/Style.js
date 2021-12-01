import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    height: '100%',
  },
  content: {
    margin: 10,
    paddingBottom: 300,
  },
  image: {
    width: '100%',
    height: '20%',
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
    marginVertical: 5,
  },
  availableText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    marginVertical: 10,
    color: 'green',
  },
  fullBookedText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    marginVertical: 10,
    color: 'red',
  },
  locationDistance: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginTop: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reserveButton: {
    backgroundColor: '#FFCD61',
    justifyContent: 'center',
    alignItems: 'center',
    height: '35%',
    width: '80%',
    borderRadius: 10,
  },
  date: {
    marginTop: 10,
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
    width: '50%',
    height: '80%',
    fontFamily: 'Nunito-Regular',
  },
  reserveText: {
    fontFamily: 'Nunito-Black',
    fontSize: 24,
    marginVertical: 10,
  },
  stockSection: {
    marginVertical: 10,
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
  },
  sectionHeading: {
    fontFamily: 'Nunito-Black',
    fontSize: 17,
  },
  statusPickerView: {
    borderRadius: 10,
    backgroundColor: 'rgba(240, 240, 240, 1)',
    width: '100%',
    height: '10%',
    fontFamily: 'Nunito-Regular',
    marginVertical: 10,
  },
});
