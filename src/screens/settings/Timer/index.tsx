import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Text } from 'react-native-paper';
import MaxMinutesSelection from './MaxMinutesSelection';

const TimerSettings = ({ navigation }: any) => {

    return (
        <View style={styles.container}>
            <Text variant="headlineSmall" style={styles.headLine}>TIMER</Text>
            <MaxMinutesSelection />
        </View>
    );
}

export default TimerSettings;
