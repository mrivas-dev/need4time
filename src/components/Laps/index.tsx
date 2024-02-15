import React from 'react'
import { View } from 'react-native';
import { styles } from './styles';
import { Text } from 'react-native-paper';

interface LapsProps {
    isFirstTen: boolean;
    currentLap: number;
    initialLaps: number;
}

const Laps = ({ isFirstTen, currentLap, initialLaps }: LapsProps) => {

    const [isLastLap, setIsLastLap] = React.useState<boolean>(false);

    React.useEffect(() => {
        setIsLastLap(currentLap === initialLaps);
    }, [currentLap, initialLaps]);

    const renderFirsTen = () => {
        return (
            <View style={styles.lapsContainer}>
                <Text style={styles.lapLabel}>Get ready! We are about to start!</Text>
            </View>
        );
    };

    const renderLastLap = () => {
        return (
            <View style={styles.lapsContainer}>
                <Text style={styles.lapLabel}>Last Lap</Text>
            </View>
        );
    };

    return (
        <View style={styles.lapsContainer}>
            {
                isFirstTen
                    ? renderFirsTen()
                    : isLastLap
                        ? renderLastLap()
                        : <Text style={styles.lapLabel}>Laps: {currentLap}/{initialLaps}</Text>
            }
        </View>

    );
};

export default Laps;
