import React from 'react';
import { View } from 'react-native';
import { numberLabelStyles, styles } from './styles';
import { Text } from 'react-native-paper';
import { calculateRemainingTimeText } from '../../utils/timer';

const RunningLabel = ({
    remainingTime,
    isFirstTen,
    isFirstLap,
    duration,
    isLandscapeMode
}: any) => {

    return (
        (!isFirstTen && isFirstLap && remainingTime === duration)
            ? (
                <View
                    style={styles.center}
                >
                    <Text style={numberLabelStyles(isLandscapeMode)}>GO !</Text>
                </View>
            )
            : (
                <View
                    style={styles.center}
                >
                    <Text style={numberLabelStyles(isLandscapeMode)}>{calculateRemainingTimeText({ remainingTime })}</Text>
                </View>
            )
    );
}

export default RunningLabel;