import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import TimeSelector from '../../components/TimeSelector';
import Layout from '../../components/Layout';
import CountDownTimeSelector from '../../components/CountDownSelector';
import { PRIMARY_BLUE } from '../../utils/colors';
import { buttonContainerStyle, styles, textContainerStyle } from './styles';
import { AppContext } from '../../provider';

const ForTime = ({ navigation }: any) => {
    const { mode: { landscapeMode } } = React.useContext(AppContext);

    const [laps] = React.useState<number>(0);
    const [duration, setDuration] = React.useState<number>(0);
    const [initialSeconds, setInitialSeconds] = React.useState<number>(10);

    return (
        <Layout style={textContainerStyle(landscapeMode)}>
            <View style={styles.textContainer}>
                <Text variant="headlineMedium">ForTime</Text>
            </View>
            <CountDownTimeSelector initialValue={10} label="Countdown" onTimeSelect={(newDuration) => setInitialSeconds(newDuration)} />
            <View style={buttonContainerStyle(landscapeMode)}>
                <Button
                    style={styles.goToTimerButton}
                    textColor='white'
                    buttonColor={PRIMARY_BLUE}
                    mode="contained"
                    onPress={() => navigation.navigate('ForTimeTimer', { initialSeconds })}
                >
                    Start
                </Button>
            </View>
        </Layout>
    );
}

export default ForTime;