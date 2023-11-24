import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { expo } from './app.json';
import FitTimer from './src';

const Main = () => {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <FitTimer />
      </SafeAreaProvider>
    </PaperProvider>
  );
}
export default Main;

AppRegistry.registerComponent(expo.name, () => Main);
