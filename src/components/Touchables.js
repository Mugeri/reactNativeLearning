import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View
} from 'react-native';

export default class Touchables extends Component {
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
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable Highlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable Opacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback
          onPress={this._onPressButton}
          background={Platform.OS === 'android' ?
            TouchableNativeFeedback.SelectableBackground() : ''}
        >
            <View style={styles.button}>
              <Text style={styles.buttonText}> TouchableNativeFeedback</Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback
          onPress={this._onPressButton}
          onLongPressButton={this._onLongPressButton}
          underlayColor="white"
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196f3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  },
});

AppRegistry.registerComponent('AwesomeProject', () => Touchables);
