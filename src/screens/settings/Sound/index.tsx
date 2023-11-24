import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import EnableSound from './EnableSound';
import SoundEffects from './SoundEffects';

const SoundSettings = ({ navigation }: any) => {

    return (
        <View style={styles.container}>
            <EnableSound />
            <SoundEffects />
        </View>
    );
}

export default SoundSettings;
