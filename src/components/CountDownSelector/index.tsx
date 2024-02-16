import React from 'react'
import { Card, Text } from 'react-native-paper';
import { View } from 'react-native';
import { containerStyles } from './styles';
import { addZerosToTime } from '../../utils/timer';
import { AppContext } from '../../provider';
import CountDownTimeSelectorDialog from './CountDownSelectorDialog';

interface CountDownTimeSelectorProps {
    label: string;
    initialValue?: number;
    onTimeSelect: (duration: number) => void;
}
const CountDownTimeSelector = ({ initialValue, label, onTimeSelect = (duration: number) => { } }: CountDownTimeSelectorProps) => {

    const { mode: { landscapeMode } } = React.useContext(AppContext);

    const [seconds, setSeconds] = React.useState<number>(initialValue || 10);

    const [visible, setVisible] = React.useState(false);
    const hideDialog = () => setVisible(false);

    React.useEffect(() => {
        onTimeSelect(Number(seconds));
    }, [seconds]);

    return (
        <View style={containerStyles(landscapeMode)}>
            <CountDownTimeSelectorDialog
                visible={visible}
                seconds={seconds || initialValue}
                hideDialog={hideDialog}
                setSeconds={setSeconds}
                setVisible={setVisible}
            />
            <Text variant="titleLarge">{label}</Text>
            <Card onPress={() => { setVisible(true); }}>
                <Card.Content>
                    <Text variant="titleLarge">
                        {addZerosToTime(`${seconds}`)} seconds
                    </Text>
                </Card.Content>
            </Card>
        </View>
    );
};

export default CountDownTimeSelector;
