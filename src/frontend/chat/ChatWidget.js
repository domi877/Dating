import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from '../style'
import { IP } from '../misc/secrets'
import { CurrentUserUUID } from '../App'

function shortsTextAfterLengthN(text, n = 80) {
  return text?.length > n ? text?.substr(0, n - 1) + ' ...' : text
}

function trimDateToYYYYMMDD(date) {
  let YYYYMMDD = /\d{4}-\d{2}-\d{2}/
  return date?.toString().match(YYYYMMDD)
}

function trimDateToTime(date) {
  let YYYYMMDD = /\d{2}:\d{2}/
  return date?.toString().match(YYYYMMDD)
}

class ChatWidget extends React.Component {
  state = {
    data: [],
  }
  componentDidMount() {
    if (this.props.userId !== undefined) {
      this.fetchData(this.props.data.uuid)
    }
  }

  fetchData = chatId => {
    let adress = new URL('http://'.concat(IP, ':3001/myChats/messages')),
      params = { chatId: chatId }
    Object.keys(params).forEach(key =>
      adress.searchParams.append(key, params[key]),
    )
    fetch(adress)
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data })
      })
      .catch(e => console.error(e))
  }

  render() {
    let otherPerson = this.props.data.otherPerson
    return (
      <CurrentUserUUID.Consumer>
        {currentUser => (
          <TouchableOpacity
            style={styles.chatWidget}
            onPress={async () => {
              this.props.navigation.push('singleChat', {
                messages: this.state.data.recordset,
              })
            }}
          >
            <View style={styles.outerCircle}>
              <View style={styles.innerCircle} />
            </View>
            <View style={{ flex: 1 }}>
              <View style={styles.row}>
                <Text style={{ fontWeight: 'bold' }}>
                  {[otherPerson.firstName, otherPerson.lastName].join(' ')}
                </Text>
                <Text style={styles.chatTimeStamp}>
                  {trimDateToYYYYMMDD(this.props.data.lastMessage.time)}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={{ opacity: 0.7 }}>
                  {shortsTextAfterLengthN(this.props.data.lastMessage.value)}
                </Text>
                <Text style={styles.chatTimeStamp}>
                  {trimDateToTime(this.props.data.lastMessage.time)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      </CurrentUserUUID.Consumer>
    )
  }
}

export default ChatWidget
