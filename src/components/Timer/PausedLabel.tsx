import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Animated from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';
import { calculateRemainingTimeText } from '../../utils/timer';

const PausedLabel = ({
    remainingTime,
    isStarted,
    opacityAnimation,
    isLandscapeMode,
    translateAnimation
}: any) => {

    return (
        <View
            style={styles.center}
        >
            {
                isStarted
                    ? (
                        <View style={styles.center}>
                            <Text style={styles.smallLabel}>Remaining: {calculateRemainingTimeText({ remainingTime })}</Text>
                            <Animated.View style={[opacityAnimation]}>
                                <AntDesign name="pause" size={isLandscapeMode ? 150 : 150} color="white" />
                            </Animated.View>
                        </View>
                    )

                    : (<Animated.View style={[{ right: 750 }, translateAnimation]}>
                        <AntDesign
                            name="caretright"
                            size={isLandscapeMode ? 150 : 150}
                            color="white"
                        />
                    </Animated.View>)
            }
            <Text style={styles.pausedLabel}>{isStarted ? 'Tap to resume' : 'Tap to start'}</Text>
        </View>
    );
}

export default PausedLabel;