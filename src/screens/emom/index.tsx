import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { buttonContainerStyle, styles, textContainerStyle } from './styles';
import Layout from '../../components/Layout';
import Laps from '../../components/LapsSelector';
import TimeSelector from '../../components/TimeSelector';
import { PRIMARY_BLUE } from '../../utils/colors';
import { AppContext } from '../../provider';
import CountDownTimeSelector from '../../components/CountDownSelector';

const Emom = ({ navigation }: any) => {
    const { mode: { landscapeMode } } = React.useContext(AppContext);

    const [laps, setLaps] = React.useState<number>(0);
    const [duration, setDuration] = React.useState<number>(0);
    const [initialSeconds, setInitialSeconds] = React.useState<number>(10);

    return (
        <Layout>
            <View style={textContainerStyle(landscapeMode)}>
                <Text variant="headlineMedium">EMOM</Text>
            </View>
            <CountDownTimeSelector initialValue={10} label="Countdown" onTimeSelect={(newDuration) => setInitialSeconds(newDuration)} />
            <TimeSelector label="Every" onTimeSelect={(newDuration) => setDuration(newDuration)} />
            <Laps onSelectLaps={(newLaps: number) => setLaps(newLaps)} />
            <View style={buttonContainerStyle(landscapeMode)}>
                <Button
                    style={styles.goToTimerButton}
                    textColor='white'
                    buttonColor={PRIMARY_BLUE}
                    mode="contained-tonal"
                    onPress={() => navigation.navigate('EmomTimer', {
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

export default Emom;