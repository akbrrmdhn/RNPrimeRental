import axios from 'axios';
import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import Style from './Style';
import {API_URL} from '@env';

export class Payment extends Component {
  state = {
    identity_number: '',
    name: '',
    phone: '',
    email: '',
    address: '',
  };
  componentDidMount() {
    console.log(this.props.route.params);
  }
  userPrompt = () => {
    const title = 'Reserve Vehicle';
    const message = 'Do you really want to reserve vehicle with these data?';
    const buttons = [
      {
        text: 'No',
        type: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => this.reserveVehicle(),
      },
    ];
    Alert.alert(title, message, buttons);
  };
  reserveVehicle = () => {
    const {id, quantity, rent_date, return_date, total_price, user_id} =
      this.props.route.params;
    const idNumber = this.state.identity_number;
    const body = {
      user_id,
      vehicle_id: id,
      quantity,
      rent_date,
      return_date,
      total_price,
      status_id: 1,
      // identity_number: idNumber,
    };
    // const body = new URLSearchParams();
    // body.append('user_id', user_id);
    // body.append('vehicle_id', id);
    // body.append('quantity', quantity);
    // body.append('rent_date', rent_date);
    // body.append('return_date', return_date);
    // body.append('total_price', total_price);
    // body.append('card_id', idNumber);
    console.log(idNumber);
    axios
      .post(`${API_URL}/histories/`, body)
      .then(result =>
        setTimeout(
          () =>
            this.props.navigation.navigate('Payment2', {
              history_id: result.data.result,
            }),
          3000,
        ),
      )
      .catch(error => console.log(error));
  };
  render() {
    return (
      <View style={Style.container}>
        <ScrollView style={Style.scrollView}>
          <View style={Style.content}>
            <View style={Style.progress}>
              <Text style={Style.paymentStatus}> Step 1 </Text>
            </View>
            <TextInput
              placeholder="ID Card Number"
              onChangeText={text => this.setState({identity_number: text})}
              style={Style.textInput}
              maxLength={9}
            />
            <TextInput
              placeholder="Name"
              defaultValue={this.props.auth.authInfo.name}
              onChangeText={text => this.setState({name: text})}
              style={Style.textInput}
            />
            <TextInput
              defaultValue={this.props.auth.authInfo.phone}
              placeholder="Mobile Phone (Must be active)"
              onChangeText={text => this.setState({phone: text})}
              style={Style.textInput}
            />
            <TextInput
              placeholder="Email Address"
              defaultValue={this.props.auth.authInfo.email}
              onChangeText={text => this.setState({email: text})}
              style={Style.textInput}
            />
            <TextInput
              placeholder="Location (home, office, etc.)"
              defaultValue={this.props.auth.authInfo.address}
              onChangeText={text => this.setState({address: text})}
              style={Style.textInput}
            />
            <View style={Style.buttonPosition}>
              <TouchableOpacity
                style={Style.button}
                onPress={() => this.userPrompt()}>
                <Text style={Style.buttonText}>See Order Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(Payment);
