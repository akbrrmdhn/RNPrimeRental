import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid,
  TextInput,
  ScrollView,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import Style from './Style';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import car from '../../assets/images/car.jpg';
import config from '../../../config';
import {connect} from 'react-redux';
import {format, addDays} from 'date-fns';

export class Details extends Component {
  state = {
    date: new Date(),
    days: '',
    return_date: new Date(),
    open: false,
    id: 0,
    name: '',
    category: '',
    category_id: '',
    stock: '',
    maxStock: '',
    description: '',
    location: '',
    image: '',
    price: '',
    status_id: '',
    book_status: '',
  };
  constructor(props) {
    super(props);
  }
  setOpen = value => {
    this.setState({open: value});
  };
  componentDidMount() {
    const {id} = this.props.route.params;
    const url = config.API_URL;
    axios
      .get(`${url}/vehicles/${id}`, {
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
          image: `${url}${vehicleData.image}`,
          price: vehicleData.price,
          status_id: vehicleData.status_id,
          book_status: vehicleData.book_status,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleChoosePhoto = () => {
    const options = {};
    launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('User canceled image picker.');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else {
        console.log('response', res);
        this.setState({image: res.assets[0], upload: res.assets[0]});
      }
    });
  };
  handleCamera = () => {
    const options = {};
    launchCamera(options, res => {
      if (res.didCancel) {
        console.log('User canceled image picker.');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else {
        console.log('response', res.assets[0]);
        this.setState({image: res.assets[0].uri, upload: res.assets[0]});
      }
    });
  };
  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.handleCamera();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
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
    if (this.state.stock === 0) {
      return ToastAndroid.show('Stock must not be empty!', ToastAndroid.SHORT);
    }
    const queries = new FormData();
    const url = config.API_URL;
    const id = this.state.id;
    const token = this.props.auth.token;
    queries.append('name', this.state.name);
    queries.append('price', this.state.price);
    queries.append('description', this.state.description);
    queries.append('stock', this.state.stock);
    queries.append('location_id', this.state.location);
    queries.append('booking_status_id', this.state.status_id);
    queries.append('owner_id', this.props.auth.authInfo.user_id);
    axios
      .patch(`${url}/vehicles/${id}`, queries, {
        headers: {
          'x-access-token': `Bearer ${token},`,
        },
      })
      .then(
        result =>
          ToastAndroid.show('Item modified successfully', ToastAndroid.SHORT),
        this.props.navigation.pop(),
      )
      .catch(err => console.log(err));
  };
  promptUser = () => {
    const title = 'Update Item';
    const message = 'Do you really want to update this item?';
    const buttons = [
      {
        text: 'No',
        type: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => this.onSave(),
      },
    ];
    Alert.alert(title, message, buttons);
  };
  setStatus = status => {
    this.setState({status_id: status});
  };
  setLocation = location => {
    this.setState({location: location});
  };
  setReturnDate = duration => {
    this.setState({
      return_date: addDays(this.state.date, duration),
      days: duration,
    });
  };
  render() {
    let loginState;
    if (
      this.props.auth.authInfo.roleLevel === 1 ||
      this.props.auth.authInfo.roleLevel === 2
    ) {
      loginState = (
        <ScrollView style={Style.container}>
          <View>
            <Image
              source={this.state.image ? {uri: this.state.image} : car}
              resizeMode="cover"
              style={Style.image}
            />
            <View style={Style.content}>
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
                  <IoniconsIcon
                    name="camera-outline"
                    size={40}
                    color="#FFCD61"
                  />
                  <IoniconsIcon
                    name="image-outline"
                    size={40}
                    color="#FFCD61"
                  />
                  <IoniconsIcon
                    name="trash-outline"
                    size={40}
                    color="#FFCD61"
                  />
                </View>
              </View>
              <View>
                <TextInput
                  defaultValue={this.state.description}
                  style={Style.itemMiscText}
                  onChangeText={text => this.setState({description: text})}
                />
                <Text style={Style.itemMiscText}>No Prepayment</Text>
                {this.state.status_id === 1 ? (
                  <Text style={Style.availableText}>
                    {this.state.book_status}
                  </Text>
                ) : (
                  <Text style={Style.fullBookedText}>
                    {this.state.book_status}
                  </Text>
                )}
                <View style={Style.locationDistance}>
                  <IoniconsIcon name="location" size={30} color="#FFCD61" />
                  <View style={Style.pickerView}>
                    <Picker
                      selectedValue={this.state.location}
                      onValueChange={this.setLocation}>
                      <Picker.Item label="Jakarta" value="1" />
                      <Picker.Item label="Yogyakarta" value="2" />
                      <Picker.Item label="Malang" value="3" />
                      <Picker.Item label="Banjarmasin" value="4" />
                    </Picker>
                  </View>
                </View>
                <View style={Style.locationDistance}>
                  <IoniconsIcon name="walk" size={30} color="#FFCD61" />
                  <Text style={Style.locationDistanceText}>
                    {' '}
                    0.1 km near your place
                  </Text>
                </View>
                <View style={Style.stockSection}>
                  <Text style={Style.sectionHeading}>Stock</Text>
                  <View style={Style.counter}>
                    <TouchableOpacity
                      style={Style.counterButton}
                      onPress={() =>
                        this.state.stock > 1 &&
                        this.setState({stock: this.state.stock - 1})
                      }>
                      <Text style={Style.sectionHeading}>-</Text>
                    </TouchableOpacity>
                    <Text style={Style.sectionHeading}>{this.state.stock}</Text>
                    <TouchableOpacity
                      style={Style.counterButton}
                      onPress={() =>
                        this.state.stock < this.state.maxStock &&
                        this.setState({stock: this.state.stock + 1})
                      }>
                      <Text style={Style.sectionHeading}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={Style.statusPickerView}>
                  <Picker
                    selectedValue={this.state.status_id}
                    onValueChange={this.setStatus}>
                    <Picker.Item label="Available" value="1" />
                    <Picker.Item label="Full Booked" value="2" />
                  </Picker>
                </View>
                <View style={Style.button}>
                  <TouchableOpacity
                    style={Style.reserveButton}
                    onPress={() => this.promptUser()}>
                    <Text style={Style.reserveText}>Update Item</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      );
    } else {
      loginState = (
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
                  <TouchableOpacity>
                    <IoniconsIcon
                      name="heart-outline"
                      size={40}
                      color="#FFCD61"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <IoniconsIcon
                      name="chatbubble-outline"
                      size={40}
                      color="#FFCD61"
                    />
                  </TouchableOpacity>
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
                <View style={Style.stockSection}>
                  <Text style={Style.sectionHeading}>Stock</Text>
                  <View style={Style.counter}>
                    <TouchableOpacity
                      style={Style.counterButton}
                      onPress={() =>
                        this.state.stock > 1 &&
                        this.setState({stock: this.state.stock - 1})
                      }>
                      <Text style={Style.sectionHeading}>-</Text>
                    </TouchableOpacity>
                    <Text style={Style.sectionHeading}>{this.state.stock}</Text>
                    <TouchableOpacity
                      style={Style.counterButton}
                      onPress={() =>
                        this.state.stock < this.state.maxStock &&
                        this.setState({stock: this.state.stock + 1})
                      }>
                      <Text style={Style.sectionHeading}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={Style.date}>
                  <TouchableOpacity
                    onPress={() => this.setOpen(true)}
                    style={Style.datePicker}>
                    <Text>{this.state.date.toDateString()}</Text>
                  </TouchableOpacity>
                  <DatePicker
                    modal
                    mode="date"
                    open={this.state.open}
                    date={this.state.date}
                    onConfirm={date => {
                      this.setOpen(false);
                      this.setState(date);
                    }}
                    onCancel={() => this.setOpen(false)}
                  />
                  <View style={Style.pickerView}>
                    <Picker
                      selectedValue={this.state.days}
                      onValueChange={this.setReturnDate}>
                      <Picker.Item label="1 day" value="1" />
                      <Picker.Item label="2 days" value="2" />
                      <Picker.Item label="3 days" value="3" />
                      <Picker.Item label="4 days" value="4" />
                      <Picker.Item label="5 days" value="5" />
                    </Picker>
                  </View>
                </View>
                <View style={Style.button}>
                  <TouchableOpacity
                    style={Style.reserveButton}
                    onPress={() =>
                      this.props.navigation.push('Payment', {
                        id: this.state.id,
                        user_id: this.props.auth.authInfo.user_id,
                        quantity: this.state.stock,
                        rent_date: format(this.state.date, 'yyyy-MM-dd'),
                        return_date: format(
                          this.state.return_date,
                          'yyyy-MM-dd',
                        ),
                        total_price:
                          this.state.price * this.state.stock * this.state.days,
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
    return <>{loginState}</>;
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(Details);
