import React from 'react'
import { View, Text, StyleSheet, ListView, TextInput } from 'react-native'

export default class FavTeams extends React.Component {

  render() {
    return (
    <View style={styles.mainContainer}>
    {/* Your Teams List View*/}
      <View style={styles.container}>
        <Text style={{fontSize: 20, fontWeight:'bold'}}>Team Name</Text>
        {/* Buttons: Match Facts, View Stories, and Visit Chat Room */}
        <Text style={styles.previous}>Previous Match</Text>
        <View style={styles.previousMatch}>
          <Text>Home</Text>
          <Text>Away</Text>

        </View>
        <View style={styles.teamlinks}>
          <Button style={{width: 50, height: 50, backgroundColor: 'powderblue'}} text='Match Facts'/>
          <Button style={{width: 50, height: 50, backgroundColor: 'skyblue'}} text='Stories'/>
          <Button style={{width: 50, height: 50, backgroundColor: 'steelblue'}} text='Chat Room'/>
        </View>
      </View>
    </View>
  
    );
  }
}

const styles = StyleSheet.create({
  mainContainer : {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    padding: 20,
  },
  teamlinks: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  previous: {
    margin: 20,
    fontSize: 15,
    alignItems: 'center',
  },
  previousMatch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
});
