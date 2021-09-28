import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Modal} from 'react-native';
import Style from './Style';
import IoniconsIcon from '../../../node_modules/react-native-vector-icons/Ionicons';

export class Payment3 extends Component {
  state = {
    modalVisible: 'false',
  };
  setModalState = value => {
    this.setState({modalVisible: value});
  };
  render() {
    return (
      <View style={Style.container}>
        <ScrollView style={Style.scrollView}>
          <View style={Style.content}>
            <View style={Style.progress}>
              <Text> number 1-2-3 placeholder </Text>
            </View>
            <View style={Style.paymentCodeSection}>
              <Text style={Style.paymentHeading}>Payment Code:</Text>
              <Text style={Style.paymentCode}>90887620</Text>
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
                <Text style={Style.bankAccountHeading}>Vespa Rental Jogja</Text>
              </View>
            </View>
            <View style={Style.borderBottom} />
            <View>
              <View style={Style.bankInfo}>
                <Text style={Style.bookingCode}>Booking Code: 1234ABCD</Text>
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
              <Text style={Style.orderDetailsText}>2 Vespa</Text>
              <Text style={Style.orderDetailsText}>Prepayment (no tax)</Text>
              <Text style={Style.orderDetailsText}>4 Days</Text>
              <Text style={Style.orderDetailsText}>
                From Jan 18 2021 to Jan 22 2021
              </Text>
            </View>
            <View style={Style.borderBottom} />
            <View style={Style.totalPrice}>
              <Text style={Style.priceText}>Rp. 245.000</Text>
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
                <Text>Name: Jessica Jane (jjane@mail.com)</Text>
                <Text>0890876789 (active)</Text>
                <Text>Jakarta, Indonesia</Text>
              </View>
            </Modal>
            <View style={Style.buttonPosition}>
              <TouchableOpacity
                style={Style.button}
                onPress={() => this.props.navigation.push('Payment3')}>
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
