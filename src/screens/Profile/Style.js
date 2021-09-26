import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    margin: 10,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  menuItem: {
    marginVertical: 10,
  },
  menuText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
  },
  pressUpdate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logout: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButton: {
    marginTop: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCD61',
    height: '15%',
    width: '80%',
    borderRadius: 10,
  },
  logoutText: {
    fontFamily: 'Nunito-Black',
    fontSize: 24,
  },
});
