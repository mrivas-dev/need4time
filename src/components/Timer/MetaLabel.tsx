import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Animated from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';
import { calculateRemainingTimeText } from '../../utils/timer';
import { numberLabelStyles, styles } from './styles';
import TimerActions from './TimerActions';
import Laps from '../Laps';

const MetaLabel = ({
    currentLap,
    initialLaps,
    remainingTime,
    isStarted,
    opacityAnimation,
    isLandscapeMode,
    translateAnimation,
    isRunning,
    setRunning,
    isFinish,
    onStop,
}: any) => {

    const renderStartLabel = () => (
        <Animated.View style={[{ right: 750 }, translateAnimation]}>
            <AntDesign
                name="caretright"
                size={isLandscapeMode ? 150 : 150}
                color="white"
            />
            <Text style={styles.pausedLabel}>{isStarted ? 'Tap to resume' : 'Tap to start'}</Text>
        </Animated.View>
    );

    const renderRunning = () => (
        isRunning ? (
            <View
                style={styles.center}
            >
                {isLandscapeMode && <Laps currentLap={currentLap} initialLaps={initialLaps} />}
                <Text style={numberLabelStyles(isLandscapeMode)}>{calculateRemainingTimeText({ remainingTime })}</Text>
                {isLandscapeMode && <TimerActions
                    isRunning={isRunning}
                    isStarted={isStarted}
                    setRunning={setRunning}
                    isFinish={isFinish}
                    onStop={onStop}
                />}
            </View>
        )
            : (<View style={styles.center}>
                <Text style={styles.smallLabel}>Remaining: {calculateRemainingTimeText({ remainingTime })}</Text>
                <Animated.View style={[opacityAnimation]}>
                    <AntDesign name="pause" size={isLandscapeMode ? 225 : 150} color="white" />
                </Animated.View>
            </View>)
    );

    return (
        <View
            style={styles.center}
        >
            {
                !isStarted
                    ? renderStartLabel()
                    : renderRunning()
            }

        </View>
    );
}

export default MetaLabel;