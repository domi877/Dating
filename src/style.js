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
    backgroundColor: '#f2f0ed',
  },

  chatTimeStamp: {
    marginLeft: 'auto',
    marginRight: 10,
    opacity: 1.0,
    color: '#697E74',
  },

  singleChatSelf: {
    backgroundColor: '#EFF1F1',
    width: '55%',
    marginLeft: 'auto',
    paddingRight: 10,
  },

  messageSelf: {
    backgroundColor: 'tomato',
    borderWidth: 1,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    padding: 5,
    paddingLeft: 12,
    marginTop: 3,
    color: 'white',
  },

  messageAuthorSelf: { color: 'gray', marginLeft: 25 },

  singleChatOther: {
    backgroundColor: '#EFF1F1',
    width: '55%',
  },

  messageOther: {
    backgroundColor: 'tomato',
    borderWidth: 1,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    padding: 5,
    paddingLeft: 12,
    marginTop: 3,
    marginLeft: 10,
    color: 'white',
  },

  messageAuthorOther: { color: 'gray', marginLeft: 'auto', marginRight: 15 },

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
