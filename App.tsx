import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FitTimer from './src';

const Main = () => {
  return (
    <SafeAreaProvider>
      <FitTimer />
    </SafeAreaProvider>
  );
}

export default Main;

