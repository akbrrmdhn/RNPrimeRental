import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  PermissionsAndroid,
  Platform,
  ToastAndroid,
} from 'react-native';
import Style from './Style';
import profileAvatar from '../../assets/images/profile-avatar.jpg';
import {Radio} from 'native-base';
import DatePicker from 'react-native-date-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {connect} from 'react-redux';
import {API_URL} from '@env';
import {updateProfileAction} from '../../redux/actionCreators/auth';
import {getUser} from '../../utils/https/users';
import {format} from 'date-fns';

class UpdateProfile extends Component {
  state = {
    open: false,
    name: '',
    image: profileAvatar,
    upload: '',
    gender_id: '',
    email: '',
    phone: '',
    dob: new Date(),
    address: '',
  };
  componentDidMount() {
    this.props.auth.isFulfilled = false;
    this.props.auth.isRejected = false;
    const token = this.props.auth.token;
    getUser(token)
      .then(({data}) => {
        const fetchUser = data.result[0];
        this.setState({
          name: fetchUser.name,
          image: fetchUser.image,
          gender_id: fetchUser.gender_id,
          email: fetchUser.email,
          phone: fetchUser.phone,
          dob: new Date(fetchUser.date_of_birth),
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
      if (res.didCancel) {
        console.log('User canceled image picker.');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else {
        console.log('response', res);
        this.setState({image: res.assets[0], upload: res.assets[0]});
      }
    });
  };
  handleCamera = () => {
    const options = {};
    launchCamera(options, res => {
      if (res.didCancel) {
        console.log('User canceled image picker.');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else {
        console.log('response', res.assets[0]);
        this.setState({image: res.assets[0].uri, upload: res.assets[0]});
      }
    });
  };
  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.handleCamera();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  saveProfile = () => {
    const queries = new FormData();
    queries.append('name', this.state.name);
    queries.append('image', {
      name: this.state.upload.fileName,
      type: this.state.upload.type,
      uri:
        Platform.OS === 'android'
          ? this.state.upload.uri
          : this.state.upload.uri.replace('file://', ''),
    });
    queries.append('email', this.state.email);
    queries.append('gender_id', this.state.gender_id);
    queries.append('phone', this.state.phone);
    queries.append('date_of_birth', format(this.state.dob, 'yyyy-MM-dd'));
    queries.append('address', this.state.address);
    console.log('token: ', this.props.auth.token);
    console.log('query: ', queries);
    this.props.onUpdate(queries, this.props.auth.token);
  };
  componentDidUpdate() {
    if (this.props.auth.isFulfilled === true) {
      ToastAndroid.show('Profile updated successfully', ToastAndroid.SHORT);
      this.props.navigation.navigate('Profile');
    }
    if (this.props.auth.isRejected === true) {
      ToastAndroid.show('An error occured', ToastAndroid.SHORT);
    }
  }
  render() {
    return (
      <View style={Style.container}>
        <ScrollView style={Style.scrollView}>
          <View style={Style.profileImageSet}>
            <Image
              source={
                `${API_URL}${this.state.image}`
                  ? {
                      uri: `${API_URL}${this.state.image}`,
                    }
                  : profileAvatar
              }
              resizeMode="cover"
              style={Style.profileAvatar}
            />
            <View style={Style.imageButtons}>
              <TouchableOpacity
                style={Style.takeButton}
                onPress={this.requestCameraPermission}>
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
            <TouchableOpacity
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
                this.setState({dob: date}, () => console.log(this.state.dob));
              }}
              onCancel={() => this.setOpen(false)}
            />
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
    onUpdate: (body, token) => {
      dispatch(updateProfileAction(body, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
