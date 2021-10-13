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
import config from '../../../config';
import Style from './Style';
import car from '../../assets/images/car.jpg';
import IoniconsIcon from '../../../node_modules/react-native-vector-icons/Ionicons';
export class Search extends Component {
  state = {
    vehicles: [],
  };
  componentDidMount() {
    const {vehicle_category, location_id} = this.props.route.params;
    const url = config.API_URL;
    axios
      .get(`${url}/vehicles/`, {
        params: {
          category_id: vehicle_category,
          location_id: location_id,
          order_by: 'v.score',
          sort: 'DESC',
        },
      })
      .then(({data}) => {
        this.setState({vehicles: data.result.data});
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const url = config.API_URL;
    return (
      <View style={Style.container}>
        <TextInput placeholder="Search Vehicles..." style={Style.textInput} />
        <TouchableOpacity style={Style.filter}>
          <IoniconsIcon name="filter-outline" size={20} color="#393939" />
          <Text style={Style.filterText}>Filter</Text>
        </TouchableOpacity>
        <FlatList
          data={this.state.vehicles}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Order', {
                  id: item.id,
                })
              }>
              <View style={Style.detailsCard}>
                <Image
                  source={
                    `${url}${item.image}` ? {uri: `${url}${item.image}`} : car
                  }
                  resizeMode="cover"
                  style={Style.cardImage}
                />
                <View>
                  <Text style={Style.itemName}>{item.name}</Text>
                  {/* <Text style={Style.itemDescription}>{item.description}</Text> */}
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
