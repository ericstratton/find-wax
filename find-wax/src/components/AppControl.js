import React, { Component } from 'react';
import * as Location from 'expo-location';
import { Text } from 'react-native';

export default class AppControl extends Component {
  state = {
    location: {},
    errorMessage: ''
  };
  
  componentDidMount() {
    this._getLocation();
  }

  _getLocation = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'PERMISSION NOT GRANTED'
      });
    }
    const location = await Location.getCurrentPositionAsync({});
    this.setState({
      location
    });
  }

  render() {
    return (
      <Text>{JSON.stringify(this.state.location)}</Text>
    )
  }
}
