import React from 'react'
import { Card, Text } from 'react-native-paper';
import { View } from 'react-native';
import { containerStyles } from './styles';
import TimeSelectorDialog from './SelectorDialog';
import { addZerosToTime } from '../../utils/timer';
import { AppContext } from '../../provider';

interface TimeSelectorProps {
    label: string;
    initialValue?: number;
    onTimeSelect: (duration: number) => void;
}
const TimeSelector = ({ initialValue, label, onTimeSelect = (duration: number) => { } }: TimeSelectorProps) => {

    const { mode: { landscapeMode } } = React.useContext(AppContext);

    const [minutes, setMinutes] = React.useState<number>(0);
    const [seconds, setSeconds] = React.useState<number>(initialValue || 5);

    const [visible, setVisible] = React.useState(false);
    const hideDialog = () => setVisible(false);

    React.useEffect(() => {
        onTimeSelect(Number(seconds) + Number(minutes * 60));
    }, [minutes, seconds]);

    return (
        <View style={containerStyles(landscapeMode)}>
            <TimeSelectorDialog
                visible={visible}
                minutes={minutes}
                seconds={seconds || initialValue}
                hideDialog={hideDialog}
                setMinutes={setMinutes}
                setSeconds={setSeconds}
                setVisible={setVisible}
            />
            <Text variant="titleLarge">{label}</Text>
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
