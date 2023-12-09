import React from 'react'
import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native';
import { styles } from './styles';
import { white } from '../../utils/colors';
import { Card, Text } from 'react-native-paper';
interface LapsProps {
    onSelectLaps: any;
}
const TimeSelector = ({ onTimeSelect = (duration: number) => { } }) => {
    const [minutes, setMinutes] = React.useState<number>(0);
    const [seconds, setSeconds] = React.useState<number>(5);
    React.useEffect(() => {
        onTimeSelect(seconds + (minutes * 60));
    }, [minutes, seconds])
    return (
        <View style={styles.timeSelectorContainer}>
            <Text variant="titleLarge"> Select the time 😈 </Text>
            <View style={styles.selectorContainer}>
                <Picker
                    numberOfLines={1}
                    style={{ width: '50%' }}
                    itemStyle={{ color: white }}
                    selectedValue={minutes}
                    onValueChange={(itemValue) =>
                        setMinutes(itemValue)
                    }>
                    <Picker.Item label="0" value="0" />
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
                <Picker
                    numberOfLines={1}
                    style={{ width: '50%' }}
                    itemStyle={{ color: white }}
                    selectedValue={seconds}
                    onValueChange={(itemValue) =>
                        setSeconds(itemValue)
                    }>
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="15" value="15" />
                    <Picker.Item label="20" value="20" />
                    <Picker.Item label="25" value="25" />
                    <Picker.Item label="30" value="30" />
                    <Picker.Item label="35" value="35" />
                    <Picker.Item label="40" value="40" />
                    <Picker.Item label="45" value="45" />
                    <Picker.Item label="50" value="50" />
                    <Picker.Item label="55" value="55" />
                </Picker>
            </View>
        </View>
    );
};

export default TimeSelector;
