import React from 'react'
import styles from '../style'
import { ScrollView } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
import { Text, View, TextInput, KeyboardAvoidingView } from 'react-native'
import SingleMessage from './SingleMessage'

class SingleChat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      inputText: '',
      userId: '',
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

  handleChange(value) {
    this.setState({ inputText: value })
  }

  handleSubmit(event) {
    if (this.state.inputText) {
      let newMessage = {
        uuid: '14C2DD8F-7393-4A07-A409-534F62BFA9i8',
        chatID: 'F336409E-5B59-4160-A0EA-A9EA96959019',
        sender: this.state.userId,
        receiver: '1EE1B931-0FB3-4F4F-B67E-00737CA37EA8',
        value: this.state.inputText,
        time: '2021-05-09T18:50:32.347Z',
      }
      let newMessages = [...this.state.messages, newMessage]
      this.setState({ messages: newMessages, inputText: '' })
    }
    event.preventDefault()
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
