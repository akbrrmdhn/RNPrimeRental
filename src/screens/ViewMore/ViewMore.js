import axios from 'axios';
import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import config from '../../../config';
import Style from './Style';
import car from '../../assets/images/car.jpg';

class ViewMore extends Component {
  state = {
    loading: false,
    vehicles: [{}],
    page: 1,
    nextPage: '',
  };
  componentDidMount() {
    const {name} = this.props.route.params;
    const url = config.API_URL;
    if (name === 'Cars') {
      axios
        .get(`${url}/vehicles?page=${this.state.page}`, {
          params: {
            category_id: 1,
            order_by: 'v.score',
            sort: 'DESC',
            limit: 6,
          },
        })
        .then(({data}) => {
          this.setState({
            vehicles: data.result.data,
            loading: false,
            nextPage: data.result.nextPage,
          });
          console.log(this.state.page);
        })
        .catch(err => {
          console.log(err);
        });
    } else if (name === 'Motorbikes') {
      axios
        .get(`${url}/vehicles?page=${this.state.page}`, {
          params: {
            category_id: 2,
            order_by: 'v.score',
            sort: 'DESC',
            limit: 5,
          },
        })
        .then(({data}) => {
          console.log(data.result.data);
          console.log(this.state.vehicles);
          this.setState({
            vehicles: data.result.data,
            loading: false,
            nextPage: data.result.nextPage,
          });
        })
        .catch(err => {
          console.log(err);
        });
    } else if (name === 'Bikes') {
      axios
        .get(`${url}/vehicles?page=${this.state.page}`, {
          params: {
            category_id: 3,
            order_by: 'v.score',
            sort: 'DESC',
            limit: 6,
          },
        })
        .then(({data}) => {
          this.setState({
            vehicles: data.result.data,
            loading: false,
            nextPage: data.result.nextPage,
          });
          console.log(this.state.page);
        })
        .catch(err => {
          console.log(err);
        });
    } else if (name === 'Recommended') {
      axios
        .get(`${url}/vehicles?page=${this.state.page}`, {
          params: {page: 1, limit: 10},
        })
        .then(({data}) => {
          this.setState({
            vehicles: data.result.data,
            nextPage: data.result.nextPage,
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  fetchData = (name, url) => {
    this.setState({loading: true});
    if (name === 'Cars') {
      axios
        .get(`${url}/vehicles?page=${this.state.page}`, {
          params: {
            category_id: 1,
            order_by: 'v.score',
            sort: 'DESC',
            limit: 6,
          },
        })
        .then(({data}) => {
          this.setState({
            vehicles: [...this.state.vehicles, ...data.result.data],
            loading: false,
            nextPage: data.result.nextPage,
          });
          console.log(this.state.page);
        })
        .catch(err => {
          console.log(err);
        });
    } else if (name === 'Motorbikes') {
      axios
        .get(`${url}/vehicles?page=${this.state.page}`, {
          params: {
            category_id: 2,
            order_by: 'v.score',
            sort: 'DESC',
            limit: 5,
          },
        })
        .then(({data}) => {
          console.log(data.result.data);
          console.log(this.state.vehicles);
          this.setState({
            vehicles: [...this.state.vehicles, ...data.result.data],
            loading: false,
            nextPage: data.result.nextPage,
          });
        })
        .catch(err => {
          console.log(err);
        });
    } else if (name === 'Bikes') {
      axios
        .get(`${url}/vehicles?page=${this.state.page}`, {
          params: {
            category_id: 3,
            order_by: 'v.score',
            sort: 'DESC',
            limit: 6,
          },
        })
        .then(({data}) => {
          this.setState({
            vehicles: [...this.state.vehicles, ...data.result.data],
            loading: false,
            nextPage: data.result.nextPage,
          });
          console.log(this.state.page);
        })
        .catch(err => {
          console.log(err);
        });
    } else if (name === 'Recommended') {
      axios
        .get(`${url}/vehicles?page=${this.state.page}`, {
          params: {limit: 10, order_by: 'v.score', sort: 'DESC'},
        })
        .then(({data}) => {
          this.setState({
            vehicles: [...this.state.vehicles, ...data.result.data],
            nextPage: data.result.nextPage,
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  renderLoader = () => {
    return (
      <View>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    );
  };
  loadMoreItems = () => {
    const {name} = this.props.route.params;
    const url = config.API_URL;
    console.log('does this load?');
    this.setState(
      state => ({page: state.page + 1}),
      () => this.fetchData(name, url),
    );
  };
  render() {
    const url = config.API_URL;
    return (
      <View style={Style.container}>
        <FlatList
          data={this.state.vehicles}
          keyExtractor={(_, index) => index}
          ListFooterComponent={this.renderLoader}
          onEndReached={() =>
            this.state.nextPage !== null && this.loadMoreItems()
          }
          onEndReachedThreshold={0.01}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Details', {
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
                  <View style={Style.details}>
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
            </View>
          )}
        />
      </View>
    );
  }
}

export default ViewMore;
