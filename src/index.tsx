import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import Settings from './screens/settings';
import Splash from './components/Splash';
import Emom from './screens/emom';
import Amrap from './screens/amrap';
import ForTime from './screens/forTime';
import Timer from './screens/timer';
import { PaperProvider } from 'react-native-paper';
import { CombinedDarkTheme } from './utils/theme';
import EMOMTimer from './screens/emom/timer';
import AMRAPTimer from './screens/amrap/timer';

const Stack = createNativeStackNavigator();

const FitTimer = () => {
    return (
        <PaperProvider theme={CombinedDarkTheme}>
            <NavigationContainer theme={CombinedDarkTheme}>
                    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="Emom" component={Emom} />
                        <Stack.Screen name="EmomTimer" component={EMOMTimer} />
                        <Stack.Screen name="Amrap" component={Amrap} />
                        <Stack.Screen name="AmrapTimer" component={AMRAPTimer} />
                        <Stack.Screen name="ForTime" component={ForTime} />
                        <Stack.Screen name="Settings" component={Settings} />
                        <Stack.Screen name="Timer" component={Timer} />
                    </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}

export default FitTimer;