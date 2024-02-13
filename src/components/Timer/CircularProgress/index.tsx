import React from 'react';
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import InnerCircle from "../InnerCircle";
import { AppContext } from '../../../provider/index';
import { Dimensions, View } from 'react-native';
import { countDownContainerStyles } from './styles';

const StopWatch = ({
    keyId,
    duration,
    isStarted,
    isFirstTen,
    isRunning,
    isFirstLap,
    isFinish,
    setRunning,
    finishLap,
    isLandscapeMode,
    currentLap,
    initialLaps,
    onStop
}) => {
    const { sound: { soundEnabled, playCountdownSound, playStartSound } } = React.useContext(AppContext);

    return (
        <View style={countDownContainerStyles(isLandscapeMode)}>
            <CountdownCircleTimer
                size={350}
                key={keyId}
                isPlaying={isRunning}
                duration={duration}
                strokeWidth={isLandscapeMode ? 0 : 10}
                strokeLinecap={"butt"}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[10, 7, 5, 0]}
                onComplete={() => { finishLap(); }}
                onUpdate={(remaingTime) => {
                    if (soundEnabled) {
                        if (remaingTime === 3 && isFirstLap) {
                            playCountdownSound();
                        }
                        if (remaingTime === 3 && !isFirstLap) {
                            playStartSound();
                        }
                    }
                }}
            >
                {() => (
                    <InnerCircle
                        keyId={keyId}
                        duration={duration}
                        isStarted={isStarted}
                        isFirstLap={isFirstLap}
                        isFirstTen={isFirstTen}
                        isRunning={isRunning}
                        isFinished={isFinish}
                        onPress={() => { setRunning(!isRunning); }}
                        isLandscapeMode={isLandscapeMode}
                        setRunning={setRunning}
                        isFinish={isFinish}
                        onStop={onStop}
                        currentLap={currentLap}
                        initialLaps={initialLaps}
                    />)
                }
            </CountdownCircleTimer>
        </View>
    );
};

export default StopWatch;