import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import TimeSelector from '../../components/TimeSelector';
import Layout from '../../components/Layout';
import CountDownTimeSelector from '../../components/CountDownSelector';
import { PRIMARY_BLUE } from '../../utils/colors';
import { buttonContainerStyle, styles, textContainerStyle } from './styles';
import { AppContext } from '../../provider';

const Amrap = ({ navigation }: any) => {
    const { mode: { landscapeMode } } = React.useContext(AppContext);

    const [laps] = React.useState<number>(0);
    const [duration, setDuration] = React.useState<number>(0);
    const [initialSeconds, setInitialSeconds] = React.useState<number>(10);

    return (
        <Layout style={textContainerStyle(landscapeMode)}>
            <View style={styles.textContainer}>
                <Text variant="headlineMedium">AMRAP</Text>
            </View>
            <CountDownTimeSelector initialValue={10} label="Countdown" onTimeSelect={(newDuration) => setInitialSeconds(newDuration)} />
            <TimeSelector label="For" onTimeSelect={(newDuration) => setDuration(newDuration)} />
            <View style={buttonContainerStyle(landscapeMode)}>
                <Button
                    style={styles.goToTimerButton}
                    textColor='white'
                    buttonColor={PRIMARY_BLUE}
                    mode="contained"
                    onPress={() => navigation.navigate('AmrapTimer', {
                        laps,
                        duration,
                        initialSeconds
                    })}
                >
                    Start
                </Button>
            </View>
        </Layout>
    );
}

export default Amrap;