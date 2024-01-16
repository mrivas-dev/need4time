import React from 'react'
import { Card, Text } from 'react-native-paper';
import { View } from 'react-native';
import { styles } from './styles';
import TimeSelectorDialog from './SelectorDialog';
import { addZerosToTime } from '../../utils/timer';
interface LapsProps {
    onSelectLaps: any;
}
const TimeSelector = ({ onTimeSelect = (duration: number) => { } }) => {
    const [minutes, setMinutes] = React.useState<number>(0);
    const [seconds, setSeconds] = React.useState<number>(5);

    const [visible, setVisible] = React.useState(false);
    const hideDialog = () => setVisible(false);

    React.useEffect(() => {
        onTimeSelect(Number(seconds) + Number(minutes * 60));
    }, [minutes, seconds])
    return (
        <View style={styles.newSelectorContainer}>
            <TimeSelectorDialog
                visible={visible}
                minutes={minutes}
                seconds={seconds}
                hideDialog={hideDialog}
                setMinutes={setMinutes}
                setSeconds={setSeconds}
                setVisible={setVisible}
            />
            <Text variant="titleLarge">Every</Text>
            <Card onPress={() => { setVisible(true); }}>
                <Card.Content>
                    <Text variant="titleLarge">
                        {addZerosToTime(`${minutes}`)} : {addZerosToTime(`${seconds}`)}
                    </Text>
                </Card.Content>
            </Card>
        </View>
    );
};

export default TimeSelector;
