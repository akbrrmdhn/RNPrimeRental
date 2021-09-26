import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Style from './Style';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import IoniconsIcon from '../../../node_modules/react-native-vector-icons/Ionicons';

export class Order extends Component {
  state = {
    date: new Date(),
    open: false,
  };
  constructor(props) {
    super(props);
  }
  setOpen = value => {
    this.setState({open: value});
  };
  render() {
    const {image, name} = this.props.route.params;
    return (
      <View style={Style.container}>
        <View>
          <Image source={image} resizeMode="cover" style={Style.image} />
          <View style={Style.content}>
            <View style={Style.itemHeading}>
              <View>
                <Text style={Style.itemTitle}>{name}</Text>
                <Text style={Style.itemTitle}>Price</Text>
              </View>
              <View style={Style.itemMisc}>
                <IoniconsIcon
                  name="chatbubble-outline"
                  size={40}
                  color="#FFCD61"
                />
              </View>
            </View>
            <View>
              <Text style={Style.itemMiscText}>description</Text>
              <Text style={Style.itemMiscText}>No Prepayment</Text>
              <Text style={Style.itemMiscText}>status</Text>
              <View style={Style.locationDistance}>
                <IoniconsIcon name="location" size={30} color="#FFCD61" />
                <Text style={Style.locationDistanceText}> lokasi</Text>
              </View>
              <View style={Style.locationDistance}>
                <IoniconsIcon name="walk" size={30} color="#FFCD61" />
                <Text style={Style.locationDistanceText}> distance</Text>
              </View>
              <View style={Style.selectQty}>
                <Text>Select bikes</Text>
                <View>
                  <Text>- 2 +</Text>
                </View>
              </View>
              <View style={Style.date}>
                <TouchableOpacity
                  onPress={() => this.setOpen(true)}
                  style={Style.datePicker}>
                  <Text>Date</Text>
                </TouchableOpacity>
                <DatePicker
                  modal
                  open={this.state.open}
                  date={this.state.date}
                  onCancel={() => this.setOpen(false)}
                />
                <View style={Style.pickerView}>
                  <Picker>
                    <Picker.Item label="1 day" />
                    <Picker.Item label="2 days" />
                    <Picker.Item label="3 days" />
                    <Picker.Item label="4 days" />
                    <Picker.Item label="5 days" />
                  </Picker>
                </View>
              </View>
              <View style={Style.button}>
                <TouchableOpacity
                  style={Style.reserveButton}
                  onPress={() =>
                    this.props.navigation.push('Payment', {
                      image: image,
                      name: name,
                    })
                  }>
                  <Text style={Style.reserveText}>Reservation</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Order;
