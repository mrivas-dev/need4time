import React from 'react'
import { View } from 'react-native';
import { styles } from './styles';
import { Card, Text } from 'react-native-paper';
import LapsSelectorDialog from './SelectorDialog';
interface LapsProps {
    onSelectLaps: any;
}

const LapsSelector = ({ onSelectLaps = (laps: number) => {} }) => {
    const [laps, setLaps] = React.useState<number>(1);

    const [visible, setVisible] = React.useState(false);
    const hideDialog = () => setVisible(false);

    React.useEffect(() => {
        if (laps) {
            onSelectLaps(laps);
        }
    }, [laps])
    return (
        <View style={styles.newSelectorContainer}>
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
