import * as React from 'react'
import { Button, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import styles from '../style'

function HomeScreen({ navigation }) {
  return (
    <View style={styles.center}>
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
