import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import Style from './Style';
import primeRentalLogo from '../../assets/images/primerental.png';
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, [navigation]);
  return (
    <View style={Style.container}>
      <Image source={primeRentalLogo} resizeMode="cover" style={Style.image} />
    </View>
  );
};

export default SplashScreen;
