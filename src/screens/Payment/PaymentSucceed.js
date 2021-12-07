import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import axios from 'axios';
import {API_URL} from '@env';
import {connect} from 'react-redux';
import Style from './Style';

class PaymentSucceed extends Component {
  state = {
    historyData: [],
  };
  componentDidMount() {
    const history_id = this.props.route.params.history_id;
    axios
      .get(`${API_URL}/histories/${history_id}`)
      .then(({data}) => {
        const historyData = data.result[0];
        console.log(historyData);
        this.setState({history_id: history_id});
        this.setState({name: historyData.rented_vehicle});
        this.setState({booking_code: historyData.booking_code});
        this.setState({payment_code: historyData.payment_code});
        this.setState({total_price: historyData.total_price});
        this.setState({image: `${API_URL}${historyData.image}`});
        this.setState({quantity: historyData.quantity});
        this.setState({patron: historyData.patron});
        this.setState({rent_date: historyData.rent_date});
        this.setState({return_date: historyData.return_date});
        this.setState({category: historyData.category});
        this.setState({location: historyData.location});
        this.setState({email: historyData.email});
        this.setState({phone: historyData.phone});
        this.setState({rent_status: historyData.rent_status});
        this.setState({rent_status_id: historyData.rent_status_id});
      })
      .catch(error => console.log(error));
  }
  updatePaymentStatus = () => {
    const history_id = this.props.route.params.history_id;
    const body = {status_id: 3};
    axios
      .patch(`${API_URL}/histories/${history_id}`, body)
      .then(result => this.props.navigation.pop(1))
      .catch(error => console.log(error));
  };
  render() {
    let screen;
    if (this.props.auth.authInfo.roleLevel === 2) {
      screen = (
        <View style={Style.content}>
          {this.state.rent_status_id === 2 ? (
            <Text style={Style.paymentStatusSucceed}>Payment success!</Text>
          ) : (
            <Text style={Style.paymentStatusSucceed}>Payment Approved!</Text>
          )}
          <Image
            source={{uri: `${this.state.image}`}}
            resizeMode="cover"
            style={Style.image}
          />
          <View>
            <Text style={Style.detailsText}>
              {this.state.quantity} {this.state.name}
            </Text>
            <Text style={Style.detailsText}>Prepayment (no tax)</Text>
            <Text style={Style.detailsText}>
              {new Date(this.state.rent_date).toLocaleDateString()} to{' '}
              {new Date(this.state.return_date).toLocaleDateString()}
            </Text>

            <View style={Style.borderBottom} />
            <Text style={Style.detailsText}>ID 28093819083</Text>
            <Text style={Style.detailsText}>
              {this.state.patron} ({this.state.email})
            </Text>
            <Text style={Style.detailsText}>{this.state.phone}</Text>
            <Text style={Style.detailsText}>{this.state.address}</Text>
          </View>
          <View style={Style.buttonPosition}>
            {this.state.rent_status_id === 2 ? (
              <TouchableOpacity
                style={Style.button}
                onPress={() => this.updatePaymentStatus()}>
                <Text style={Style.buttonText}>Approve Payment</Text>
                <Text style={Style.buttonText}>
                  Total: {this.state.total_price}
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={Style.button}>
                <Text style={Style.buttonText}>Payment Approved!</Text>
                <Text style={Style.buttonText}>
                  Total: {this.state.total_price}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      );
    }
    if (this.props.auth.authInfo.roleLevel === 3) {
      screen = (
        <View style={Style.content}>
          {this.state.rent_status_id === 2 ? (
            <Text style={Style.paymentStatus}>Payment success!</Text>
          ) : (
            <Text style={Style.paymentStatus}>Payment Approved!</Text>
          )}
          <Image
            source={{uri: `${this.state.image}`}}
            resizeMode="cover"
            style={Style.image}
          />
          <View>
            <Text style={Style.detailsText}>
              {this.state.quantity} {this.state.name}
            </Text>
            <Text style={Style.detailsText}>Prepayment (no tax)</Text>
            <Text style={Style.detailsText}>
              {new Date(this.state.rent_date).toLocaleDateString()} to{' '}
              {new Date(this.state.return_date).toLocaleDateString()}
            </Text>

            <View style={Style.borderBottom} />
            <Text style={Style.detailsText}>ID 28093819083</Text>
            <Text style={Style.detailsText}>
              {this.state.patron} ({this.state.email})
            </Text>
            <Text style={Style.detailsText}>{this.state.phone}</Text>
            <Text style={Style.detailsText}>{this.state.address}</Text>
          </View>
          <View style={Style.buttonPosition}>
            <TouchableOpacity style={Style.button}>
              <Text
                style={Style.buttonText}
                onPress={() => this.props.navigation.navigate('BottomTabs')}>
                Total: {this.state.total_price}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    return <View style={Style.container}>{screen}</View>;
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(PaymentSucceed);
