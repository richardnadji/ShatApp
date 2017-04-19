  import { StyleSheet } from 'react-native';

  export default StyleSheet.create ({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    title: {
      fontSize: 30,
      alignSelf: 'center',
      marginBottom: 30,
      color: '#dc143c',
    },
    button: {
      height: 36,
      backgroundColor: '#48bbec',
      borderColor: '#48bbec',
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
