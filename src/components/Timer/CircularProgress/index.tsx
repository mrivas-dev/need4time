import React from 'react';
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import InnerCircle from "./InnerCircle";
import { AppContext } from '../../../provider/index';

const StopWatch = ({
    keyId,
    duration,
    isStarted,
    isFirstTen,
    isPlaying,
    isFirstLap,
    isFinish,
    setRunning,
    finishLap
}) => {
    const { sound: { soundEnabled, playCountdownSound, playStartSound } } = React.useContext(AppContext);
    return (
        <CountdownCircleTimer
            size={350}
            key={keyId}
            isPlaying={isPlaying}
            duration={duration}
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
                    isPlaying={isPlaying}
                    isFinished={isFinish}
                    onPress={() => { setRunning(!isPlaying); }}
                />)
            }
        </CountdownCircleTimer>

    );
};

export default StopWatch;