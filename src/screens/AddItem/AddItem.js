import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from 'react-native';
import Style from './Style';
import {Picker} from '@react-native-picker/picker';
import camera from '../../assets/images/camera.png';
import {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import {connect} from 'react-redux';
import {API_URL} from '@env';

class AddItem extends Component {
  state = {
    image: '',
    name: '',
    price: '',
    description: '',
    location_id: '',
    category_id: '',
    stock: 0,
  };
  setLocation = location_id => {
    this.setState({location_id: location_id});
  };
  setType = category_id => {
    this.setState({category_id: category_id});
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
    if (this.state.category_id === '') {
      return ToastAndroid.show('Choose a vehicle type!', ToastAndroid.SHORT);
    }
    if (this.state.stock === 0) {
      return ToastAndroid.show('Stock must not be empty!', ToastAndroid.SHORT);
    }

    const queries = new FormData();
    const token = this.props.auth.token;
    queries.append('name', this.state.name);
    queries.append('price', this.state.price);
    queries.append('description', this.state.description);
    queries.append('location_id', this.state.location_id);
    queries.append('category_id', this.state.category_id);
    queries.append('stock', this.state.stock);
    queries.append('owner_id', this.props.auth.authInfo.user_id);
    axios.post(`${API_URL}/vehicles/`, queries, {
      headers: {'x-access-token': `Bearer ${token}`},
      'Content type': 'multipart/form-data',
    });
    ToastAndroid.show('Item added successfully', ToastAndroid.SHORT);
    this.props.navigation.pop();
  };
  render() {
    return (
      <>
        <ScrollView style={Style.container}>
          <View style={Style.content}>
            <View style={Style.mainData}>
              <Image source={camera} resizeMode="cover" style={Style.image} />
              <TouchableOpacity style={Style.addPictureButton}>
                <Text style={Style.addPictureText}>Add pictures</Text>
              </TouchableOpacity>
              <TextInput
                placeholder="Type product name"
                style={Style.textInput}
                onChangeText={text => this.setState({name: text})}
              />
              <TextInput
                placeholder="Type product price"
                style={Style.textInput}
                keyboardType="number-pad"
                onChangeText={text => this.setState({price: text})}
              />
            </View>
            <View style={Style.sections}>
              <View>
                <Text style={Style.sectionHeading}>Description</Text>
                <TextInput
                  multiline={true}
                  numberOfLines={2}
                  placeholder="Describe your product, min. 150 words"
                  style={Style.descriptionTextInput}
                  onChangeText={text => this.setState({description: text})}
                />
              </View>
              <View style={Style.sections}>
                <Text style={Style.sectionHeading}>Location</Text>
                <View style={Style.pickerView}>
                  <Picker
                    selectedValue={this.state.location_id}
                    onValueChange={this.setLocation}>
                    <Picker.Item label="Select Location" value="0" />
                    <Picker.Item label="Jakarta" value="1" />
                    <Picker.Item label="Yogyakarta" value="2" />
                    <Picker.Item label="Malang" value="3" />
                    <Picker.Item label="Banjarmasin" value="4" />
                  </Picker>
                </View>
              </View>
              <View style={Style.sections}>
                <Text style={Style.sectionHeading}>Add to</Text>
                <View style={Style.pickerView}>
                  <Picker
                    selectedValue={this.state.category_id}
                    onValueChange={this.setType}>
                    <Picker.Item label="Select Category" value="0" />
                    <Picker.Item label="Car" value="1" />
                    <Picker.Item label="Motorbike" value="2" />
                    <Picker.Item label="Bike" value="3" />
                  </Picker>
                </View>
                <View style={Style.stockSection}>
                  <Text style={Style.sectionHeading}>Stock:</Text>
                  <View style={Style.buttons}>
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
                        this.setState({stock: this.state.stock + 1})
                      }>
                      <Text style={Style.sectionHeading}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={Style.submitSection}>
                  <TouchableOpacity
                    style={Style.submitButton}
                    onPress={() => this.onSave()}>
                    <Text style={Style.submitText}>Save Product</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(AddItem);
