import React from 'react'
import { ScrollView, View } from "react-native";
import TopBar from '../TopBar';
import { styles } from './styles';

const Layout = ({ children }: any) => {

    return (
        <ScrollView>
            <TopBar />
            <View style={styles.childrenContainer}>
                {children}
            </View>
        </ScrollView>
    );
};

export default Layout;
