import React from 'react';
import Layout from '../../components/Layout';
import Timer from '../../components/Timer';
import Laps from '../../components/LapsSelector';
import TimeSelector from '../../components/TimeSelector';
import styles from './styles';
import { View } from 'react-native';

const TimerPage = ({ navigation }: any) => {
    const [laps, setLaps] = React.useState<number>(0);
    const [duration, setDuration] = React.useState<number>(0);

    return (
        <Layout style={styles.layoutContainer}>
            <View style={styles.container}>
                <Laps onSelectLaps={(newLaps: number) => setLaps(newLaps)} />
                {/* <TimeSelector onTimeSelect={(newDuration) => setDuration(newDuration)} /> */}
            </View>
            <View style={{ width: 'auto', display: 'flex', flexDirection: 'row', alignSelf: 'center' }}>
                <Timer initialDuration={duration} initialLaps={laps} />
            </View>
        </Layout>
    );
}

export default TimerPage;