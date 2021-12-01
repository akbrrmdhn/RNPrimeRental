import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import Style from './Style';
import socket from '../../utils/SocketIo';
import primeRentalLogo from '../../assets/images/primerental.png';
import PushNotification from 'react-native-push-notification';
import {useSelector} from 'react-redux';
const SplashScreen = ({navigation}) => {
  const auth = useSelector(reduxState => reduxState.auth);
  const createChannel = () => {
    PushNotification.createChannel({
      channelId: 'chat-channel',
      channelName: 'Chat',
    });
  };
  useEffect(
    () => {
      createChannel();
      auth.token !== ''
        ? setTimeout(() => {
            socket.on('connect');
            socket.on(auth.authInfo.user_id, data => {
              PushNotification.localNotification({
                channelId: 'chat-channel',
                title: 'Message from' + data.sender_name,
                message: data.message,
              });
            });
            navigation.replace('BottomTabs');
          }, 1000)
        : setTimeout(() => {
            navigation.replace('BottomTabs');
            socket.off(auth.authInfo.user_id);
          }, 1000);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  return (
    <View style={Style.container}>
      <Image source={primeRentalLogo} resizeMode="cover" style={Style.image} />
    </View>
  );
};

export default SplashScreen;
