import React from 'react';
import { View } from 'react-native';
import CountdownCircleTimer from './CircularProgress/';
import { containerStyles } from './styles';
import TimerActions from './TimerActions';
import { AppContext } from '../../provider';
import Laps from '../Laps';

const Timer = ({
    countdownSeconds = 10,
    isGrowing = false,
    initialDuration,
    initialLaps,
    isLandscapeMode
}: any) => {
    const [key, setKey] = React.useState<number>(0);
    const [isStarted, setStarted] = React.useState<boolean>(false);
    const [isFinish, setFinish] = React.useState<boolean>(false);
    const [isRunning, setRunning] = React.useState<boolean>(false);
    const [isFirstTen, setFirstTen] = React.useState<boolean>(true);
    const [laps, setLaps] = React.useState<number>(initialLaps || 1);
    const [currentLap, setCurrentLap] = React.useState<number>(1);
    const [totalDuration, setTotalDuration] = React.useState<number>(initialDuration);

    const { sound: { playing, stopSound } } = React.useContext(AppContext);

    const onStop = () => { reset(); }

    const initTime = () => {
        setTotalDuration(initialDuration);
        setCurrentLap(1);
    }

    const startNewLap = () => {
        if (currentLap < laps) {
            setCurrentLap((lap) => lap + 1);
        }
    }

    const onFinishLap = () => {
        setKey(prevKey => prevKey + 1);
        if (isFirstTen) {
            setFirstTen(false);
            initTime();
            return { shouldRepeat: true };
        }
        if (currentLap < laps) {
            startNewLap();
        } else {
            setRunning(false);
            setFinish(true);
        }
        return { shouldRepeat: !isFinish };
    }

    const reset = () => {
        setKey(prevKey => prevKey + 1);
        setFinish(false);
        setRunning(false);
        setStarted(false);
        setFirstTen(true);
        setLaps(initialLaps || 1);
        stopSound();
        initTime();
    }

    React.useEffect(() => {
        if (initialDuration) {
            reset();
        }
    }, [initialDuration])

    React.useEffect(() => {
        if (!isStarted) {
            setStarted(true);
        }
        if (!isRunning && playing) {
            stopSound();
        }
    }, [isRunning]);

    React.useEffect(() => {
        reset();
    }, []);

    return (
        <View style={containerStyles(isLandscapeMode)}>
            {(!isLandscapeMode && !isGrowing) && <Laps isFirstTen={isFirstTen} currentLap={currentLap} initialLaps={initialLaps} />}
            <CountdownCircleTimer
                keyId={`${key}`}
                isFirstLap={currentLap === 1}
                isRunning={isRunning}
                isGrowing={isGrowing}
                isStarted={isStarted}
                isFinish={isFinish}
                duration={isFirstTen ? countdownSeconds : totalDuration}
                finishLap={onFinishLap}
                setRunning={setRunning}
                isLandscapeMode={isLandscapeMode}
                currentLap={currentLap}
                initialLaps={initialLaps}
                isFirstTen={isFirstTen}
                onStop={onStop}
            />
            {!isLandscapeMode && <TimerActions onStop={onStop} />}
        </View>
    )
}

export default Timer;