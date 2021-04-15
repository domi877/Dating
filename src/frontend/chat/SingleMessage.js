import React from 'react'
import { View, Text } from 'react-native'
import styles from '../style'

const SingleMessage = props => {
  return props.item.receiver === props.value ? (
    <View style={styles.singleChatOther}>
      <Text style={styles.messageAuthorOther}>{props.data.name}</Text>
      <Text style={styles.messageOther}>{props.item.value}</Text>
    </View>
  ) : (
    <View style={styles.singleChatSelf}>
      <Text style={styles.messageAuthorSelf}>{props.data.name}</Text>
      <Text style={styles.messageSelf}>{props.item.value}</Text>
    </View>
  )
}

export default SingleMessage
