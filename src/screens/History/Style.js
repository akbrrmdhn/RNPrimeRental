import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  historyHeading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  historyText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 28,
  },
  historyContent: {
    flexDirection: 'row',
    margin: 20,
  },
  historyCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  cardImage: {
    width: '40%',
    height: '100%',
    borderRadius: 10,
  },
  checkBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
