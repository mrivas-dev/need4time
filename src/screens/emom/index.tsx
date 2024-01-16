import React from 'react';
import { View } from 'react-native';
import { Button, Card, IconButton, Text } from 'react-native-paper';
import { styles } from './styles';
import Layout from '../../components/Layout';
import Laps from '../../components/Laps';
import TimeSelector from '../../components/TimeSelector';
import BottomBar from '../../components/BottomBar';

const Emom = ({ navigation }: any) => {

    const [laps, setLaps] = React.useState<number>(0);
    const [duration, setDuration] = React.useState<number>(0);

    const bottomAction = (
        <Button mode="contained" onPress={() => navigation.navigate('EmomTimer', {
            laps,
            duration
        })}> Go </Button>
    );
    return (
        <Layout style={styles.container}>
            <View style={styles.textContainer}>
                <Text variant="headlineMedium">EMOM</Text>
            </View>
            <TimeSelector onTimeSelect={(newDuration) => setDuration(newDuration)} />
            <Laps onSelectLaps={(newLaps: number) => setLaps(newLaps)} />
            <BottomBar bottomAction={bottomAction} />
        </Layout>
    );
}

export default Emom;