import { Button } from 'react-native-paper';
import Layout from '../../components/Layout';
import Timer from '../../components/Timer';
import { styles } from './styles';
import React from 'react';

const ForTime = ({ navigation }: any) => {
    return (
        <Layout style={styles.container}>
            <Timer initialMinutes={0} initialSeconds={10} />
            <Button onPress={() => navigation.navigate('Home')} >Go to Home</Button>
        </Layout>
    );
}

export default ForTime;