import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Map from './../components/Map';

const Screen = () => {
  return (
    <View style={style.body}>
      <Text>Home Screen</Text>
      <View>
        <Map />
      </View>
    </View>
  );
};

const style=StyleSheet.create({
  body: {
    backgroundColor: '#207178'
  }
})

export default Screen;