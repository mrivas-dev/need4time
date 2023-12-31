import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import CountdownCircleTimer from './CircularProgress/';
import { styles } from './styles';
import TimerActions from './TimerActions';
import { AppContext } from '../../provider';

const Timer = ({
    initialDuration,
    initialLaps,
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
        setKey(prevKey => prevKey + 5);
        setRunning(false);
        setStarted(false);
        setFirstTen(true);
        setFinish(false);
        setLaps(initialLaps || 1);
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

    return (
        <View style={styles.container}>
            <View style={styles.timerActionsContainer}>
                <Text>Lap {currentLap}/{initialLaps} - </Text>
                <Text>Duration: {initialDuration}</Text>
            </View>
            <CountdownCircleTimer
                keyId={`${key}`}
                isFirstLap={currentLap === 1}
                isPlaying={isRunning}
                isStarted={isStarted}
                isFinish={isFinish}
                isFirstTen={isFirstTen}
                duration={isFirstTen ? 10 : totalDuration}
                finishLap={onFinishLap}
                setRunning={setRunning}
            />
            <TimerActions
                isRunning={isRunning}
                isStarted={isStarted}
                setRunning={setRunning}
                isFinish={isFinish}
                onStop={onStop}
            />
        </View>
    )
}

export default Timer;