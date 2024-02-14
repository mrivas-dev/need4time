import React from 'react';
import { View } from 'react-native';
import Layout from '../../components/Layout';
import { styles } from './styles';
import Timer from '../../components/Timer';
import { AppContext } from '../../provider';
import { useOrientation } from '../../hooks/useOrientation';

const AMRAPTimer = ({ navigation, route: { params: { laps, duration } } }) => {
    const isLandscapeUsingOrientation = useOrientation() === 'landscape';
    const {
        mode: { landscapeMode }
    } = React.useContext(AppContext);
    return (
        <Layout>
            <View style={styles.container}>
                <Timer initialDuration={duration} initialLaps={1} isLandscapeMode={landscapeMode || isLandscapeUsingOrientation} />
            </View>
        </Layout>
    );
}

export default AMRAPTimer;