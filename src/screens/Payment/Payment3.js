import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Modal} from 'react-native';
import Style from './Style';
import IoniconsIcon from '../../../node_modules/react-native-vector-icons/Ionicons';
import axios from 'axios';
import {API_URL} from '@env';

export class Payment3 extends Component {
  state = {
    modalVisible: 'false',
  };
  setModalState = value => {
    this.setState({modalVisible: value});
  };
  componentDidMount() {
    const history_id = this.props.route.params.history_id;
    console.log(history_id);
    axios
      .get(`${API_URL}/histories/${history_id}`)
      .then(({data}) => {
        const historyData = data.result[0];
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
      })
      .catch(error => console.log(error));
  }
  submitPayment = () => {
    const history_id = this.props.route.params.history_id;
    const body = {status_id: 2};
    axios
      .patch(`${API_URL}/histories/${history_id}`, body)
      .then(result =>
        setTimeout(
          () =>
            this.props.navigation.navigate('PaymentSucceed', {
              history_id,
            }),
          5000,
        ),
      )
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const rentDate = new Date(this.state.rent_date).getDate();
    const returnDate = new Date(this.state.return_date).getDate();
    const rentMonth = new Date(this.state.rent_date).getMonth();
    const returnMonth = new Date(this.state.return_date).getMonth();
    const rentYear = new Date(this.state.rent_date).getFullYear();
    const returnYear = new Date(this.state.return_date).getFullYear();
    return (
      <View style={Style.container}>
        <ScrollView style={Style.scrollView}>
          <View style={Style.content}>
            <View style={Style.progress}>
              <Text style={Style.paymentStatus}> Step 3 </Text>
            </View>
            <View style={Style.paymentCodeSection}>
              <Text style={Style.paymentHeading}>Payment Code:</Text>
              <Text style={Style.paymentCode}>{this.state.payment_code}</Text>
              <Text style={Style.paymentSubtext}>
                Insert your payment code while you transfer booking order
              </Text>
              <Text style={Style.paymentSubtext}>Pay before:</Text>
              <Text style={Style.timer}>1:59:34</Text>
              <View style={Style.bankInfo}>
                <Text style={Style.bankAccountHeading}>
                  Bank Account Information :
                </Text>
                <Text style={Style.bankAccount}>0290-90203-345-2</Text>
                <Text style={Style.bankAccountHeading}>Prime Rental</Text>
              </View>
            </View>
            <View style={Style.borderBottom} />
            <View>
              <View style={Style.bankInfo}>
                <Text style={Style.bookingCode}>
                  Booking Code: {this.state.booking_code}
                </Text>
                <Text style={Style.bookingSubtext}>
                  Use booking code to pick up your vespa
                </Text>
                <TouchableOpacity style={Style.copyBookingCode}>
                  <Text style={Style.copyBookingCodeText}>
                    Copy Payment {'&'} Booking Code
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={Style.orderDetails}>
              <Text style={Style.orderDetailsText}>Order details :</Text>
              <Text style={Style.orderDetailsText}>
                {this.state.quantity} {this.state.name}
              </Text>
              <Text style={Style.orderDetailsText}>Prepayment (no tax)</Text>
              <Text style={Style.orderDetailsText}>
                {rentDate}/{rentMonth}/{rentYear} - {returnDate}/{returnMonth}/
                {returnYear}
              </Text>
            </View>
            <View style={Style.borderBottom} />
            <View style={Style.totalPrice}>
              <Text style={Style.priceText}>Rp. {this.state.total_price}</Text>
              <IoniconsIcon
                name="information-circle"
                size={40}
                color="#000"
                onPress={() => this.setModalState(true)}
              />
            </View>
            <Modal visible={this.state.modalVisible} animationType="fade">
              <View>
                <IoniconsIcon
                  name="close"
                  size={40}
                  color="#DFDEDE"
                  onPress={() => this.setModalState(false)}
                />
                <Text>ID: 9087627392624</Text>
                <Text>
                  Name: {this.state.patron} ({this.state.email})
                </Text>
                <Text>{this.state.phone} (active)</Text>
                <Text>{this.state.address}</Text>
              </View>
            </Modal>
            <View style={Style.buttonPosition}>
              <TouchableOpacity
                style={Style.button}
                onPress={() => this.submitPayment()}>
                <Text style={Style.buttonText}>Finish Payment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Payment3;
