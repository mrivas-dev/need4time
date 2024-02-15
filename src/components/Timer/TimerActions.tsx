import React from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { styles } from './styles';

const TimerActions = ({
    isRunning,
    setRunning,
    isFinish,
    onStop
}: any) => {

    return (
        <View style={styles.timerActionsContainer}>
            {/* <IconButton
                icon={!!isRunning ? 'pause' : 'play'}
                size={25}
                mode="contained"
                onPress={() => !!isFinish ? onStop() : setRunning(prev => !prev)}
            /> */}
            <IconButton
                icon="stop"
                size={25}
                mode="outlined"
                onPress={() => onStop()}
            />
        </View>
    );
}

export default TimerActions;