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
  cardHeading: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#C4C4C4',
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
  itemName: {
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    fontSize: 12,
  },
  itemDate: {
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
  },
  itemPrice: {
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    fontSize: 12,
  },
  itemStatus: {
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    color: 'green',
  },
  checkBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
