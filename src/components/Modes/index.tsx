import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
} from 'react-native';
import { TouchableRipple, Card, Text } from 'react-native-paper';

const Modes = () => {
    const navigation = useNavigation();
    return (
        <View
            style={styles.content}
        >
            <Card style={styles.modeCard}>
                <TouchableRipple onPress={() => navigation.navigate({ name: "Emom" } as never)} rippleColor="rgba(0, 0, 0, .32)">
                    <Card.Content>
                        <Card.Cover source={require('../../assets/modes/MattFraser.png')} />
                        <Text style={styles.modeTitle} variant="titleLarge">EMOM</Text>
                    </Card.Content>
                </TouchableRipple>
            </Card>
            <Card style={styles.modeCard}>
                <TouchableRipple onPress={() => navigation.navigate({ name: "Amrap" } as never)} rippleColor="rgba(0, 0, 0, .32)">
                    <Card.Content>
                        <Card.Cover source={require('../../assets/modes/RichFroning.png')} />
                        <Text style={styles.modeTitle} variant="titleLarge">Amrap</Text>
                    </Card.Content>
                </TouchableRipple>
            </Card>
            <Card style={styles.modeCard}>
                <TouchableRipple onPress={() => navigation.navigate({ name: "ForTime" } as never)} rippleColor="rgba(0, 0, 0, .32)">
                    <Card.Content>
                        <Card.Cover source={require('../../assets/modes/TiaClairToomey.png')} />
                        <Text style={styles.modeTitle} variant="titleLarge">ForTime</Text>
                    </Card.Content>
                </TouchableRipple>
            </Card>
            <Card style={styles.modeCard}>
                <TouchableRipple onPress={() => navigation.navigate({ name: "Settings" } as never)} rippleColor="rgba(0, 0, 0, .32)">
                    <Card.Content>
                        <Card.Cover source={require('../../assets/modes/Fail.png')} />
                        <Text style={styles.modeTitle} variant="titleLarge">Settings</Text>
                    </Card.Content>
                </TouchableRipple >
            </Card>
            <Card style={styles.modeCard}>
                <TouchableRipple onPress={() => navigation.navigate({ name: "Timer" } as never)} rippleColor="rgba(0, 0, 0, .32)">
                    <Card.Content>
                        <Card.Cover source={require('../../assets/modes/timer.png')} />
                        <Text style={styles.modeTitle} variant="titleLarge">Timer</Text>
                    </Card.Content>
                </TouchableRipple >
            </Card>
        </View>
    );
};


const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    modeCard: {
        height: Dimensions.get('window').width / 2,
        width: '45%',
        margin: 8,
    },
    modeTitle: {
        position: 'absolute',
        top: '45%',
        left: '35%',
    }
});

export default Modes;
