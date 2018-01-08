import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Platform,
  StyleSheet,
  ScrollView,
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
      <View>
        <TouchableHighlight
         onPress={this._onPressButton}
         onLongPress={this._onLongPressButton}
         underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable Highlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable Opacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableWithoutFeedback
          onPress={this._onPressButton}
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
    marginTop: 10,
    marginBottom: 10,
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
