import React from 'react'
import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native';
import { styles } from './styles';
import { white } from '../../utils/colors';
import { Text } from 'react-native-paper';
interface LapsProps {
    onSelectLaps: any;
}
const Laps = ({ onSelectLaps = (laps: number) => {} }) => {
    const [laps, setLaps] = React.useState<number>(1);
    React.useEffect(() => {
        if (laps) {
            onSelectLaps(laps);
        }
    }, [laps])
    return (
        <View style={styles.lapsContainer}>
            <View style={styles.labelContainer}>
                <Text variant='titleLarge'> Select the laps</Text>
            </View>
            <View style={styles.selectorContainer}>
                <Picker
                    style={{
                        display: 'flex',
                        width: '100%'
                    }}
                    numberOfLines={1}
                    itemStyle={{ color: white, height: 115 }}
                    selectedValue={laps}
                    onValueChange={(itemValue, itemIndex) =>
                        setLaps(itemValue)
                    }>
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="6" value="6" />
                    <Picker.Item label="7" value="7" />
                    <Picker.Item label="8" value="8" />
                    <Picker.Item label="9" value="9" />
                    <Picker.Item label="10" value="10" />

                </Picker>
            </View>
        </View>
    );
};

export default Laps;
