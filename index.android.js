/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class belloApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Bello
        </Text>
        <Text style={styles.tagline}>Belanja Semudah Bilang Hello!</Text>
        <Text style={{ color: 'white', marginTop: '80%' }}>Supported By</Text>
        <Image
          source={{ uri: 'http://www.mus-watch.com/wp-content/uploads/2016/07/bukalapak.png'}}
          style={{ width: '30%', height: 100, resizeMode: 'cover' }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D8114C',
  },
  welcome: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5,
    color: '#FFFFFF',
    marginTop: '30%'
  },
  tagline: {
    fontSize: 20,
    textAlign: 'center',
    margin: 0,
    color: '#FFFFFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('belloApp', () => belloApp);
