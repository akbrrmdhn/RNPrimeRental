import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  filters: {
    marginVertical: 10,
  },
  filterButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterText: {
    fontSize: 18,
    fontFamily: 'Nunito-Regular',
  },
  toggleFilter: {
    flexDirection: 'row',
  },
  applyButton: {
    marginBottom: 30,
    alignItems: 'center',
  },
  buttonBackground: {
    backgroundColor: '#FFCD61',
    borderRadius: 10,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyText: {
    fontFamily: 'Nunito-Black',
    fontSize: 24,
  },
  pickerView: {
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
});
