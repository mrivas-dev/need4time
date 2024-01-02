import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from './styles';
import Layout from '../../components/Layout';
import Laps from '../../components/Laps';
import TimeSelector from '../../components/TimeSelector';

const Emom = ({ navigation }: any) => {

    const [laps, setLaps] = React.useState<number>(0);
    const [duration, setDuration] = React.useState<number>(0);

    return (
        <Layout style={styles.container}>
            <View style={styles.container}>
                <Laps onSelectLaps={(newLaps: number) => setLaps(newLaps)} />
                <TimeSelector onTimeSelect={(newDuration) => setDuration(newDuration)} />
            </View>
            <Button onPress={() => navigation.navigate('EmomTimer', {
                laps,
                duration
            })} >Go to timer</Button>
        </Layout>
    );
}

export default Emom;