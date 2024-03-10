import 'react-native-gesture-handler';
import React from 'react';
import {LogBox} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { store } from './src/store';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';
import Routes from './src/routes';

LogBox.ignoreAllLogs();
function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <Provider store={store}>
          <Routes />
          <Toast position="top" bottomOffset={20} />
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
