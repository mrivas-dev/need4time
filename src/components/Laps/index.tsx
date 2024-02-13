import React from 'react'
import { View } from 'react-native';
import { styles } from './styles';
import { Text } from 'react-native-paper';

interface LapsProps {
    currentLap: number;
    initialLaps: number;
}

const Laps = ({ currentLap, initialLaps }: LapsProps) => {

    const [isLastLap, setIsLastLap] = React.useState<boolean>(false);

    React.useEffect(() => {
        setIsLastLap(currentLap === initialLaps);
    }, [currentLap, initialLaps]);

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
                isLastLap
                    ? renderLastLap()
                    : <Text style={styles.lapLabel}>Laps: {currentLap}/{initialLaps}</Text>
            }
        </View>

    );
};

export default Laps;
