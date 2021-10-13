import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    marginHorizontal: 5,
  },
  textInput: {
    fontFamily: 'Nunito-Regular',
    borderBottomColor: '#393939',
    borderBottomWidth: 1,
  },
  filter: {
    marginTop: 10,
    flexDirection: 'row',
  },
  filterText: {
    paddingLeft: 20,
    fontFamily: 'Nunito-Regular',
  },
  detailsCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: -30,
    marginHorizontal: 10,
    height: 150,
  },
  cardImage: {
    width: 150,
    height: '60%',
    borderRadius: 10,
  },
  itemName: {
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    fontSize: 12,
  },
  itemDescription: {
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    flexShrink: 1,
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
});
