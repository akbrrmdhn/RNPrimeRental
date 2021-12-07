import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Style from './Style';
import IoniconsIcon from '../../../node_modules/react-native-vector-icons/Ionicons';
import axios from 'axios';
import {API_URL} from '@env';

export class Payment2 extends Component {
  state = {
    modalVisible: 'false',
    name: '',
    image: '',
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
  render() {
    return (
      <View style={Style.container}>
        <ScrollView style={Style.scrollView}>
          <View style={Style.content}>
            <View style={Style.progress}>
              <Text style={Style.paymentStatus}> Step 2 </Text>
            </View>
            <Image
              source={{uri: this.state.image}}
              resizeMode="cover"
              style={Style.image}
            />
            <View style={Style.details}>
              <Text style={Style.detailsText}>{this.state.name}</Text>
              <Text style={Style.detailsText}>Prepayment (no tax)</Text>
              {/* <Text style={Style.detailsText}>4 Days</Text> */}
              <Text style={Style.detailsText}>Jan 18 to Jan 22 2021</Text>
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
                onPress={() =>
                  this.props.navigation.push('Payment3', {
                    history_id: this.state.history_id,
                  })
                }>
                <Text style={Style.buttonText}>Get Payment Code</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Payment2;
