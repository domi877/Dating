import React from 'react'
import { View, Text } from 'react-native'
import styles from '../style'
import { CurrentUserUUID } from '../App'

const SingleMessage = props => {
  return (
    <CurrentUserUUID.Consumer>
      {currentUser =>
        props.data.receiver === currentUser ? (
          <View style={styles.singleChatOther}>
            <Text style={styles.messageAuthorOther}>{props.data.name}</Text>
            <Text style={styles.messageOther}>{props.data.value}</Text>
          </View>
        ) : (
          <View style={styles.singleChatSelf}>
            <Text style={styles.messageAuthorSelf}>{props.data.name}</Text>
            <Text style={styles.messageSelf}>{props.data.value}</Text>
          </View>
        )
      }
    </CurrentUserUUID.Consumer>
  )
}

export default SingleMessage
