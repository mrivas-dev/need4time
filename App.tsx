import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FitTimer from './src';
import AppProvider from './src/provider';

const Main = () => {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <FitTimer />
      </AppProvider>
    </SafeAreaProvider>
  );
}

export default Main;

