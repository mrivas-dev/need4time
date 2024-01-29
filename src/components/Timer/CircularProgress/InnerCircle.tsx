import React from 'react';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withSequence,
    withTiming
} from 'react-native-reanimated';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Text, TouchableRipple } from 'react-native-paper';
import { useCountdown } from 'react-native-countdown-circle-timer';
import { calculateRemainingTimeText } from '../../../utils/timer';
import { styles } from './styles';

const ANGLE = 10;
const TIME = 100;
const EASING = Easing.elastic(1.5);

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
    const opacity = useSharedValue(0);
    const offset = useSharedValue(-750);
    const scalation = useSharedValue(1);
    const rotation = useSharedValue(0);

    const wobbleStyle = useAnimatedStyle(() => ({
        transform: [{ rotateZ: `${rotation.value}deg` }],
    }));

    const growAnimation = useAnimatedStyle(() => ({
        transform: [{ scaleX: -scalation.value }],
    }));

    const translateAnimation = useAnimatedStyle(() => ({
        transform: [{ translateX: offset.value }],
    }));

    const opacityAnimation = useAnimatedStyle(() => ({
        opacity: opacity.value
    }), []);

    const { remainingTime } = useCountdown({
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
                <Animated.View style={[{ scaleX: -.3 }, growAnimation]}>
                    <Text
                        style={styles.finishedLabel}>You are a beast!
                    </Text>
                </Animated.View>
                <Animated.View style={[wobbleStyle]}>
                    <TouchableRipple
                        style={{ alignItems: 'center' }}
                        onPress={() => handlePress()}
                    >
                        <Text style={styles.finishedLabel}>
                            🔥
                        </Text>
                    </TouchableRipple>
                </Animated.View>
            </View>
        )
    }

    React.useEffect(() => {
        offset.value = withRepeat(
            withTiming(-offset.value, {
                duration: 1000,
                easing: Easing.inOut(Easing.quad)
            }),
            1,
            false
        );
        scalation.value = withRepeat(
            withTiming(-scalation.value, { duration: 950 }),
            1,
            false
        );
        opacity.value = withRepeat(
            withTiming(1, { duration: 1000, easing: Easing.ease }),
            -1,
            true
        );
    }, []);

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
                                <Animated.View style={[opacityAnimation]}>
                                    <AntDesign name="pause" size={100} color="white" />
                                </Animated.View>
                            </View>
                        )

                        : (<Animated.View style={[{ right: 750 }, translateAnimation]}>
                            <AntDesign
                                name="caretright"
                                size={150}
                                color="white"
                            />

                        </Animated.View>)
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
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        if (!isFirstTen && isFirstLap && remainingTime === duration) {
            return renderGo();
        }
        return (
            <View
                style={{ alignItems: 'center' }}
            >
                <Text style={styles.numberLabel}>{calculateRemainingTimeText({ remainingTime })}</Text>
                {!isFirstTen && minutes === 0 && seconds < 10 && <Text style={styles.smallLabel}>Hurry up!</Text>}
                {!isFirstTen && seconds > 10 && <Text style={styles.smallLabel}>Tap to pause</Text>}
            </View>
        )
    }

    const runningLabel = ({ remainingTime, isPlaying }) => isPlaying ? renderRunningLabel({ remainingTime }) : renderPausedLabel({ remainingTime })
    const handlePress = () => {
        rotation.value = withSequence(
            // deviate left to start from -ANGLE
            withTiming(-ANGLE, { duration: TIME / 2, easing: EASING }),
            // wobble between -ANGLE and ANGLE 7 times
            withRepeat(
                withTiming(ANGLE, {
                    duration: TIME,
                    easing: EASING,
                }),
                7,
                true
            ),
            // go back to 0 at the end
            withTiming(0, { duration: TIME / 2, easing: EASING })
        );
    };
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