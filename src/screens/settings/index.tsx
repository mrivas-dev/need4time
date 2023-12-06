import Layout from '../../components/Layout';
import React from 'react';
import { styles } from './styles';
import SoundSettings from './Sound';

const Settings = ({ navigation }: any) => {
    return (
        <Layout style={styles.container}>
            <SoundSettings />
        </Layout>
    );
}

export default Settings;