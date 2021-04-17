import React from 'react'
import Navigation from './navigation/Navigator'

const App = () => {
  return <Navigation />
}

export default App

export const CurrentUserUUID = React.createContext(
  '746EC066-CA16-4AF2-9A80-D8007DB8705E',
)
