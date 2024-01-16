import React from 'react';
import { View } from 'react-native';
import Layout from '../../components/Layout';
import { styles } from './styles';
import Timer from '../../components/Timer';

const EMOMTimer = ({ navigation, route: { params: { laps, duration } } }) => (
    <Layout>
        <View style={styles.container}>
            <Timer initialDuration={duration} initialLaps={laps} />
        </View>
    </Layout>
);

export default EMOMTimer;