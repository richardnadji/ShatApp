# ShatApp
react native project [codaisseur](https://reader.codaisseur.com/courses/advanced-session-react-native)
### Sign Up
* screens/SignUp.js
* screens/SignUp.styles.js
### Cleaning Up
* ShatApp.js
* ShatApp.styles.js
* cleanup index.ios.js
### Building Forms
to build forms a bit easier we'll use a package [tcomb-form-native](https://github.com/gcanti/tcomb-form-native)
```sh
$ npm install --save tcomb-form-native
//or yarn
$ yarn add tcomb-form-native
```
* Person.js
* add Person to SignUp
* add button (TouchableHighlight) to SignUp
* fix keyboard view (KeyboardAvoidingView)
* add functionality to SignUp form/button
### Connect to API, Client
communicate with an API we'll use a [Feathers client](https://shutup-api.codaisseur.cloud/)
```sh
yarn add feathers feathers-hooks feathers-authentication@0.7.11 socket.io-client babel-polyfill
```
* lib/api.js
### Sign Up Action
* actions/users/sign-up.js
* update SignUp.js
### Redux
set up redux store
```sh
$ yarn add redux react-redux redux-thunk react-native-router-flux remote-redux-devtools
```
* store.js
* middleware/api.js
* actions/messages/post.js
* actions/messages/subscribe.js
* actions/users/load.js
* actions/users/sign-in.js
* actions/users/sign-out.js
* update actions/users/sign-up.js
* reducers/index.js
* reducers/loading.js
* reducers/messages.js
* reducers/user.js
* update SignUp.js with connect to user redux actions
### Routes
