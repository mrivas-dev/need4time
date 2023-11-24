import { Button } from 'react-native';
import Layout from '../../components/Layout';
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