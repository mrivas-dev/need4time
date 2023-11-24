import { Button } from 'react-native';
import Layout from '../../components/Layout';
import { styles } from './styles';

const Amrap = ({ navigation }: any) => {
    return (
        <Layout style={styles.container}>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </Layout>
    );
}

export default Amrap;