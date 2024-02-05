import React from 'react';
import { View } from 'react-native';
import Layout from '../../components/Layout';
import { styles } from './styles';
import Timer from '../../components/Timer';
import { useOrientation } from '../../hooks/useOrientation';

const EMOMTimer = ({ navigation, route: { params: { laps, duration } } }) => {
    const orientation = useOrientation();
    const isLandscape = orientation === 'landscape';
    return (
        <Layout>
            <View style={styles.container}>
                <Timer initialDuration={duration} initialLaps={laps} isLandscapeMode={isLandscape}/>
            </View>
        </Layout>
    )
};

export default EMOMTimer;