import React from 'react'
import { Text, View } from 'react-native'
import styles from '../style'

function shortTextAfterLengthN(text, n = 80) {
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
          <Text>{props.data.name}</Text>
          <Text style={{ marginLeft: 'auto', marginRight: 10, opacity: 0.4 }}>
            {props.data.timeStamp}
          </Text>
        </View>
        <Text style={{ opacity: 0.7 }}>
          {shortTextAfterLengthN(props.data.text)}
        </Text>
      </View>
    </View>
  )
}

export default ChatWidget
