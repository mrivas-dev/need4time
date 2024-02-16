import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Animated from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';
import { calculateElapsedTimeText, calculateRemainingTimeText } from '../../utils/timer';
import { numberLabelStyles, styles } from './styles';
import TimerActions from './TimerActions';
import Laps from '../Laps';

const MetaLabel = ({
    currentLap,
    initialLaps,
    time,
    opacityAnimation,
    isLandscapeMode,
    translateAnimation,
    isGrowing,
    isStarted,
    isFirstTen,
    isRunning,
    onStop,
}: any) => {

    const renderStartLabel = () => (
        <Animated.View style={[{ right: 750 }, translateAnimation]}>
            <AntDesign
                name="caretright"
                size={150}
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
                {(isLandscapeMode && !isGrowing) && <Laps isFirstTen={isFirstTen} currentLap={currentLap} initialLaps={initialLaps} />}
                <Text style={numberLabelStyles(isLandscapeMode)}>{isGrowing ? calculateElapsedTimeText({ elapsedTime: time }) : calculateRemainingTimeText({ remainingTime: time })}</Text>
                {isFirstTen && <Text style={styles.smallLabel}> Initial countdown </Text>}
                {isLandscapeMode && <TimerActions onStop={onStop} />}
            </View>
        )
            : (<View style={styles.center}>
                <Text style={styles.smallLabel}>Remaining: {isGrowing ? calculateElapsedTimeText({ elapsedTime: time }) : calculateRemainingTimeText({ remainingTime: time })}</Text>
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