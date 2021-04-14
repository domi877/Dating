import * as React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import ChatWidget from '../Chat/ChatWidget'
import SingleChat from '../Chat/singleChat'
import { ScrollView } from 'react-native-gesture-handler'
import { myUser } from '../misc/testJSON'
import { myTexts } from '../misc/testJSON'

function ChatsScreen({ navigation }) {
  return (
    <View>
      <ScrollView>
        {myUser.map((item, key) => (
          <ChatWidget data={item} key={key} navigation={navigation} />
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
      <ChatsStack.Screen name="singleChat" component={SingleChat} />
    </ChatsStack.Navigator>
  )
}

export default ChatsStackScreen
