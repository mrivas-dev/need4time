import React from 'react';
import Layout from '../../components/Layout';
import Timer from '../../components/Timer';
import Laps from '../../components/Laps';
import TimeSelector from '../../components/TimeSelector';
import styles from './styles';
import { View } from 'react-native';

const TimerPage = ({ navigation }: any) => {
    const [laps, setLaps] = React.useState<number>(0);
    const [minutes, setMinutes] = React.useState<number>(0);
    const [seconds, setSeconds] = React.useState<number>(0);


    return (
        <Layout style={styles.layoutContainer}>
            <View style={styles.container}>
                <Laps onSelectLaps={(newLaps: number) => setLaps(newLaps)} />
                <TimeSelector />
            </View>
            <View style={{ width: 'auto', display: 'flex', flexDirection: 'row' }}>
                <Timer initialDuration={Number(seconds) + (Number(minutes) * 60)} initialLaps={laps} />
            </View>
        </Layout>
    );
}

export default TimerPage;