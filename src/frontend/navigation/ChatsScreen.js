import * as React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import ChatWidget from '../chat/ChatWidget'
import SingleChat from '../chat/singleChat'
import { IP } from '../misc/secrets'

async function getChatsFromUser(
  userId = '746EC066-CA16-4AF2-9A80-D8007DB8705E',
) {
  let adress = new URL('http://'.concat(IP, ':3001/myChats/messages')),
    params = { userId: userId }
  Object.keys(params).forEach(key =>
    adress.searchParams.append(key, params[key]),
  )
  console.log(adress)
  return fetch(adress)
    .then(res => res.json())
    .then(data => {
      console.log(data.recordset)
      return data.recordset
    })
    .catch(e => console.log(e))
}

async function ChatsScreen({ navigation }) {
  let data = await getChatsFromUser()
  console.log(data)
  return (
    <View>
      <ScrollView>
        {data.map((item, key) => (
          <Text key={key}>{item.uuid}</Text>
          // <ChatWidget data={item} key={key} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  )
}

const ChatsStack = createStackNavigator()

const ChatsStackScreen = () => {
  return (
    <ChatsStack.Navigator>
      <ChatsStack.Screen name="Chats1" component={ChatsScreen} />
      <ChatsStack.Screen name="singleChat" component={SingleChat} />
    </ChatsStack.Navigator>
  )
}

export default ChatsStackScreen
