import React from 'react';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { View } from 'react-native';
import InnerCircle from "../InnerCircle";
import { AppContext } from '../../../provider/index';
import { countDownContainerStyles } from './styles';

const StopWatch = ({
    isGrowing = false,
    keyId,
    duration,
    isStarted,
    isRunning,
    isFirstLap,
    isFinish,
    isFirstTen,
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
                {...isGrowing ? { isGrowing: true } : {}}
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
                {({ remainingTime, elapsedTime }) => (
                    <InnerCircle
                        keyId={keyId}
                        duration={duration}
                        isStarted={isStarted}
                        isGrowing={isGrowing}
                        isRunning={isRunning}
                        isFinished={isFinish}
                        isFirstTen={isFirstTen}
                        time={
                            isGrowing
                                ? !isFirstTen
                                    ? elapsedTime
                                    : remainingTime
                                : remainingTime
                        }
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