import React, { Component } from 'react';
import { Text } from 'react-native';
import * as Location from 'expo-location';

export default class _getLocation extends Component {
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
