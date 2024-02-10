import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Text } from 'react-native-paper';
import { calculateRemainingTimeText } from '../../utils/timer';

const RunningLabel = ({
    remainingTime,
    isFirstTen,
    isFirstLap,
    duration
}: any) => {

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    const renderGo = () => (
        <View
            style={{ alignItems: 'center' }}
        >
            <Text style={styles.numberLabel}>GO !</Text>
        </View>
    );

    return (
        (!isFirstTen && isFirstLap && remainingTime === duration)
            ? renderGo()
            : (
                <View
                    style={{ alignItems: 'center' }}
                >
                    <Text style={styles.numberLabel}>{calculateRemainingTimeText({ remainingTime })}</Text>
                </View>
            )
    );
}

export default RunningLabel;