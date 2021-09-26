import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Style from './Style';
import profileAvatar from '../../assets/images/profile-avatar.jpg';
import RadioButton from '../../components/RadioButton';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export class UpdateProfile extends Component {
  handleChoosePhoto = () => {
    const options = {};
    launchImageLibrary(options, response => {
      console.log('response', response);
    });
  };
  handleCamera = () => {
    const options = {};
    launchCamera(options, response => {
      console.log('response', response);
    });
  };
  render() {
    return (
      <View style={Style.container}>
        <ScrollView style={Style.scrollView}>
          <View style={Style.profileImageSet}>
            <Image
              source={profileAvatar}
              resizeMode="cover"
              style={Style.profileAvatar}
            />
            <View style={Style.imageButtons}>
              <TouchableOpacity
                style={Style.takeButton}
                onPress={this.handleCamera}>
                <Text style={Style.takeText}>Take a Picture</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Style.browseButton}
                onPress={this.handleChoosePhoto}>
                <Text style={Style.browseText}>Browse From Gallery</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={Style.updateContent}>
            <Text style={Style.inputLabel}>Name:</Text>
            <TextInput placeholder="Name" style={Style.textInput} />
            <View style={Style.genders}>
              <TouchableOpacity style={Style.radioStyle}>
                <RadioButton />
                <Text style={Style.genderText}> Male</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.radioStyle}>
                <RadioButton />
                <Text style={Style.genderText}> Female</Text>
              </TouchableOpacity>
            </View>
            <Text style={Style.inputLabel}>Email Address:</Text>
            <TextInput placeholder="Email Address" style={Style.textInput} />
            <Text style={Style.inputLabel}>Phone Number:</Text>
            <TextInput placeholder="Phone Number" style={Style.textInput} />
            <Text style={Style.inputLabel}>Date of Birth:</Text>
            <TextInput placeholder="Date of Birth" style={Style.textInput} />
            <Text style={Style.inputLabel}>Delivery Address:</Text>
            <TextInput placeholder="Delivery Address" style={Style.textInput} />
            <TouchableOpacity style={Style.submitButton}>
              <Text style={Style.submitText}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default UpdateProfile;
