import React from 'react'
import { ScrollView, View } from "react-native";
import { useRoute } from '@react-navigation/native';
import TopBar from '../TopBar';
import Splash from '../Splash';
import { styles } from './styles';

const Layout = ({ children }: any) => {

    const router = useRoute();
    const isHome = router?.name === 'Home';
    const isTimer = router?.name.includes("Timer");

    const content = () => (
        <ScrollView>
            <View style={!isTimer ? styles.bgColor : {}}>
                {children}
            </View>
        </ScrollView>
    )
    return (
        <View style={styles.container}>
            {
                isHome
                    ? (
                        <Splash>
                            <View style={styles.homeContainer}>
                                {
                                    content()
                                }
                            </View>
                        </Splash>
                    ) : <><TopBar />{content()}</>
            }
        </View>
    );
};

export default Layout;
