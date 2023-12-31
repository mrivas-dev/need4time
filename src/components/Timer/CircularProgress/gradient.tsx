import React from "react";
import { View, Text } from "react-native";
import { useCountdown } from "react-native-countdown-circle-timer";
import { Defs, LinearGradient, Path, Stop, Svg } from "react-native-svg";
import { PRIMARY_BG, PRIMARY_BLUE, white } from "../../../utils/colors";
import { styles } from "./styles";

const CountdownCircleTimer = ({ keyId, duration, isPlaying, isFinish, finishLap }) => {
    const {
        path,
        pathLength,
        stroke,
        strokeDashoffset,
        remainingTime,
        elapsedTime,
        size,
        strokeWidth
    } = useCountdown({
        isPlaying,
        duration,
        size: 350,
        colors: `url(#${keyId})`,
        onComplete: finishLap
    });

    const renderInnerText = () => {
        return (isFinish
            ? <Text style={{ color: white, fontSize: 50 }}> 🎉 </Text>
            : (
                <Text style={{ color: white, fontSize: 150 }}>{remainingTime}</Text>
            )
        )
    }

    return (
        <View style={styles.container}>
            <View style={{ width: size, height: size, position: 'relative' }}>
                <Svg width={size} height={size}>
                    <Defs>
                        <LinearGradient id={keyId} x1="1" y1="0" x2="0" y2="0">
                            <Stop offset="10%" stopColor={PRIMARY_BLUE} />
                            <Stop offset="90%" stopColor={PRIMARY_BG} />
                        </LinearGradient>
                    </Defs>
                    <Path
                        d={path}
                        fill="none"
                        stroke="#d9d9d9"
                        strokeWidth={strokeWidth}
                    />
                    {elapsedTime !== duration && (
                        <Path
                            d={path}
                            fill="none"
                            stroke={stroke}
                            strokeLinecap="butt"
                            strokeWidth={strokeWidth}
                            strokeDasharray={pathLength}
                            strokeDashoffset={strokeDashoffset}
                        />
                    )}
                </Svg>
                <View style={styles.time}>
                    {renderInnerText()}
                </View>
            </View>
        </View>
    );
}


export default CountdownCircleTimer;