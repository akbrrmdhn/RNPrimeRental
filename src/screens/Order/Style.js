import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  image: {
    width: '100%',
    height: '30%',
  },
  itemHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemMisc: {
    flexDirection: 'row',
  },
  locationDistance: {
    flexDirection: 'row',
  },
  selectQty: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  reserveButton: {
    backgroundColor: '#FFCD61',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    width: '80%',
    borderRadius: 10,
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
