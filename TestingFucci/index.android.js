
import React, { Component } from 'react';
import {
  AppRegistry, 
  StyleSheet, 
  Text, 
  View, 
  NavigatorIOS
} from 'react-native';
import Home from './app/components/Home';

class App extends React.Component {

  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Fucci',
          component: Home
        }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
});

AppRegistry.registerComponent('App', () => App);

