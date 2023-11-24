import * as React from 'react';
import Splash from './components/Splash';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';


const FitTimer = () => {


    return (
        <Splash>
            <View style={styles.container}>
                <Text>Open up App.tsx to start working on your app!</Text>
                <StatusBar />
            </View>
        </Splash>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default FitTimer;