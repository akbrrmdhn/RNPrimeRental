import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    width: '100%',
    top: 0,
    bottom: '60%',
  },
  content: {
    justifyContent: 'space-evenly',
  },
  vehicleFinder: {
    backgroundColor: '#393939',
    top: '70%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  finderFirstRow: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-evenly',
  },
  finderSecondRow: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 30,
    justifyContent: 'space-evenly',
  },
  locationTextInput: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(250, 250, 250, 0.4)',
    width: '50%',
    fontFamily: 'Nunito-Regular',
  },
  typeTextInput: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(250, 250, 250, 0.4)',
    width: '30%',
    fontFamily: 'Nunito-Regular',
  },
  finderArea: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  finderButton: {
    backgroundColor: '#FFCD61',
    width: '80%',
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  finderText: {
    fontFamily: 'Nunito-Black',
    fontSize: 18,
  },
  recommended: {
    top: 200,
  },
  recommendedHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
});
