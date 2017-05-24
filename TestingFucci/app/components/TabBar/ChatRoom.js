import React from 'react';

import { TextInput, StyleSheet, View, Text, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import moment from 'moment';

export default class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      comment: ''
        };
    this.onSend = this.onSend.bind(this);
  }
  componentWillMount() {
    let newdate = moment().format('DD.MM.YYYY')


    this.setState({
      messages: [
        {
          _id: 1,
          text: 'hello',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://lh6.googleusercontent.com/-asX3qUmQTns/AAAAAAAAAAI/AAAAAAAACNs/Jx4_cyhzRwU/photo.jpg',
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
      
        <Text style={styles.title}>Board</Text>
    
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          user={{
            _id: 1,
          }}
        />
        <TextInput value={this.state.comment}
        onPress={this.onSend}
        style={styles.postComment}/>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <TextInput keyboardType='numeric'/>
            </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center'
    },
    title: {
        padding: 20,
        fontSize: 15,
    },
    postComment: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'orange',
    },
})
