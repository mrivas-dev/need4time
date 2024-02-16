import React from 'react';
import { View } from 'react-native';
import Layout from '../../components/Layout';
import { styles } from './styles';
import Timer from '../../components/Timer';
import { useOrientation } from '../../hooks/useOrientation';
import { AppContext } from '../../provider';

const EMOMTimer = ({ navigation, route: { params: { laps, duration, initialSeconds } } }) => {
    const isLandscapeUsingOrientation = useOrientation() === 'landscape';
    const {
        mode: { landscapeMode }
    } = React.useContext(AppContext);
    return (
        <Layout>
            <View style={styles.container}>
                <Timer countdownSeconds={initialSeconds} initialDuration={duration} initialLaps={laps} isLandscapeMode={landscapeMode || isLandscapeUsingOrientation} />
            </View>
        </Layout>
    )
};

export default EMOMTimer;