import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from './styles';

const TimerActions = ({
    isRunning,
    setRunning,
    isFinish,
    onStop
}: any) => {

    const runningLabel = (): string => {
        return (!!isRunning ? 'Pause' : 'Start')
    };

    const pausedLabel = (): string => {
        return (!!isRunning ? 'Pause' : 'Go!')
    };

    return (
        <View style={styles.timerActionsContainer}>
            <Button
                onPress={() => !!isFinish ? onStop() : setRunning(prev => !prev)}
            >
                {`${!!isFinish ? 'Re Start' : runningLabel()}`}
            </Button>
            <Button
                onPress={() => onStop()}
            >
                Stop
            </Button>
        </View>
    );
}

export default TimerActions;