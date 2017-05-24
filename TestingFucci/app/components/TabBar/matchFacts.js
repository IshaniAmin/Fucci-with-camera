'use strict'

import React from 'react'

import {StyleSheet, View, Component, Text} from 'react-native'


const styles = StyleSheet.create({
	description: {
		fontSize: 20,
		textAlign: 'center',
		color: 'blue',
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
})

export default class MatchFacts extends React.Component {
	constructor(props) {
    super(props)
    
    this.state = {
      selectedTab: 'matchFacts',
      matchInfo: {}
    }

  }
  
  componentWillMount(){
   //this is the prop that was navigated over from matchPage
  //console.log(this.props.matchFacts)
   
  
        this.setState({
          matchInfo : this.props.matchFacts
        })
      

   console.log(this.state.matchInfo)
  }

  componentDidMount(){

    console.log('did mount ' + this.state.matchInfo.localteam_name)
  }

  // _renderContent = (color: string, pageText: string) => {
  //   return (
  //     <View style={[styles.tabContent, {backgroundColor: color}]}>
  //       <Text style={styles.tabText}>{pageText}</Text>
  //       <Text style={styles.tabText}></Text>
  //     </View>

  // 		)
  // 	} 
	render() {
		return (
			<View style={styles.container}>

 			 <Text style={styles.facts}>{this.state.matchInfo.localteam_name}</Text>
			</View>
		)
	}
}
