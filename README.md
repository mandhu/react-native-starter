# react-native-starter

This is very simple react native stater

## Dependencies
- react-nativgation
- react-native-gesture-handler
- redux
- react-redux
- redux-thunk

## Usage
Clone this project copy and paste `app/` folder into the root of your react native project
Change the `index.js` import path

```javascript
import {AppRegistry} from 'react-native';
import App from './app/App'; // ./App to ./app/App
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
```
## Included features
 - Basic navigation flow
 - Basic authenticate flow
 - Able to change them `// dark or light`

## TODO
[ ] Add change theme documentation
[ ] Add common components

