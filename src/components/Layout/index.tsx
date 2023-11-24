import React from 'react'
import { View } from "react-native";
import TopBar from '../TopBar';
import { styles } from './styles';

const Layout = ({ children }: any) => {

    return (
        <View>
            <TopBar />
            <View style={styles.childrenContainer}>
                {children}
            </View>
        </View>
    );
};

export default Layout;
