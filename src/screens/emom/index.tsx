import { Button } from 'react-native-paper';
import Layout from '../../components/Layout';
import { styles } from './styles';

const Emom = ({ navigation }: any) => {
    return (
        <Layout style={styles.container}>
            <Button onPress={() => navigation.navigate('Home')} >Go to Home</Button>
        </Layout>
    );
}

export default Emom;