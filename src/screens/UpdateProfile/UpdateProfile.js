import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import Style from './Style';
import profileAvatar from '../../assets/images/profile-avatar.jpg';
import RadioButton from '../../components/RadioButton';

export class UpdateProfile extends Component {
  render() {
    return (
      <View style={Style.container}>
        <View style={Style.profileImageSet}>
          <Image
            source={profileAvatar}
            resizeMode="cover"
            style={Style.profileAvatar}
          />
          <View style={Style.imageButtons}>
            <TouchableOpacity style={Style.takeButton}>
              <Text style={Style.takeText}>Take a Picture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.browseButton}>
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
              <Text> Male</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.radioStyle}>
              <RadioButton />
              <Text> Female</Text>
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
      </View>
    );
  }
}

export default UpdateProfile;
