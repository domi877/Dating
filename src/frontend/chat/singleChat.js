import React from 'react'
import styles from '../style'
import { ScrollView } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
import { Text, View, TextInput, KeyboardAvoidingView } from 'react-native'
import SingleMessage from './SingleMessage'

const SingleChat = props => {
  const { messages } = props.route.params
  const [text, onChangeText] = React.useState('')

  return (
    <>
      <View style={{ marginBottom: '14%' }}>
        <ScrollView>
          {/* Do this for every Message between two people */}
          {messages.map((item, key) => (
            <SingleMessage key={key} data={item} />
          ))}
          <Text>{text}</Text>
        </ScrollView>
      </View>

      {/* This is displayed once for a single Chat */}
      <KeyboardAvoidingView
        style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}
      >
        <View
          style={{
            backgroundColor: '#414345',
            justiftyContent: 'center',
            alignItems: 'center',
            flex: 1,
            textAlignVertical: 'center',
          }}
        >
          <View style={styles.row}>
            <Icon
              name="smile"
              color="tomato"
              type="feather"
              reverse="true"
              size={15}
            />
            <TextInput
              contextMenuHidden={false}
              value={text}
              onChangeText={onChangeText}
              placeholder="Geben Sie Ihre Nachricht ein"
              style={{
                borderRadius: 30,
                borderColor: '#ccc',
                height: 41,
                width: 235,
                marginTop: '1%',
                padding: 10,
                fontSize: 16,
                backgroundColor: '#999DA2',
              }}
            />
            <View style={{ marginLeft: '2%' }}>
              <Icon
                name="corner-down-right"
                color="tomato"
                type="feather"
                reverse="true"
                size={15}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  )
}

export default SingleChat
