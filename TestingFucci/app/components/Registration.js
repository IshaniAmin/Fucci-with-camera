import React from 'react'

import { View, Text, StyleSheet, ListView, TextInput } from 'react-native'

export default class Main extends React.Component {

  

  render() {
    return (
    <View style={styles.mainContainer}>
      <Text>Search Team/League</Text>
      <TextInput
            style={styles.searchInput}/>
    </View>
    );
  }
}
    
const styles = StyleSheet.create({
  mainContainer : {
    flex: 1,
    padding: 20,
    justifyContent: 'center',

  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    color: 'black'
    },
});
