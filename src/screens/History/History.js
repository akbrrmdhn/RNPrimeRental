import React, {Component} from 'react';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import Style from './Style';
import axios from 'axios';
import {API_URL} from '@env';
import {connect} from 'react-redux';

export class History extends Component {
  state = {
    vehicles: [],
    toggleCheckBox: false,
  };

  componentDidMount() {
    const user_id = this.props.auth.authInfo.user_id;
    const roleLevel = this.props.auth.authInfo.roleLevel;
    if (roleLevel === 1) {
      axios
        .get(`${API_URL}/histories`)
        .then(({data}) => {
          console.log(data);
          this.setState({vehicles: data.result.data});
        })
        .catch(error => console.log(error));
    }
    if (roleLevel === 2) {
      axios
        .get(`${API_URL}/histories`, {
          params: {owner_id: user_id},
        })
        .then(({data}) => {
          console.log(data);
          this.setState({vehicles: data.result.data});
        })
        .catch(error => console.log(error));
    }
    if (roleLevel === 3) {
      axios
        .get(`${API_URL}/histories`, {
          params: {user_id: user_id},
        })
        .then(({data}) => {
          console.log(data.result.data);
          this.setState({vehicles: data.result.data});
        })
        .catch(error => console.log(error));
    }
  }
  setToggleCheckBox = value => {
    this.setState({toggleCheckBox: value});
  };
  render() {
    return (
      <View style={Style.container}>
        <View style={Style.historyHeading}>
          <Text style={Style.historyText}>Order History</Text>
        </View>
        <View style={Style.historyContent}>
          <View>
            <Text style={Style.cardHeading}>A week ago</Text>
            <FlatList
              data={this.state.vehicles}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={Style.historyCard}
                  onPress={() => {
                    item.payment_status_id === 1
                      ? this.props.navigation.navigate('Payment3', {
                          history_id: item.transaction_id,
                        })
                      : this.props.navigation.navigate('PaymentSucceed', {
                          history_id: item.transaction_id,
                        });
                  }}>
                  <Image
                    source={{uri: `${API_URL}${item.image}`}}
                    resizeMode="cover"
                    style={Style.cardImage}
                  />
                  <View>
                    <Text style={Style.itemName}>{item.vehicle_name}</Text>
                    <Text style={Style.itemDate}>
                      {new Date(item.rent_date).toLocaleDateString()} to{' '}
                      {new Date(item.return_date).toLocaleDateString()}
                    </Text>
                    <Text style={Style.itemPrice}>
                      Prepayment: Rp{item.total_price}
                    </Text>
                    <Text style={Style.itemStatus}>{item.payment_status}</Text>
                  </View>
                  <View style={Style.checkBox} />
                </TouchableOpacity>
              )}
            />
          </View>
          <View>
            <Text style={Style.cardHeading}>Select</Text>
          </View>
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

export default connect(mapStateToProps)(History);
