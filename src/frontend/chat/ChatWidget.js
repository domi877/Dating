import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from '../style'
import { IP } from '../misc/secrets'
import { CurrentUserUUID } from '../App'

function shortsTextAfterLengthN(text, n = 80) {
  return text?.length > n ? text?.substr(0, n - 1) + ' ...' : text
}

class ChatWidget extends React.Component {
  state = {
    data: [],
  }
  componentDidMount() {
    if (this.props.userId !== undefined) {
      this.fetchData(this.props.userId)
    }
  }

  fetchData = userId => {
    let adress = new URL('http://'.concat(IP, ':3001/myChats/messages')),
      params = { userId: userId }
    Object.keys(params).forEach(key =>
      adress.searchParams.append(key, params[key]),
    )
    fetch(adress)
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data?.recordset })
      })
      .catch(e => console.log(e))
  }

  render() {
    return (
      <CurrentUserUUID.Consumer>
        {currentUser => (
          <TouchableOpacity
            style={styles.chatWidget}
            onPress={async () => {
              // let messages = await getMessagesFromUser(currentUser)
              console.log('data')
              console.log(this.state.data)
              this.props.navigation.push('singleChat', {
                messages: this.state.data,
              })
            }}
          >
            <View style={styles.outerCircle}>
              <View style={styles.innerCircle} />
            </View>
            <View style={{ flex: 1 }}>
              <View style={styles.row}>
                <Text style={{ fontWeight: 'bold' }}>
                  {this.state.data.name}
                </Text>
                <Text style={styles.chatTimeStamp}>
                  {this.state.data.timeStamp}
                </Text>
              </View>
              <Text style={{ opacity: 0.7 }}>
                {shortsTextAfterLengthN(this.state.data.text)}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </CurrentUserUUID.Consumer>
    )
  }
}

export default ChatWidget
