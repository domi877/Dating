import { ScrollView } from 'react-native-gesture-handler'
import React from 'react'
import { Icon } from 'react-native-elements'
import { Text, View, TextInput, KeyboardAvoidingView } from 'react-native'
import styles from '../style'
import { myTexts } from '../misc/testJSON'

const SingleChat = props => {
  const { data } = props.route.params
  const [text, onChangeText] = React.useState('')
  return (
    <>
      <View>
        <ScrollView>
          {/* Do this for every Message between two people */}
          {myTexts[0].texts.map((item, key) =>
            // TODO: Change check if receiver equals to current logged in user
            item.receiver === '1' ? (
              <View key={key} style={styles.singleChatSelf}>
                <Text style={styles.messageAuthorSelf}>{data.name}</Text>
                <Text style={styles.messageSelf}>{item.value}</Text>
              </View>
            ) : (
              <View key={key} style={styles.singleChatOther}>
                <Text style={styles.messageAuthorOther}>{data.name}</Text>
                <Text style={styles.messageOther}>{item.value}</Text>
              </View>
            ),
          )}
        </ScrollView>
      </View>

      <Text>{text}</Text>
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
              name="tinder"
              color="tomato"
              type="fontisto"
              style={{ marginRight: 10, marginTop: '40%' }}
            />
            <TextInput
              contextMenuHidden={false}
              value={text}
              onChangeText={onChangeText}
              placeholder="Geben Sie hier Ihre Nachricht ein"
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                fontSize: 16,
                padding: 10,
                height: 50,
                backgroundColor: '#999DA2',
                borderRadius: 30,
              }}
            />
            <Icon
              name="corner-down-right"
              color="tomato"
              underlayColor="green"
              type="feather"
              reverse="true"
              size={15}
              style={{ marginLeft: 'auto' }}
              onPress={() => {
                onChangeText()
              }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  )
}

export default SingleChat
