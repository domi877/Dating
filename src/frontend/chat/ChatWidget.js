import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from '../style'

function shortsTextAfterLengthN(text, n = 80) {
  return text.length > n ? text.substr(0, n - 1) + ' ...' : text
}

const ChatWidget = props => {
  return (
    <TouchableOpacity
      style={styles.chatWidget}
      onPress={() =>
        props.navigation.push('singleChat', {
          data: props.data,
        })
      }
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
  )
}

export default ChatWidget
