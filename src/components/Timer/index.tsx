import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

const Timer = ({
    initialSeconds,
    initialMinutes
}: any) => {

    const [isRunning, setIsRunning] = React.useState<boolean>(false);
    const [seconds, setSeconds] = React.useState<number>(initialSeconds || 10);
    const [minutes, setMinutes] = React.useState<number>(initialMinutes || 0);

    React.useEffect(() => {
        let myInterval = setInterval(() => {
            if (isRunning) {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        // onFinishLap();
                        // if (isMakingSound) {
                        //     cleanUpSound();
                        //     stopSound();
                        // } else {
                        //     stopSound();
                        // }
                        clearInterval(myInterval)
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });

    return (
        <View>
            <Text>Minutes: {minutes}</Text>
            <Text>Seconds: {seconds}</Text>
            <Button
                onPress={() => setIsRunning(prev => !prev)}
            >
                {`${!!isRunning ? 'Pause' : 'Go!'}`}
            </Button>
        </View>
    )
}

export default Timer;