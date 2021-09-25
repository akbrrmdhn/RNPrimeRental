import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Style from './Style';
import homeBackground from '../../assets/images/home.jpg';
import {Picker} from '@react-native-picker/picker';
import vespa from '../../assets/images/vespa.jpg';
import honda from '../../assets/images/honda.jpg';

export class Home extends Component {
  state = {
    vehicleType: '',
    vehicles: [
      {
        image: vespa,
        name: 'Vespa Matic',
        date: 'Jan 18 to 21 2021',
        price: 245000,
        status: 'Has been returned',
      },
      {
        image: honda,
        name: 'Honda Matic',
        date: 'Jan 18 to 21 2021',
        price: 245000,
        status: 'Has been returned',
      },
    ],
  };
  updateVehicle = vehicle => {
    this.setState({vehicleType: vehicle});
  };
  render() {
    return (
      <View style={Style.container}>
        <ScrollView>
          <ImageBackground
            source={homeBackground}
            resizeMode="cover"
            style={Style.image}
          />
          <View style={Style.vehicleFinder}>
            <View style={Style.finderRow}>
              <TextInput
                style={Style.textInput}
                placeholder="Select location"
              />
              <Picker
                style={Style.picker}
                selectedValue={this.state.vehicleType}
                onValueChange={this.updateVehicle}>
                <Picker.Item label="Car" value="Car" />
                <Picker.Item label="Motorbike" value="Motorbike" />
                <Picker.Item label="Bike" value="Bike" />
              </Picker>
            </View>
            <View style={Style.finderRow}>
              <TextInput
                style={Style.textInput}
                placeholder="Select location"
              />
              <Picker
                style={Style.picker}
                selectedValue={this.state.vehicleType}
                onValueChange={this.updateVehicle}>
                <Picker.Item label="Car" value="Car" />
                <Picker.Item label="Motorbike" value="Motorbike" />
                <Picker.Item label="Bike" value="Bike" />
              </Picker>
            </View>
            <View>
              <TouchableOpacity style={Style.findButton}>
                <Text style={Style.buttonText}>Search Vehicle</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <ScrollView style={Style.recommended}>
          <View style={Style.recommendedHeading}>
            <Text style={Style.recommendedTitle}>Recommended</Text>
            <Text style={Style.viewMore}>View More{'>'}</Text>
          </View>
          <View style={Style.recommendedCard}>
            <FlatList
              horizontal={true}
              data={this.state.vehicles}
              renderItem={({item}) => (
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('Order', {
                        image: item.image,
                        name: item.name,
                      })
                    }>
                    <Image
                      source={item.image}
                      resizeMode="cover"
                      style={Style.cardImage}
                    />
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;
