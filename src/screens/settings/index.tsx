import Layout from '../../components/Layout';
import React from 'react';
import { styles } from './styles';
import SoundSettings from './Sound';
import TimerSettings from './Timer';

const Settings = ({ navigation }: any) => {
    return (
        <Layout style={styles.container}>
            <SoundSettings />
            <TimerSettings />
        </Layout>
    );
}

export default Settings;