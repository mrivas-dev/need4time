import React from 'react'
import { View } from 'react-native';
import { containerStyles, styles } from './styles';
import { Card, Text } from 'react-native-paper';
import LapsSelectorDialog from './SelectorDialog';
import { AppContext } from '../../provider';

interface LapsProps {
    onSelectLaps: any;
}

const LapsSelector = ({ onSelectLaps = (laps: number) => { } }: LapsProps) => {
    const { mode: { landscapeMode } } = React.useContext(AppContext);

    const [laps, setLaps] = React.useState<number>(1);

    const [visible, setVisible] = React.useState(false);
    const hideDialog = () => setVisible(false);

    React.useEffect(() => {
        if (laps) {
            onSelectLaps(laps);
        }
    }, [laps])
    return (
        <View style={containerStyles(landscapeMode)}>
            <LapsSelectorDialog
                visible={visible}
                laps={laps}
                setLaps={setLaps}
                hideDialog={hideDialog}
                setVisible={setVisible}
            />
            <Text variant="titleLarge">For</Text>
            <Card onPress={() => { setVisible(true); }}>
                <Card.Content>
                    <Text variant="titleLarge">{laps}x times</Text>
                </Card.Content>
            </Card>
        </View>
    );
};

export default LapsSelector;
