import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Text } from 'react-native-paper';
import CountdownSoundSelection from './CountdownSoundSelection';
import StartSoundSelection from './StartSoundSelection';

const SoundEffects = () => {

    return (
        <View style={{ width: '100%' }}>
            <Text variant="titleMedium" style={styles.headLine}>Sound Effects</Text>
            <CountdownSoundSelection />
            <StartSoundSelection />
        </View>
    );
}

export default SoundEffects;
