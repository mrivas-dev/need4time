import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { List, Switch, Text } from 'react-native-paper';

const EnableSound = () => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(true);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
        <View style={{width: '100%'}}>
            <Text variant="headlineSmall" style={styles.headLine}>SOUND</Text>
            <List.Item
                title="Enable sound"
                right={(props) => <Text>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                </Text>}
            />
        </View>
    );
}

export default EnableSound;
