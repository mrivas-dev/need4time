import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { styles } from './styles';
import Layout from '../../components/Layout';
import Laps from '../../components/Laps';
import TimeSelector from '../../components/TimeSelector';
import { PRIMARY_BLUE } from '../../utils/colors';

const Emom = ({ navigation }: any) => {

    const [laps, setLaps] = React.useState<number>(0);
    const [duration, setDuration] = React.useState<number>(0);

    return (
        <Layout style={styles.container}>
            <View style={styles.textContainer}>
                <Text variant="headlineMedium">EMOM</Text>
            </View>
            <TimeSelector label="Every" onTimeSelect={(newDuration) => setDuration(newDuration)} />
            <Laps onSelectLaps={(newLaps: number) => setLaps(newLaps)} />
            <View style={styles.buttonContainer}>
                <Button
                    style={styles.goToTimerButton}
                    textColor='white'
                    buttonColor={PRIMARY_BLUE}
                    mode="contained"
                    onPress={() => navigation.navigate('EmomTimer', {
                        laps,
                        duration
                    })}
                >
                    Go
                </Button>
            </View>
        </Layout>
    );
}

export default Emom;