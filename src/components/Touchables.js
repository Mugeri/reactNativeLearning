import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOPacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View
} from 'react-native';

export default class Touchables extends Components {
  _onPressButton() {
    Alert.alert('Hey there')
  }

  _onLongPressButton() {
    Alert.alert('Umeshikilia sana')
  }

  render(){
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
      </View>
    )
  }
}
