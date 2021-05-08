import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import ChatWidget from '../chat/ChatWidget'
import SingleChat from '../chat/singleChat'
import { IP } from '../misc/secrets'

function ChatsScreen({ navigation }) {
  const [userId, setUserId] = useState()
  const [userData, setUserData] = useState()

  useEffect((currentUserId = '746EC066-CA16-4AF2-9A80-D8007DB8705E') => {
    let adress = new URL('http://'.concat(IP, ':3001/myChats')),
      params = { userId: currentUserId }
    Object.keys(params).forEach(key =>
      adress.searchParams.append(key, params[key]),
    )
    setUserId(currentUserId)
    fetch(adress)
      .then(res => res.json())
      .then(res => {
        setUserData(res)
      })
      .catch(e => console.log(e))
  }, [])

  return (
    <View>
      <ScrollView>
        {userData?.map((item, key) => {
          return (
            <ChatWidget
              userId={userId}
              data={item}
              key={key}
              navigation={navigation}
            />
          )
        })}
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
