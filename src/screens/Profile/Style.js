import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    margin: 10,
  },
  head: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  profileAvatar: {
    marginHorizontal: 10,
    borderRadius: 50,
    width: '20%',
    height: '70%',
  },
  name: {
    marginHorizontal: 30,
    fontFamily: 'Nunit0-Black',
    fontSize: 22,
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
    marginTop: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCD61',
    height: '20%',
    width: '80%',
    borderRadius: 10,
  },
  logoutText: {
    fontFamily: 'Nunito-Black',
    fontSize: 24,
  },
});
