import React from 'react';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Text, TouchableRipple } from 'react-native-paper';
import { useCountdown } from 'react-native-countdown-circle-timer';
import { calculateRemainingTimeText } from '../../../utils/timer';
import { styles } from './styles';

const InnerCircle = ({
    keyId,
    isFirstLap,
    isFirstTen,
    duration,
    isStarted,
    isPlaying,
    isFinished,
    onPress,
}) => {
    const {
        path,
        pathLength,
        stroke,
        strokeDashoffset,
        remainingTime,
        elapsedTime,
        
    } = useCountdown({
        isPlaying,
        duration,
        colors: `url(#${keyId})`,
    });
    const renderFinishedLabel = () => {
        return (
            <View
                style={{ alignItems: 'center' }}
            >
                <Text>Well done!</Text>
                <View
                // enterStyle={{
                //     scale: 5.5,
                //     y: -10,
                //     opacity: 0,
                // }}
                // animation="bouncy"
                >
                    <Text
                        style={styles.finishedLabel}>You are a beast! 🔥</Text>
                </View>
            </View>
        )
    }

    const renderPausedLabel = ({ remainingTime }) => {
        return (
            <View
                style={{ alignItems: 'center' }}
            >
                {
                    isStarted
                        ? (
                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles.smallLabel}>{calculateRemainingTimeText({ remainingTime })}</Text>
                                <AntDesign name="pause" size={100} color="white" />
                            </View>
                        )

                        : (<View
                        // enterStyle={{
                        //     x: -1000,
                        //     opacity: 0,
                        // }}
                        // animation="quick"
                        >
                            <AntDesign
                                name="caretright"
                                size={150}
                                color="white"
                            />

                        </View>)
                }
                <Text style={styles.pausedLabel}>{isStarted ? 'Tap to resume' : 'Tap to start'}</Text>
            </View>
        )
    }

    const renderGo = () => (
        <View
            style={{ alignItems: 'center' }}
        >
            <Text style={styles.numberLabel}>GO !</Text>
        </View>
    )

    const renderRunningLabel = ({ remainingTime }): JSX.Element => {
        const seconds = remainingTime % 60;
        if (!isFirstTen && isFirstLap && remainingTime === duration) {
            return renderGo();
        }
        return (
            <View
                style={{ alignItems: 'center' }}
            >
                <Text style={styles.numberLabel}>{calculateRemainingTimeText({ remainingTime })}</Text>
                {!isFirstTen && seconds < 10 && <Text style={styles.smallLabel}>Hurry up!</Text>}
                {!isFirstTen && seconds > 10 && <Text style={styles.smallLabel}>Tap to pause</Text>}
            </View>
        )
    }

    const runningLabel = ({ remainingTime, isPlaying }) => isPlaying ? renderRunningLabel({ remainingTime }) : renderPausedLabel({ remainingTime })

    return (
        <TouchableRipple
            style={{ alignItems: 'center' }}
            onPress={
                !isFinished
                && onPress
            }
            rippleColor="rgba(0, 0, 0, .1)">

            {isFinished ? renderFinishedLabel() : runningLabel({ remainingTime, isPlaying })}

        </TouchableRipple>
    )
}


export default InnerCircle;