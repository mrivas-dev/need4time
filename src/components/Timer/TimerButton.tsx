import React from 'react';
import { Button } from 'react-native-paper';

const TimerButton = ({
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
        <Button
                onPress={() => setRunning(prev => !prev)}
            >
                {`${!!isFinish ? 'Re Start' : runningLabel()}`}
            </Button>
    );
}

export default TimerButton;