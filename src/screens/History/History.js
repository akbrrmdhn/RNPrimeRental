import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Style from './Style';

export class History extends Component {
  render() {
    return (
      <View style={Style.container}>
        <View style={Style.historyHeading}>
          <Text style={Style.historyText}>Order History</Text>
        </View>
      </View>
    );
  }
}

export default History;
