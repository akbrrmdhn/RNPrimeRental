import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Style from './Style';
import IoniconsIcon from '../../../node_modules/react-native-vector-icons/Ionicons';

export class Filter extends Component {
  params = this.props.route.params;
  state = {
    keyword: this.params.keyword,
    category_id: this.params?.category_id ? this.params.category_id : null,
    location_id: this.params?.location_id ? this.params.location_id : null,
    price: '',
  };
  setVehicleType = vehicleType => {
    this.setState({category_id: vehicleType});
  };
  setLocation = location => {
    this.setState({location_id: location});
  };
  setPrice = price => {
    this.setState({price: price});
  };
  render() {
    return (
      <View style={Style.container}>
        <View>
          <View style={Style.filters}>
            <Text style={Style.filterText}>Location</Text>
            <View style={Style.pickerView}>
              <Picker
                selectedValue={this.state.location_id}
                onValueChange={this.setLocation}>
                <Picker.Item label="Select Location" value="" />
                <Picker.Item label="Jakarta" value="1" />
                <Picker.Item label="Yogyakarta" value="2" />
                <Picker.Item label="Malang" value="3" />
                <Picker.Item label="Banjarmasin" value="4" />
              </Picker>
            </View>
          </View>
          {/* <View style={Style.filters}>
            <TouchableOpacity style={Style.filterButton}>
              <Text style={Style.filterText}>Price</Text>
            </TouchableOpacity>
            <Picker
              selectedValue={this.state.price}
              onValueChange={this.setPrice}>
              <Picker.Item label="Select price range" value="0" />
              <Picker.Item label="All range" value="" />
              <Picker.Item label="50000" value="50000" />
              <Picker.Item label="100000" value="100000" />
              <Picker.Item label="150000" value="150000" />
              <Picker.Item label="200000" value="200000" />
            </Picker>
          </View> */}
          <View style={Style.filters}>
            <Text style={Style.filterText}>Vehicle Type</Text>
            <View style={Style.pickerView}>
              <Picker
                selectedValue={this.state.category_id}
                onValueChange={this.setVehicleType}>
                <Picker.Item label="Select Vehicle type" value="" />
                <Picker.Item label="Car" value="1" />
                <Picker.Item label="Motorbike" value="2" />
                <Picker.Item label="Bike" value="3" />
              </Picker>
            </View>
          </View>
        </View>
        <View style={Style.applyButton}>
          <TouchableOpacity
            style={Style.buttonBackground}
            onPress={() =>
              this.props.navigation.navigate('Search', {
                keyword: this.state.keyword,
                location_id: this.state.location_id,
                category_id: this.state.category_id,
              })
            }>
            <Text style={Style.applyText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Filter;
