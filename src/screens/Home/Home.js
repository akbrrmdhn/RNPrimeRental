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
    console.log('state: ', this.props.state);
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
  updateVehicle = vehicle => {
    this.setState({vehicleType: vehicle});
  };
  render() {
    return (
      <>
        <ScrollView style={Style.container}>
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
              <View style={Style.pickerView}>
                <Picker
                  selectedValue={this.state.vehicleType}
                  onValueChange={this.updateVehicle}>
                  <Picker.Item label="Car" value="Car" />
                  <Picker.Item label="Motorbike" value="Motorbike" />
                  <Picker.Item label="Bike" value="Bike" />
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
              <TouchableOpacity style={Style.findButton}>
                <Text style={Style.buttonText}>Search Vehicle</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={Style.recommended}>
            <View style={Style.recommendedHeading}>
              <Text style={Style.recommendedTitle}>Recommended</Text>
              <Text style={Style.viewMore}>View More{'>'}</Text>
            </View>
            <View>
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
                          uri: item.image.replace('localhost', '192.168.1.107'),
                        }}
                        resizeMode="cover"
                        style={Style.cardImage}
                      />
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>
          </View>
          <View style={Style.recommended}>
            <View style={Style.recommendedHeading}>
              <Text style={Style.recommendedTitle}>Cars</Text>
              <Text style={Style.viewMore}>View More{'>'}</Text>
            </View>
            <View>
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
                          uri: item.image.replace('localhost', '192.168.1.107'),
                        }}
                        resizeMode="cover"
                        style={Style.cardImage}
                      />
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>
          </View>
          <View style={Style.recommended}>
            <View style={Style.recommendedHeading}>
              <Text style={Style.recommendedTitle}>Motorbikes</Text>
              <Text style={Style.viewMore}>View More{'>'}</Text>
            </View>
            <View>
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
                          uri: item.image.replace('localhost', '192.168.1.107'),
                        }}
                        resizeMode="cover"
                        style={Style.cardImage}
                      />
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>
          </View>
          <View style={Style.recommended}>
            <View style={Style.recommendedHeading}>
              <Text style={Style.recommendedTitle}>Bikes</Text>
              <Text style={Style.viewMore}>View More{'>'}</Text>
            </View>
            <View>
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
                          uri: item.image.replace('localhost', '192.168.1.107'),
                        }}
                        resizeMode="cover"
                        style={Style.cardImage}
                      />
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(Home);
