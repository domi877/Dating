import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  chatWidget: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  row: {
    flexDirection: 'row',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  outerCircle: {
    borderRadius: 40,
    width: 60,
    height: 60,
    backgroundColor: 'white',
  },
  innerCircle: {
    borderRadius: 35,
    width: 50,
    height: 50,
    margin: 5,
    backgroundColor: 'black',
  },
})