import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import CountdownCircleTimer from './CircularProgress';
import { styles } from './styles';
import WithSound from '../../hoc/withSound';
import TimerButton from './TimerButton';

const Timer = ({
    initialDuration,
    initialLaps,
    isMakingSound,
    cleanUpSound,
    stopSound,
    startSound
}: any) => {

    const [isFinish, setFinish] = React.useState<boolean>(false);
    const [isRunning, setRunning] = React.useState<boolean>(false);
    const [isFirstTen, setFirstTen] = React.useState<boolean>(true);
    const [laps, setLaps] = React.useState<number>(initialLaps || 1);
    const [currentLap, setCurrentLap] = React.useState<number>(1);
    const [totalDuration, setTotalDuration] = React.useState<number>(initialDuration);

    const onStop = () => { }

    const initTime = () => {
        setTotalDuration(initialDuration);
    }

    const startNewLap = () => {
        if (currentLap < laps) {
            initTime();
            setCurrentLap((lap) => lap + 1);
        }
    }

    const onFinishLap = () => {
        if (isFirstTen) {
            setFirstTen(false);
            initTime();
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
        initTime();
        setFirstTen(true);
        setCurrentLap(1);
        setLaps(initialLaps || 1);
    }


    React.useEffect(() => {
        if (initialDuration) {
            reset();
        }
    }, [JSON.stringify(initialDuration)])

    const renderFancy = () => {
        return (
            <CountdownCircleTimer
                keyId={`timer-${currentLap}`}
                isPlaying={isRunning}
                isFinish={isFinish}
                duration={isFirstTen ? 10 : totalDuration}
                finishLap={onFinishLap}
            />
        )
    };

    return (
        <View style={styles.container}>
            <Text>{currentLap}/{initialLaps}</Text>
            {renderFancy()}
            <TimerButton
                isRunning={isRunning}
                setRunning={setRunning}
                isFinish={isFinish}
                onStop={onStop}
            />
        </View>
    )
}

export default WithSound(Timer);