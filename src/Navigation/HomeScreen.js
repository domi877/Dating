import * as React from 'react'
import { Button, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Chats"
        onPress={() => navigation.navigate('Chats')}
      />
    </View>
  )
}

const HomeStack = createStackNavigator()

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen
