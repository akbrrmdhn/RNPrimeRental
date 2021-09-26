import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Style from './Style';

export class Payment extends Component {
  render() {
    const {image, name} = this.props.route.params;
    return (
      <View style={Style.container}>
        <ScrollView style={Style.scrollView}>
          <View style={Style.content}>
            <View style={Style.progress}>
              <Text>number 1-2-3 placeholder</Text>
            </View>
            <TextInput placeholder="ID Card Number" style={Style.textInput} />
            <TextInput placeholder="Name" style={Style.textInput} />
            <TextInput placeholder="Last Name" style={Style.textInput} />
            <TextInput
              placeholder="Mobile Phone (Must be active)"
              style={Style.textInput}
            />
            <TextInput placeholder="Email Address" style={Style.textInput} />
            <TextInput
              placeholder="Location (home, office, etc.)"
              style={Style.textInput}
            />
            <TextInput
              placeholder="Payment Type (Dropdown)"
              style={Style.textInput}
            />
            <View style={Style.buttonPosition}>
              <TouchableOpacity
                style={Style.button}
                onPress={() =>
                  this.props.navigation.push('Payment2', {
                    image: image,
                    name: name,
                  })
                }>
                <Text style={Style.buttonText}>See Order Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Payment;
