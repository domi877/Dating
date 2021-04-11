import * as React from 'react'
import { Button, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

function ChatsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
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
