import * as React from 'react';
import SignedInStack from './navigation'
import {LogBox} from 'react-native'
import AuthNavigation from './AuthNavigation'


export default function App() {
  LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core'])
  return <AuthNavigation/>
}
