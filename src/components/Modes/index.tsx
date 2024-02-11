import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { TouchableRipple, Card } from 'react-native-paper';
import { styles } from './styles';

const Modes = () => {
    const navigation = useNavigation();

    return (
        <View
            style={styles.content}
        >
            <Card style={styles.modeCard} mode="contained">
                <TouchableRipple onPress={() => navigation.navigate({ name: "Emom" } as never)} >
                    <Card.Content>
                        <Card.Cover resizeMode="cover" style={styles.modeCardCover} source={require('../../assets/modes/MattFraserWBG.png')} />
                    </Card.Content>
                </TouchableRipple>
            </Card>
            <Card style={styles.modeCard} mode="contained">
                <TouchableRipple onPress={() => navigation.navigate({ name: "Amrap" } as never)} >
                    <Card.Content>
                        <Card.Cover resizeMode="cover" style={styles.modeCardCover} source={require('../../assets/modes/TiaClairToomeyWBG.png')} />
                    </Card.Content>
                </TouchableRipple>
            </Card>
            <Card style={styles.modeCard} mode="contained">
                <TouchableRipple onPress={() => navigation.navigate({ name: "ForTime" } as never)} >
                    <Card.Content>
                        <Card.Cover resizeMode="cover" style={styles.modeCardCover} source={require('../../assets/modes/TiaClairToomeyWBG.png')} />
                    </Card.Content>
                </TouchableRipple>
            </Card>
            <Card style={styles.modeCard} mode="contained">
                <TouchableRipple onPress={() => navigation.navigate({ name: "Settings" } as never)} >
                    <Card.Content>
                        <Card.Cover resizeMode="cover" style={styles.modeCardCover} source={require('../../assets/modes/MattFraserWBG.png')} />
                    </Card.Content>
                </TouchableRipple >
            </Card>
        </View >
    );
};

export default Modes;
