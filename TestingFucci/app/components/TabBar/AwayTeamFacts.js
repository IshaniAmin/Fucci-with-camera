'use strict'
import React from 'react'
import { View, Text, StyleSheet, ListView } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import HomeFacts from './HomeTeamFacts.js'

export default class AwayFacts extends React.Component {
  constructor(props) {
  super(props);

 const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  this.state = {
    facts: {},
    teamName: '',
    teamInfo: ds.cloneWithRows([])
  }
  this.handleHomeTeamFacts = this.handleHomeTeamFacts.bind(this);

}

componentWillMount(){
  
  this.setState({
      facts : this.props.facts
    })
  }

componentDidMount(){

  let awayTeamId = this.state.facts.visitorteam_id;
  fetch(`http://api.football-api.com/2.0/team/${awayTeamId}?Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76`)
    .then(res => res.json())
      .then(teamfacts => {
      let starters = teamfacts.squad
      starters.map(function(match, index){
          if(starters[index].position == 'G'){
            starters[index].position = 'GoalKeeper'
            return starters[index].position
          }else if(starters[index].position == 'D'){
            starters[index].position = 'Defender'
            return starters[index].position
          }else if(starters[index].position == 'M'){
            starters[index].position = 'MidFielder'
            return starters[index].position
          }else if(starters[index].position == 'A'){
            starters[index].position = 'Forward'
            return starters[index].position
          }
          return starters[index]
        })
        
        this.setState({
          teamInfo: this.state.teamInfo.cloneWithRows(starters)
        })
      })

    fetch(`http://api.football-api.com/2.0/team/${awayTeamId}?Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76`)
    .then(res => res.json())
      .then(name => {
        // console.log('name', name.name)

        let teamName = name.name;
        
        this.setState({
          teamName: teamName
        })
        
   })
  }


  handleHomeTeamFacts() {
      this.props.navigator.push({
      title: 'Home',
      component: HomeFacts
   })
  }

render() {

    return (
      <View style={styles.body}>
       <NavBar style={styles.navBar}>
          <NavButton
          // onPress={() =>
          //   this.handleHomeTeamFacts()
          // }
          >
            <NavButtonText>
              {"Home"}
            </NavButtonText>
          </NavButton>
          <NavButton>
            <NavButtonText>
              {"Away"}
            </NavButtonText>
          </NavButton>
        </NavBar>
      <View style={styles.mainContainer}>
        <Text style={styles.teamName}>{this.state.teamName}</Text>
        <ListView
          style={styles.matches}
          dataSource={this.state.teamInfo}
          renderRow={(team) =>
          <View>
            <Text style={styles.playerInfo}>{team.name} - {team.position} </Text>
          </View>
          }
        />
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: 50,
  },
  mainContainer: {
    alignItems: 'center',
  },
  matches: {
    width: '100%',
  },
  teamName: {
    paddingTop: 5,
    fontSize: 20,
  },
  playerInfo: {
    flexDirection: 'row',
    fontSize: 15,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black', 
    marginBottom: 5,
  },
});
