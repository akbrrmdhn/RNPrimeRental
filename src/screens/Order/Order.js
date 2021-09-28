import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Style from './Style';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import IoniconsIcon from '../../../node_modules/react-native-vector-icons/Ionicons';
import axios from 'axios';
import car from '../../assets/images/car.jpg';

export class Order extends Component {
  state = {
    date: new Date(),
    open: false,
    id: 0,
    name: '',
    category: '',
    stock: '',
    description: '',
    location: '',
    image: '',
    price: '',
  };
  constructor(props) {
    super(props);
  }
  setOpen = value => {
    this.setState({open: value});
  };
  componentDidMount() {
    const {id} = this.props.route.params;
    const url = `http://192.168.1.107:8000/vehicles/${id}`;
    axios
      .get(url, {
        params: {id: String(id)},
      })
      .then(({data}) => {
        const vehicleData = data.result[0];
        this.setState({
          id: vehicleData.id,
          name: vehicleData.name,
          category: vehicleData.category,
          stock: vehicleData.stock,
          description: vehicleData.description,
          location: vehicleData.location,
          image: vehicleData.image.replace('localhost', '192.168.1.107'),
          price: vehicleData.price,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <View style={Style.container}>
        <View>
          <Image
            source={this.state.image ? {uri: this.state.image} : car}
            resizeMode="cover"
            style={Style.image}
          />
          <View style={Style.content}>
            <View style={Style.itemHeading}>
              <View>
                <Text style={Style.itemTitle}>{this.state.name}</Text>
                <Text style={Style.itemTitle}>Rp{this.state.price}/day</Text>
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
              <Text style={Style.itemMiscText}>{this.state.description}</Text>
              <Text style={Style.itemMiscText}>No Prepayment</Text>
              <Text style={Style.itemMiscText}>status</Text>
              <View style={Style.locationDistance}>
                <IoniconsIcon name="location" size={30} color="#FFCD61" />
                <Text style={Style.locationDistanceText}>
                  {' '}
                  {this.state.location}
                </Text>
              </View>
              <View style={Style.locationDistance}>
                <IoniconsIcon name="walk" size={30} color="#FFCD61" />
                <Text style={Style.locationDistanceText}>
                  {' '}
                  0.1 km near your place
                </Text>
              </View>
              <View style={Style.selectQty}>
                <Text>Select {this.state.category}</Text>
                <View style={Style.addStockButton}>
                  <TouchableOpacity style={Style.miniButton}>
                    <Text>-</Text>
                  </TouchableOpacity>
                  <Text>{this.state.stock}</Text>
                  <TouchableOpacity style={Style.miniButton}>
                    <Text>+</Text>
                  </TouchableOpacity>
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
                      image: this.state.image,
                      name: this.state.name,
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
