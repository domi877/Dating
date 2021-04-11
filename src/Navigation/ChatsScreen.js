/* eslint-disable prettier/prettier */
import * as React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import ChatWidget from '../Chat/ChatWidget'
import { ScrollView } from 'react-native-gesture-handler'

function ChatsScreen() {
  let myChats = [
    {
      name: 'Dominik',
      alter: '10',
      text: 'TestText',
      timeStamp: '2021-04-11',
    },
    {
      name: 'Ahmet',
      alter: '10',
      text: 'TestText 1234345',
      timeStamp: '2021-03-21',
    },
    {
      name: 'Ahmet',
      alter: '10',
      text:
        'TestText 1234345TestText 1234345TestText 1234345TestText 1234345TestText 1234345TestText 1234345TestText 1234345TestText 1234345TestText 1234345TestText 1234345TestText 1234345',
      timeStamp: '2021-03-21',
    },
    {
      name: 'Ahmet',
      alter: '10',
      text:
        'Hallo Ahmet, wieso gehst du nicht an dein Handy? Ich habe dir schon so oft geschrieben, dass du mich zurückrufen sollst!!!',
      timeStamp: '2021-03-21',
    },
    {
      name: 'Ahmet',
      alter: '10',
      text: 'TestText 1234345',
      timeStamp: '2021-03-21',
    },
    {
      name: 'Ahmet',
      alter: '10',
      text: 'TestText 1234345',
      timeStamp: '2021-03-21',
    },
    {
      name: 'Ahmet',
      alter: '10',
      text: 'TestText 1234345',
      timeStamp: '2021-03-21',
    },
    {
      name: 'Ahmet',
      alter: '10',
      text: 'TestText 1234345',
      timeStamp: '2021-03-21',
    },
    {
      name: 'Ahmet',
      alter: '10',
      text: 'TestText 1234345',
      timeStamp: '2021-03-21',
    },
    {
      name: 'Ahmet',
      alter: '10',
      text: 'TestText 1234345',
      timeStamp: '2021-03-21',
    },
    {
      name: 'Ahmet',
      alter: '10',
      text: 'TestText 1234345',
      timeStamp: '2021-03-21',
    },
    {
      name: 'Ahmet',
      alter: '10',
      text: 'TestText 1234345',
      timeStamp: '2021-03-21',
    },
    {
      name: 'Ahmet',
      alter: '10',
      text: 'TestText 1234345',
      timeStamp: '2021-03-21',
    },
    {
      name: 'Ahmet',
      alter: '10',
      text: 'TestText 1234345',
      timeStamp: '2021-03-21',
    },
    {
      name: 'Ahmet',
      alter: '10',
      text: 'TestText 1234345',
      timeStamp: '2021-03-21',
    },
    {
      name: 'Ahmet',
      alter: '10',
      text: 'TestText 1234345',
      timeStamp: '2021-03-21',
    },
    {
      name: 'Ahmet',
      alter: '10',
      text: 'TestText 1234345',
      timeStamp: '2021-03-21',
    },
    {
      name: 'Ahmet',
      alter: '10',
      text: 'TestText 1234345',
      timeStamp: '2021-03-21',
    },
    {
      name: 'Ahmet',
      alter: '10',
      text: 'TestText 1234345',
      timeStamp: '2021-03-21',
    },
    {
      name: 'Ahmet',
      alter: '10',
      text: 'TestText 1234345',
      timeStamp: '2021-03-21',
    },
    {
      name: 'Ahmet',
      alter: '10',
      text: 'TestText 1234345',
      timeStamp: '2021-03-21',
    },
    {
      name: 'Ahmet',
      alter: '10',
      text: 'TestText 1234345',
      timeStamp: '2021-03-21',
    },
    {
      name: 'Ahmet',
      alter: '10',
      text: 'TestText 1234345',
      timeStamp: '2021-03-21',
    },
    {
      name: 'Ahmet',
      alter: '10',
      text: 'TestText 1234345',
      timeStamp: '2021-03-21',
    },
    {
      name: 'Ahmet',
      alter: '10',
      text: 'TestText 1234345',
      timeStamp: '2021-03-21',
    },
    {
      name: 'Ahmet',
      alter: '10',
      text: 'TestText 1234345',
      timeStamp: '2021-03-21',
    },
    {
      name: 'Ahmet',
      alter: '10',
      text: 'TestText 1234345',
      timeStamp: '2021-03-21',
    },
    {
      name: 'Ahmet',
      alter: '10',
      text: 'TestText 1234345',
      timeStamp: '2021-03-21',
    },
    {
      name: 'Ahmet',
      alter: '10',
      text: 'TestText 1234345',
      timeStamp: '2021-03-21',
    },
  ]
  return (
    <View>
      <ScrollView>
        {myChats.map((item, key) => (
          <ChatWidget data={item} key={key} />
        ))}
      </ScrollView>
    </View>
  )
}

const ChatsStack = createStackNavigator()

const ChatsStackScreen = () => {
  return (
    <ChatsStack.Navigator>
      <ChatsStack.Screen name="Chats" component={ChatsScreen} />
    </ChatsStack.Navigator>
  )
}

export default ChatsStackScreen
