import React from 'react';
import { Appbar, useTheme } from 'react-native-paper';
import { styles } from './styles';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BottomBar = ({ bottomAction }: any): JSX.Element => {
    const { bottom } = useSafeAreaInsets();
    
    return (
        <Appbar
            style={styles.layout}
            safeAreaInsets={{ bottom }}
        >
            <View style={styles.elements}>
                {bottomAction}
            </View>
        </Appbar>)
}


export default BottomBar;
