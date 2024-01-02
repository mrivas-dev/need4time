import React, { useState } from 'react';
import { View } from 'react-native';
import Layout from '../../components/Layout';
import { styles } from './styles';
import { Button, Text } from 'react-native-paper';
import Timer from '../../components/Timer';

const EMOMTimer = ({ navigation, route: { params: { laps, duration } } }) => {
    const [key, setKey] = useState(0);
    const [currentLap, setCurrentLap] = useState(1);
    const [time, setTime] = useState(10);

    return (
        <Layout style={styles.container}>
            <View style={{ height: '100%', width: 'auto', display: 'flex', flexDirection: 'row', alignSelf: 'center' }}>
                <Timer initialDuration={duration} initialLaps={laps} />
            </View>
        </Layout>
    );
}

export default EMOMTimer;