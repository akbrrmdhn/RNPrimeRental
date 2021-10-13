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
import {Radio} from 'native-base';
import DatePicker from 'react-native-date-picker';
// import {RadioButton} from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {connect} from 'react-redux';
import config from '../../../config';
import {updateProfileAction} from '../../redux/actionCreators/auth';
import getUser from '../../utils/https/users';
import axios from 'axios';

class UpdateProfile extends Component {
  state = {
    open: false,
    name: '',
    image: '',
    gender_id: '',
    email: '',
    phone: '',
    dob: new Date(),
    address: '',
  };
  componentDidMount() {
    const id = this.props.auth.authInfo.user_id;
    const url = config.API_URL;
    axios
      .get(`${url}/users/${id}`, {
        params: {id: String(id)},
      })
      .then(({data}) => {
        const fetchUser = data.result[0];
        this.setState({
          name: fetchUser.name,
          image: fetchUser.image,
          gender_id: fetchUser.gender_id,
          email: fetchUser.email,
          phone: fetchUser.phone,
          dob: fetchUser.date_of_birth,
          address: fetchUser.address,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  setOpen = value => {
    this.setState({open: value});
  };
  handleChoosePhoto = () => {
    const options = {};
    launchImageLibrary(options, res => {
      console.log('response', res);
      this.setState({image: res});
    });
  };
  handleCamera = () => {
    const options = {};
    launchCamera(options, image => {
      console.log('response', image);
    });
  };
  saveProfile = () => {
    const queries = new FormData();
    queries.append('name', this.state.name);
    queries.append('email', this.state.email);
    queries.append('gender_id', this.state.gender_id);
    queries.append('phone', this.state.phone);
    // queries.append('date_of_birth', this.state.dob);
    queries.append('address', this.state.address);
    // console.log(this.props.auth.authInfo.user_id);
    this.props.onUpdate(queries, this.props.auth.authInfo.user_id);
    this.props.navigation.navigate('UpdateProfile');
  };
  // testButton = () => {
  //   console.log(this.props.auth.authInfo.user_id);
  // };
  render() {
    const url = config.API_URL;
    return (
      <View style={Style.container}>
        <ScrollView style={Style.scrollView}>
          <View style={Style.profileImageSet}>
            <Image
              source={
                `${url}${this.state.image}`
                  ? {
                      uri: `${url}${this.state.image}`,
                    }
                  : profileAvatar
              }
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
            <TextInput
              defaultValue={this.state.name}
              placeholder="Name"
              style={Style.textInput}
              onChangeText={text => this.setState({name: text})}
            />
            <Radio.Group
              name="genderRadio"
              defaultValue={this.state.gender_id}
              value={this.state.gender_id}
              onChange={nextValue => this.setState({gender_id: nextValue})}
              style={Style.genders}>
              <Radio colorScheme="yellow" value={1}>
                Male
              </Radio>
              <Radio colorScheme="yellow" value={2}>
                Female
              </Radio>
            </Radio.Group>
            <Text style={Style.inputLabel}>Email Address:</Text>
            <TextInput
              defaultValue={this.state.email}
              placeholder="Email Address"
              style={Style.textInput}
              onChangeText={text => this.setState({email: text})}
            />
            <Text style={Style.inputLabel}>Phone Number:</Text>
            <TextInput
              defaultValue={this.state.phone}
              placeholder="Phone Number"
              style={Style.textInput}
              onChangeText={text => this.setState({phone: text})}
            />
            <Text style={Style.inputLabel}>Date of Birth:</Text>
            {/* <TouchableOpacity
              onPress={() => this.setOpen(true)}
              style={Style.datePicker}>
              <Text>{this.state.dob.toDateString()}</Text>
            </TouchableOpacity>
            <DatePicker
              modal
              mode="date"
              open={this.state.open}
              date={this.state.dob}
              onConfirm={date => {
                this.setOpen(false);
                this.setState({dob: date});
              }}
              onCancel={() => this.setOpen(false)}
            /> */}
            <Text style={Style.inputLabel}>Delivery Address:</Text>
            <TextInput
              defaultValue={this.state.address}
              placeholder="Delivery Address"
              style={Style.textInput}
              onChangeText={text => this.setState({address: text})}
            />
            <TouchableOpacity
              style={Style.submitButton}
              onPress={() => this.saveProfile()}>
              <Text style={Style.submitText}>Save Changes</Text>
            </TouchableOpacity>
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

const mapDispatchToProps = dispatch => {
  return {
    onUpdate: (body, id) => {
      dispatch(updateProfileAction(body, id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
