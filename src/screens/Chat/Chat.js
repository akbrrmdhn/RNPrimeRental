import React, {Component} from 'react';
import {Text, View, TextInput, FlatList} from 'react-native';
import Style from './Style';

export class Chat extends Component {
  messages = [
    {
      id: 1,
      title: 'Vespa Rental Jogja',
      message: 'Hey, there are 3 vespa left',
      time: 'Just now',
    },
    {
      id: 2,
      title: 'Lamborghini',
      message: 'Okay, thank you for the good service',
      time: 'Yesterday',
    },
    {
      id: 3,
      title: 'Lamborghini',
      message: 'Okay, thank you for the good service',
      time: 'Yesterday',
    },
    {
      id: 4,
      title: 'Lamborghini',
      message: 'Okay, thank you for the good service',
      time: 'Yesterday',
    },
    {
      id: 5,
      title: 'Lamborghini',
      message: 'Okay, thank you for the good service',
      time: 'Yesterday',
    },
    {
      id: 6,
      title: 'Lamborghini',
      message: 'Okay, thank you for the good service',
      time: 'Yesterday',
    },
    {
      id: 7,
      title: 'Lamborghini',
      message: 'Okay, thank you for the good service',
      time: 'Yesterday',
    },
    {
      id: 8,
      title: 'Lamborghini',
      message: 'Okay, thank you for the good service',
      time: 'Yesterday',
    },
    {
      id: 9,
      title: 'Lamborghini',
      message: 'Okay, thank you for the good service',
      time: 'Yesterday',
    },
  ];
  render() {
    return (
      <View style={Style.container}>
        <View style={Style.chatContent}>
          <TextInput style={Style.textInput} placeholder="Search Chat" />
        </View>
        <View style={Style.chatList}>
          <FlatList
            data={this.messages}
            renderItem={({item}) => (
              <View style={Style.chatMessage}>
                <View style={Style.innerChat}>
                  <View>
                    <Text>{item.title}</Text>
                    <Text>{item.message}</Text>
                    <Text />
                  </View>
                  <View>
                    <Text>{item.time}</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

export default Chat;
