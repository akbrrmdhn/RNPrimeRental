import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import axios from 'axios';
import {API_URL} from '@env';
import Style from './Style';
import car from '../../assets/images/car.jpg';
import IoniconsIcon from '../../../node_modules/react-native-vector-icons/Ionicons';
export class Search extends Component {
  params = this.props.route.params;
  state = {
    keyword: this.params?.keyword ? this.params.keyword : null,
    vehicles: [],
  };

  searchVehicle = (query, location, category) => {
    let search = query && {keyword: query};
    if (location) {
      search = {...search, ...{location_id: location}};
    }
    if (category) {
      search = {...search, ...{category_id: category}};
    }
    console.log('search query is ', search);

    return axios
      .get(`${API_URL}/vehicles/`, {
        params: search,
      })
      .then(({data}) => {
        this.setState({vehicles: data.result.data});
      })
      .catch(err => {
        console.log(err);
      });
  };
  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.searchVehicle(
        this.state.keyword,
        this.props.route.params.location_id,
        this.props.route.params.category_id,
      );
    });
  }
  componentWillUnmount() {
    console.log('goodbye');
    this._unsubscribe();
  }
  render() {
    return (
      <View style={Style.container}>
        <TextInput
          placeholder="Search Vehicles..."
          style={Style.textInput}
          onEndEditing={e => {
            this.searchVehicle(
              e.nativeEvent.text,
              this.props.route.params.location_id,
              this.props.route.params.category_id,
            );
            this.setState({keyword: e.nativeEvent.text});
          }}
        />
        <TouchableOpacity
          style={Style.filter}
          onPress={() =>
            this.props.navigation.navigate('Filter', {
              keyword: this.state.keyword,
              location_id: this.state.location_id,
              category_id: this.state.category_id,
            })
          }>
          <IoniconsIcon name="filter-outline" size={20} color="#393939" />
          <Text style={Style.filterText}>Filter</Text>
        </TouchableOpacity>
        <FlatList
          data={this.state.vehicles}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Details', {
                  id: item.id,
                })
              }>
              <View style={Style.detailsCard}>
                <Image
                  source={
                    `${API_URL}${item.image}`
                      ? {uri: `${API_URL}${item.image}`}
                      : car
                  }
                  resizeMode="cover"
                  style={Style.cardImage}
                />
                <View>
                  <Text style={Style.itemName}>{item.name}</Text>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={Style.itemDescription}>
                    {item.description}
                  </Text>
                  <Text style={Style.itemPrice}>
                    Prepayment: Rp{item.price}
                  </Text>
                  <Text style={Style.itemStatus}>Available</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

export default Search;
