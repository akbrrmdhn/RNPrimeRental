import React, {Component} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import Style from './Style';
import {Picker} from '@react-native-picker/picker';
export class Order extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {image, name} = this.props.route.params;
    return (
      <View style={Style.container}>
        <View style={Style.content}>
          <Image source={image} resizeMode="cover" style={Style.image} />
          <View style={Style.itemHeading}>
            <View>
              <Text>{name}</Text>
              <Text>Price</Text>
            </View>
            <View style={Style.itemMisc}>
              <Text>Chat</Text>
            </View>
          </View>
          <View>
            <Text>description</Text>
            <Text>prepayment</Text>
            <Text>status</Text>
            <View style={Style.locationDistance}>
              <Text>locationIcon</Text>
              <Text> lokasi</Text>
            </View>
            <View style={Style.locationDistance}>
              <Text>distanceIcon</Text>
              <Text> distance</Text>
            </View>
            <View style={Style.selectQty}>
              <Text>Select bikes</Text>
              <View>
                <Text>- 2 +</Text>
              </View>
            </View>
            <View style={Style.date}>
              <TextInput placeholder="Select date" />
              <Picker>
                <Picker.Item label="1 day" />
                <Picker.Item label="2 days" />
                <Picker.Item label="3 days" />
                <Picker.Item label="4 days" />
                <Picker.Item label="5 days" />
              </Picker>
            </View>
            <View style={Style.button}>
              <TouchableOpacity
                style={Style.reserveButton}
                onPress={() => this.props.navigation.push('Payment')}>
                <Text>Reservation</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Order;
