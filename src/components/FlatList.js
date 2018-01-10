import React, { Component } from 'react';
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class FlatListTrial extends Component {
  render() {
    const maneno = [
      {key: 'Forever'},
      {key: 'Comeback'},
      {key: 'Home'},
      {key: 'Mind'},
      {key: 'love'},
      {key: 'something'},
      {key: 'living'},
      {key: 'until'}
    ]
    return (
      <View style={styles.container}>
        <FlatList
          data={maneno}
          renderItem={({item})=>
            <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

AppRegistry.registerComponent('AwesomeProject', () => FlatListTrial);
