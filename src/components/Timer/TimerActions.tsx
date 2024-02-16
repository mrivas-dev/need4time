import React from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { styles } from './styles';

interface TimerActionsProps {
    onStop: () => void;
};

const TimerActions = ({
    onStop
}: TimerActionsProps) => (
    <View style={styles.timerActionsContainer}>
        <IconButton
            icon="stop"
            size={25}
            mode="outlined"
            onPress={() => onStop()}
        />
    </View>
);

export default TimerActions;