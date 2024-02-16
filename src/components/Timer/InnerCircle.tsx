import React from 'react';
import {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withSequence,
    withTiming
} from 'react-native-reanimated';
import { TouchableRipple } from 'react-native-paper';
import { useCountdown } from 'react-native-countdown-circle-timer';
import { styles } from './styles';
import FinishedLabel from './FinishedLabel';
import MetaLabel from './MetaLabel';

const ANGLE = 10;
const TIME = 100;
const EASING = Easing.elastic(1.5);

const InnerCircle = ({
    keyId,
    duration,
    isGrowing = false,
    time,
    isStarted,
    isRunning,
    isFinished,
    isFirstTen,
    onPress,
    isLandscapeMode,
    setRunning,
    isFinish,
    onStop,
    currentLap,
    initialLaps,
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

    // const { remainingTime } = useCountdown({
    //     isPlaying: isRunning,
    //     duration,
    //     colors: `url(#${keyId})`,
    // });

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
            style={styles.touchableRippleContainer}
            onPress={
                !isFinished
                && onPress
            }
            rippleColor="rgba(0, 0, 0, .1)">

            {isFinished ?
                <FinishedLabel
                    handlePress={handlePress}
                    growAnimation={growAnimation}
                    wobbleStyle={wobbleStyle}
                />
                : <MetaLabel
                    isGrowing={isGrowing}
                    isFirstTen={isFirstTen}
                    currentLap={currentLap}
                    initialLaps={initialLaps}
                    isStarted={isStarted}
                    isRunning={isRunning}
                    time={time}
                    opacityAnimation={opacityAnimation}
                    isLandscapeMode={isLandscapeMode}
                    translateAnimation={translateAnimation}
                    setRunning={setRunning}
                    isFinish={isFinish}
                    onStop={onStop}
                />
            }

        </TouchableRipple>
    )
}


export default InnerCircle;