import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import App from './src/App';
import mocks from './src/mocks';

mocks(1000);

AppRegistry.registerComponent(appName, () => App);
