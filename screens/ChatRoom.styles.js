import { StyleSheet } from 'react-native';

export default StyleSheet.create ({
  outerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  error: {
    color: '#ff0000',
  },
  message: {

  },
  author: {

  },
  text: {
    
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30,
    color: '#dc143c',
  },
  buttonPrimary: {
    height: 36,
    backgroundColor: '#48bbec',
    borderColor: '#48bbec',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  buttonSecondary: {
    height: 36,
    backgroundColor: '#5f9ea0',
    borderColor: '#5f9ea0',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
});
