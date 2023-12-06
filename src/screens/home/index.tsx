import React from 'react';
import Modes from '../../components/Modes';
import Layout from '../../components/Layout';
import { StyleSheet } from 'react-native';

const Home = () => {
    return (
        <Layout style={styles.container}>
            <Modes />
        </Layout>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home;