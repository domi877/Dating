import React from 'react'
import { Text, View } from 'react-native'
import styles from '../style'

function shortsTextAfterLengthN(text, n = 80) {
  return text.length > n ? text.substr(0, n - 1) + ' ...' : text
}

const ChatWidget = props => {
  return (
    <View style={styles.chatWidget}>
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
    </View>
  )
}

export default ChatWidget
