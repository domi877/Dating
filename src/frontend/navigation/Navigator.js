import 'react-native-gesture-handler'
import * as React from 'react'
import { Icon } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackScreen from './HomeScreen'
import ProfileStackScreen from './ProfileScreen'
import ChatsStackScreen from './ChatsScreen'

const Tab = createBottomTabNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName, type

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home'
            } else if (route.name === 'Chats') {
              iconName = focused ? 'chatbubbles-outline' : 'chatbubbles-outline'
              type = 'ionicon'
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person'
              type = 'octicon'
            }
            return (
              <Icon name={iconName} size={size} color={color} type={type} />
            )
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          keyboardHidesTabBar: true,
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Chats" component={ChatsStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
