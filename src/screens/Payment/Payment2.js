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

export class Payment2 extends Component {
  state = {
    modalVisible: 'false',
  };
  setModalState = value => {
    this.setState({modalVisible: value});
  };
  render() {
    const {image, name} = this.props.route.params;
    return (
      <View style={Style.container}>
        <ScrollView style={Style.scrollView}>
          <View style={Style.content}>
            <View style={Style.progress}>
              <Text> number 1-2-3 placeholder </Text>
            </View>
            <Image source={image} resizeMode="cover" style={Style.image} />
            <View style={Style.details}>
              <Text style={Style.detailsText}>{name}</Text>
              <Text style={Style.detailsText}>Prepayment (no tax)</Text>
              <Text style={Style.detailsText}>4 Days</Text>
              <Text style={Style.detailsText}>Jan 18 to Jan 22 2021</Text>
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
