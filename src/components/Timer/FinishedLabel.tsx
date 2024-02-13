import React from 'react';
import { View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import Animated from 'react-native-reanimated';
import { styles } from './styles';

const FinishedLabel = ({
    handlePress,
    growAnimation,
    wobbleStyle
}: any) => {

    return (
        <View
            style={{ alignItems: 'center' }}
        >
            <Text>Well done!</Text>
            <Animated.View style={[{ scaleX: -.3 }, growAnimation]}>
                <Text
                    style={styles.finishedLabel}>You are a beast!
                </Text>
            </Animated.View>
            <Animated.View style={[wobbleStyle]}>
                <TouchableRipple
                    style={{ alignItems: 'center' }}
                    onPress={() => handlePress()}
                >
                    <Text style={styles.finishedLabel}>
                        🔥
                    </Text>
                </TouchableRipple>
            </Animated.View>
        </View>
    );
}

export default FinishedLabel;