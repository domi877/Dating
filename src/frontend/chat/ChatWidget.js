import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from '../style'
import { IP } from '../misc/secrets'
import { CurrentUserUUID } from '../App'

function shortsTextAfterLengthN(text, n = 80) {
  return text.length > n ? text.substr(0, n - 1) + ' ...' : text
}

function getMessagesFromUser(userId) {
  let adress = new URL('http://'.concat(IP, ':3001/myChats')),
    params = { userId: userId }
  Object.keys(params).forEach(key =>
    adress.searchParams.append(key, params[key]),
  )
  console.log(adress)
  return fetch(adress)
    .then(res => res.json())
    .then(data => {
      console.log(data.recordset)
      return data.recordset
    })
    .catch(e => console.log(e))
}

const ChatWidget = props => {
  return (
    <CurrentUserUUID.Consumer>
      {currentUser => (
        <TouchableOpacity
          style={styles.chatWidget}
          onPress={async () => {
            let messages = await getMessagesFromUser(currentUser)
            props.navigation.push('singleChat', {
              messages: messages,
            })
          }}
        >
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle} />
          </View>
          <View style={{ flex: 1 }}>
            <View style={styles.row}>
              <Text style={{ fontWeight: 'bold' }}>{props.data.name}</Text>
              <Text style={styles.chatTimeStamp}>{props.data.timeStamp}</Text>
            </View>
            <Text style={{ opacity: 0.7 }}>
              {shortsTextAfterLengthN(props.data.text)}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </CurrentUserUUID.Consumer>
  )
}

export default ChatWidget
