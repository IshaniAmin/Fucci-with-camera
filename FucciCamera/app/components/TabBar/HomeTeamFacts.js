'use strict'
import React from 'react'
import { View, Text, StyleSheet, ListView } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';
import AwayFacts from './AwayTeamFacts.js';


export default class HomeFacts extends React.Component {
  constructor(props) {
  super(props);

 const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  this.state = {
    teamFacts: {},
    teamInfo: ds.cloneWithRows([]),
    teamName: ''
  }
  this.handleAwayTeamFacts = this.handleAwayTeamFacts.bind(this);

}

componentWillMount(){
  
  this.setState({
      teamFacts : this.props.teamFacts
    })
  }

componentDidMount(){

  let localTeamId = this.state.teamFacts.localteam_id;
  fetch(`http://api.football-api.com/2.0/team/${localTeamId}?Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76`)
    .then(res => res.json())
      .then(teamInfo => {
      let starters = teamInfo.squad

      // let starters = players.filter( starter =>
      //       players.appearances !== 0;
      //   )




    // let songsUpdated = this.state.songs._dataBlob.s1.filter(
    //       song => song._id !== oldSongId
    //     );

      starters.map(function(match, index){

        // if(lineUp[index].appearances > 10){
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
          
        // }
         return starters[index]
      })
        
        this.setState({
          teamInfo: this.state.teamInfo.cloneWithRows(starters)
        })
      })

    fetch(`http://api.football-api.com/2.0/team/${localTeamId}?Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76`)
    .then(res => res.json())
      .then(name => {

        let teamName = name.name;
        
        this.setState({
          teamName: teamName
        })   
   })
  }

  handleAwayTeamFacts(id) {
    console.log('match', id)
    fetch(`http://api.football-api.com/2.0/matches/${id}?Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76`)
    .then(res => res.json())
      .then(awayFacts => {
      this.props.navigator.push({
      title: 'Away',
      component: AwayFacts,
      passProps: {facts: awayFacts}
   })
  })
}

render() {

    return (
      <View style={styles.body}>
       <NavBar style={styles.navBar}>
          <NavButton>
            <NavButtonText>
              {"Home"}
            </NavButtonText>
          </NavButton>
          <NavButton
              onPress={() =>
              this.handleAwayTeamFacts(this.state.teamFacts.id)}>
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
