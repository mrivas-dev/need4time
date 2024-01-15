import React from 'react';
import { View } from 'react-native';
import Layout from '../../components/Layout';
import { styles } from './styles';
import Timer from '../../components/Timer';

const EMOMTimer = ({ navigation, route: { params: { laps, duration } } }) => (
    <Layout style={styles.container}>
        <View style={{ height: '100%', width: 'auto', display: 'flex', flexDirection: 'row', alignSelf: 'center' }}>
            <Timer initialDuration={duration} initialLaps={laps} />
        </View>
    </Layout>
);

export default EMOMTimer;