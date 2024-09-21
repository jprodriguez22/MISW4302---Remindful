import * as react from 'react'
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { expo } from '../../app.json';

import App from './app'

export default function Index() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>  
  );
}

AppRegistry.registerComponent(expo.name, () => Index);