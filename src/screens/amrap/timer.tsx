import React from 'react';
import { View } from 'react-native';
import Layout from '../../components/Layout';
import { styles } from './styles';
import Timer from '../../components/Timer';

const AMRAPTimer = ({ navigation, route: { params: { laps, duration } } }) => (
    <Layout>
        <View style={styles.container}>
            <Timer initialDuration={duration} initialLaps={1} />
        </View>
    </Layout>
);

export default AMRAPTimer;