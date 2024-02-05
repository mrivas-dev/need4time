import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { AppContext } from '../../../provider';
import { useCountdown } from 'react-native-countdown-circle-timer';
import InnerCircle from '../CircularProgress/InnerCircle';

const SimpleTimer = ({
    keyId,
    duration,
    isStarted,
    isFirstTen,
    isPlaying,
    isFirstLap,
    isFinish,
    setRunning,
    finishLap
}: any) => {
    const { sound: { soundEnabled, playCountdownSound, playStartSound } } = React.useContext(AppContext);
    useCountdown({
        isPlaying,
        duration,
        size: 350,
        colors: `url(#${keyId})`,
        onComplete: finishLap,
        onUpdate: (remaingTime) => {
            if (soundEnabled) {
                if (remaingTime === 3 && isFirstLap) {
                    playCountdownSound();
                }
                if (remaingTime === 3 && !isFirstLap) {
                    playStartSound();
                }
            }
        }
    });
    return (
        <View style={styles.container}>
            <InnerCircle
                keyId={keyId}
                duration={duration}
                isStarted={isStarted}
                isFirstLap={isFirstLap}
                isFirstTen={isFirstTen}
                isPlaying={isPlaying}
                isFinished={isFinish}
                onPress={() => { setRunning(!isPlaying); }}
            />
        </View>
    );
}

export default SimpleTimer;