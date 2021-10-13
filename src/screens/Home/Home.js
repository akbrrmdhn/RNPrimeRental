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
import DatePicker from 'react-native-date-picker';
import vespa from '../../assets/images/vespa.jpg';
import axios from 'axios';
import config from '../../../config';
import {connect} from 'react-redux';

class Home extends Component {
  state = {
    date: new Date(),
    vehicleType: '',
    location: '',
    score: [],
    cars: [],
    motorbikes: [],
    bikes: [],
  };
  vehicles = [
    {
      name: 'vespa',
      image: vespa,
    },
    {
      name: 'vespa',
      image: vespa,
    },
  ];
  componentDidMount() {
    const url = config.API_URL;
    axios
      .get(`${url}/vehicles/score`, {
        params: {limit: 4},
      })
      .then(({data}) => {
        this.setState({score: data.result});
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get(`${url}/vehicles/`, {
        params: {category_id: 1, order_by: 'v.score', sort: 'DESC'},
      })
      .then(({data}) => {
        this.setState({cars: data.result.data});
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get(`${url}/vehicles/`, {
        params: {category_id: 2, order_by: 'v.score', sort: 'DESC'},
      })
      .then(({data}) => {
        this.setState({motorbikes: data.result.data});
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get(`${url}/vehicles/`, {
        params: {category_id: 3, order_by: 'v.score', sort: 'DESC'},
      })
      .then(({data}) => {
        this.setState({bikes: data.result.data});
      })
      .catch(err => {
        console.log(err);
      });
  }
  setOpen = value => {
    this.setState({open: value});
  };
  setVehicleType = vehicleType => {
    this.setState({vehicleType: vehicleType});
  };
  setLocation = location => {
    this.setState({location: location});
  };
  render() {
    const url = config.API_URL;
    let finder, addButton, popularCard, carsCard, motorbikesCard, bikesCard;
    if (
      this.props.auth.authInfo.roleLevel === 1 ||
      this.props.auth.authInfo.roleLevel === 2
    ) {
      finder = (
        <View style={Style.adminFinder}>
          <View style={Style.finderRow}>
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
            <View style={Style.pickerView}>
              <Picker
                selectedValue={this.state.vehicleType}
                onValueChange={this.setVehicleType}>
                <Picker.Item label="Car" value="1" />
                <Picker.Item label="Motorbike" value="2" />
                <Picker.Item label="Bike" value="3" />
              </Picker>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={Style.findButton}
              onPress={() =>
                this.props.navigation.navigate('Search', {
                  vehicle_category: this.state.vehicleType,
                  location_id: this.state.location,
                })
              }>
              <Text style={Style.buttonText}>Search Vehicle</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
      addButton = (
        <View style={Style.addView}>
          <TouchableOpacity
            style={Style.addNewItem}
            onPress={() => this.props.navigation.navigate('AddItem')}>
            <Text style={Style.addText}>Add New Item</Text>
          </TouchableOpacity>
        </View>
      );
      popularCard = (
        <FlatList
          horizontal={true}
          data={this.state.score}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('EditItem', {
                    id: item.id,
                  });
                }}>
                <Image
                  source={{
                    uri: `${url}${item.image}`,
                  }}
                  resizeMode="cover"
                  style={Style.cardImage}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      );
      carsCard = (
        <FlatList
          horizontal={true}
          data={this.state.cars}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('EditItem', {
                    id: item.id,
                  });
                }}>
                <Image
                  source={{
                    uri: `${url}${item.image}`,
                  }}
                  resizeMode="cover"
                  style={Style.cardImage}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      );
      motorbikesCard = (
        <FlatList
          horizontal={true}
          data={this.state.motorbikes}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('EditItem', {
                    id: item.id,
                  });
                }}>
                <Image
                  source={{
                    uri: `${url}${item.image}`,
                  }}
                  resizeMode="cover"
                  style={Style.cardImage}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      );
      bikesCard = (
        <FlatList
          horizontal={true}
          data={this.state.bikes}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('EditItem', {
                    id: item.id,
                  });
                }}>
                <Image
                  source={{
                    uri: `${url}${item.image}`,
                  }}
                  resizeMode="cover"
                  style={Style.cardImage}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      );
    } else {
      finder = (
        <View style={Style.vehicleFinder}>
          <View style={Style.finderRow}>
            <TextInput style={Style.textInput} placeholder="Select location" />
            <View style={Style.pickerView}>
              <Picker
                selectedValue={this.state.vehicleType}
                onValueChange={this.setVehicleType}>
                <Picker.Item label="Car" value="1" />
                <Picker.Item label="Motorbike" value="2" />
                <Picker.Item label="Bike" value="3" />
              </Picker>
            </View>
          </View>
          <View style={Style.finderRow}>
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
              <Picker
                selectedValue={this.state.vehicleType}
                onValueChange={this.updateVehicle}>
                <Picker.Item label="1 Day" value="1" />
                <Picker.Item label="2 Days" value="2" />
                <Picker.Item label="3 Days" value="3" />
                <Picker.Item label="4 Days" value="4" />
                <Picker.Item label="5 Days" value="5" />
              </Picker>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={Style.findButton}
              onPress={() =>
                this.props.navigation.navigate('Search', {
                  vehicle_category: this.state.vehicleType,
                })
              }>
              <Text style={Style.buttonText}>Search Vehicle</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
      addButton = <Text>{''}</Text>;
      popularCard = (
        <FlatList
          horizontal={true}
          data={this.state.score}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Order', {
                    id: item.id,
                  });
                }}>
                <Image
                  source={{
                    uri: `${url}${item.image}`,
                  }}
                  resizeMode="cover"
                  style={Style.cardImage}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      );
      carsCard = (
        <FlatList
          horizontal={true}
          data={this.state.cars}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Order', {
                    id: item.id,
                  });
                }}>
                <Image
                  source={{
                    uri: `${url}${item.image}`,
                  }}
                  resizeMode="cover"
                  style={Style.cardImage}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      );
      motorbikesCard = (
        <FlatList
          horizontal={true}
          data={this.state.motorbikes}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Order', {
                    id: item.id,
                  });
                }}>
                <Image
                  source={{
                    uri: `${url}${item.image}`,
                  }}
                  resizeMode="cover"
                  style={Style.cardImage}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      );
      bikesCard = (
        <FlatList
          horizontal={true}
          data={this.state.bikes}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Order', {
                    id: item.id,
                  });
                }}>
                <Image
                  source={{
                    uri: `${url}${item.image}`,
                  }}
                  resizeMode="cover"
                  style={Style.cardImage}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      );
    }
    return (
      <>
        <ScrollView style={Style.container}>
          <ImageBackground
            source={homeBackground}
            resizeMode="cover"
            style={Style.image}
          />
          {finder}
          {addButton}
          <View style={Style.recommended}>
            <View style={Style.recommendedHeading}>
              <Text style={Style.recommendedTitle}>Recommended</Text>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.push('ViewMore', {
                    name: 'Recommended',
                  })
                }>
                <Text style={Style.viewMore}>View More{'>'}</Text>
              </TouchableOpacity>
            </View>
            <View>{popularCard}</View>
          </View>
          <View style={Style.recommended}>
            <View style={Style.recommendedHeading}>
              <Text style={Style.recommendedTitle}>Cars</Text>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.push('ViewMore', {
                    name: 'Cars',
                  })
                }>
                <Text style={Style.viewMore}>View More{'>'}</Text>
              </TouchableOpacity>
            </View>
            <View>{carsCard}</View>
          </View>
          <View style={Style.recommended}>
            <View style={Style.recommendedHeading}>
              <Text style={Style.recommendedTitle}>Motorbikes</Text>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.push('ViewMore', {
                    name: 'Motorbikes',
                  })
                }>
                <Text style={Style.viewMore}>View More{'>'}</Text>
              </TouchableOpacity>
            </View>
            <View>{motorbikesCard}</View>
          </View>
          <View style={Style.recommended}>
            <View style={Style.recommendedHeading}>
              <Text style={Style.recommendedTitle}>Bikes</Text>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.push('ViewMore', {
                    name: 'Bikes',
                  })
                }>
                <Text style={Style.viewMore}>View More{'>'}</Text>
              </TouchableOpacity>
            </View>
            <View>{bikesCard}</View>
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

export default connect(mapStateToProps)(Home);
