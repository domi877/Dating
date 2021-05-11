import React from 'react'
import styles from '../style'
import { ScrollView } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
import { View, TextInput, KeyboardAvoidingView } from 'react-native'
import SingleMessage from './SingleMessage'
import { IP } from '../misc/secrets'

class SingleChat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      userId: '',
      inputText: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    if (this.props.route.params.messages !== undefined) {
      this.setState({
        messages: this.props.route.params.messages,
        userId: this.props.route.params.userId,
      })
    }
  }

  handleChange = value => {
    this.setState({ inputText: value })
  }

  handleSubmit = event => {
    if (this.state.inputText) {
      let newMessage = {
        chatID: this.state.messages[0].chatID,
        sender: this.state.userId,
        receiver:
          this.state.userId === this.state.messages[0].receiver
            ? this.state.messages[0].sender
            : this.state.messages[0].receiver,
        value: this.state.inputText,
      }
      let newMessages = [...this.state.messages, newMessage]
      this.setState({ messages: newMessages, inputText: '' })
      this.publishMessage(newMessage)
    }
    event.preventDefault()
  }

  publishMessage = message => {
    let parameter = {}
    for (const [key, value] of Object.entries(message)) {
      parameter[key] = value
    }
    let adress = new URL('http://'.concat(IP, ':3001/myChats/messages/send')),
      params = parameter
    Object.keys(params).forEach(key =>
      adress.searchParams.append(key, params[key]),
    )
    fetch(adress, { body: message, method: 'POST' })
      .then(res => res.text())
      .then(data => {
        this.setState({ data: data })
      })
      .catch(e => console.error(e))
  }

  render() {
    return (
      <>
        <View style={{ marginBottom: '14%' }}>
          <ScrollView>
            {/* Do this for every Message between two people */}
            {this.state.messages?.map((item, key) => (
              <SingleMessage key={key} data={item} />
            ))}
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
                value={this.state.inputText}
                onChangeText={this.handleChange}
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
                  onPress={this.handleSubmit}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </>
    )
  }
}

export default SingleChat
