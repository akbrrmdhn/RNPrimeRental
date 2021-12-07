import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {API_URL} from '@env';
import axios from 'axios';
import Style from './Style';
import car from '../../assets/images/car.jpg';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import IoniconsIcon from '../../../node_modules/react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

class EditItem extends Component {
  state = {
    date: new Date(),
    open: false,
    id: 0,
    name: '',
    category: '',
    stock: '',
    maxStock: '',
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
    axios
      .get(`${API_URL}/vehicles/${id}`, {
        params: {id: String(id)},
      })
      .then(({data}) => {
        const vehicleData = data.result[0];
        this.setState({
          id: vehicleData.id,
          name: vehicleData.name,
          category: vehicleData.category,
          stock: vehicleData.stock,
          maxStock: vehicleData.stock,
          description: vehicleData.description,
          location: vehicleData.location,
          image: `${API_URL}${vehicleData.image}`,
          price: vehicleData.price,
          owner_id: vehicleData.owner_id,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  onSave = () => {
    if (this.state.name === '') {
      return ToastAndroid.show('Name must not be empty!', ToastAndroid.SHORT);
    }
    if (this.state.price === '') {
      return ToastAndroid.show('Price must not be empty!', ToastAndroid.SHORT);
    }
    if (this.state.description === '') {
      return ToastAndroid.show(
        'Description must not be empty!',
        ToastAndroid.SHORT,
      );
    }
    if (this.state.location_id === '') {
      return ToastAndroid.show('Choose a location!', ToastAndroid.SHORT);
    }
    if (this.state.category_id === '') {
      return ToastAndroid.show('Choose a vehicle type!', ToastAndroid.SHORT);
    }
    if (this.state.stock === 0) {
      return ToastAndroid.show('Stock must not be empty!', ToastAndroid.SHORT);
    }

    const queries = new FormData();
    const id = this.state.id;
    queries.append('name', this.state.name);
    queries.append('price', this.state.price);
    queries.append('description', this.state.description);
    queries.append('stock', this.state.stock);
    queries.append('owner_id', this.props.auth.authInfo.user_id);
    axios.patch(`${API_URL}/vehicles/${id}`, queries);
    ToastAndroid.show('Item modified successfully', ToastAndroid.SHORT);
    this.props.navigation.pop();
  };
  render() {
    return (
      <View style={Style.container}>
        <View>
          <Image
            source={this.state.image ? {uri: this.state.image} : car}
            resizeMode="cover"
            style={Style.image}
          />
          <ScrollView style={Style.content}>
            <View style={Style.itemHeading}>
              <View>
                <TextInput
                  defaultValue={this.state.name}
                  style={Style.itemTitle}
                  onChangeText={text => this.setState({name: text})}
                />
                <Text style={Style.itemTitle}>Rp{this.state.price}/day</Text>
              </View>
              <View style={Style.itemMisc}>
                <IoniconsIcon name="camera-outline" size={40} color="#FFCD61" />
                <IoniconsIcon name="image-outline" size={40} color="#FFCD61" />
                <IoniconsIcon name="trash-outline" size={40} color="#FFCD61" />
              </View>
            </View>
            <View>
              <TextInput
                defaultValue={this.state.description}
                style={Style.itemMiscText}
                onChangeText={text => this.setState({description: text})}
              />
              <Text style={Style.itemMiscText}>No Prepayment</Text>
              <Text style={Style.itemMiscText}>status</Text>
              <View style={Style.locationDistance}>
                <IoniconsIcon name="location" size={30} color="#FFCD61" />
                <TextInput
                  defaultValue={this.state.location}
                  style={Style.locationDistanceText}
                />
              </View>
              <View style={Style.locationDistance}>
                <IoniconsIcon name="walk" size={30} color="#FFCD61" />
                <Text style={Style.locationDistanceText}>
                  {' '}
                  0.1 km near your place
                </Text>
              </View>
              <View style={Style.selectQty}>
                <Text>Update Stock</Text>
                <View style={Style.addStockButton}>
                  <TouchableOpacity
                    style={Style.counterButton}
                    onPress={() =>
                      this.state.stock > 1 &&
                      this.setState({stock: this.state.stock - 1})
                    }>
                    <Text style={Style.sectionHeading}>-</Text>
                  </TouchableOpacity>
                  <Text style={Style.stockNum}>{this.state.stock}</Text>
                  <TouchableOpacity
                    style={Style.counterButton}
                    onPress={() =>
                      this.setState({stock: this.state.stock + 1})
                    }>
                    <Text style={Style.sectionHeading}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={Style.button}>
                <TouchableOpacity
                  style={Style.reserveButton}
                  onPress={() => this.onSave()}>
                  <Text style={Style.reserveText}>Update Item</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(EditItem);
