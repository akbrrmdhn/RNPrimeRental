import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Style from './Style';
import homeImage from '../../assets/images/home.jpg';

export class Home extends Component {
  render() {
    return (
      <View style={Style.container}>
        <ImageBackground
          source={homeImage}
          resizeMode="cover"
          style={Style.image}>
          <View style={Style.content}>
            <View style={Style.vehicleFinder}>
              <View style={Style.finderFirstRow}>
                <TextInput
                  style={Style.locationTextInput}
                  placeholder="Select location"
                />
                <TextInput style={Style.typeTextInput} placeholder="Car" />
              </View>
              <View style={Style.finderSecondRow}>
                <TextInput
                  style={Style.locationTextInput}
                  placeholder="Select date"
                />
                <TextInput style={Style.typeTextInput} placeholder="1 day" />
              </View>
              <View style={Style.finderArea}>
                <TouchableOpacity style={Style.finderButton}>
                  <Text style={Style.finderText}>Search Vehicle</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={Style.recommended}>
              <View style={Style.recommendedHeading}>
                <Text>Recommended</Text>
                <Text>View More {'>'}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Component;
