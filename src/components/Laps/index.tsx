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
                <Text variant="titleLarge">Last Lap</Text>
            </View>
        );
    };

    return (
        <View style={styles.lapsContainer}>
            {
                isLastLap
                    ? renderLastLap()
                    : <Text variant="titleLarge">Laps: {currentLap}/{initialLaps}</Text>
            }
        </View>

    );
};

export default Laps;
