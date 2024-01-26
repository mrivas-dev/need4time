import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import TimeSelector from '../../components/TimeSelector';
import Layout from '../../components/Layout';
import { PRIMARY_BLUE } from '../../utils/colors';
import { styles } from './styles';

const Amrap = ({ navigation }: any) => {
    const [laps, setLaps] = React.useState<number>(0);
    const [duration, setDuration] = React.useState<number>(0);


    return (
        <Layout style={styles.container}>
            <View style={styles.textContainer}>
                <Text variant="headlineMedium">AMRAP</Text>
            </View>
            <TimeSelector label="For" onTimeSelect={(newDuration) => setDuration(newDuration)} />
            <View style={styles.buttonContainer}>
                <Button
                    style={styles.goToTimerButton}
                    textColor='white'
                    buttonColor={PRIMARY_BLUE}
                    mode="contained"
                    onPress={() => navigation.navigate('AmrapTimer', {
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

export default Amrap;