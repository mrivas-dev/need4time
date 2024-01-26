import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { TouchableRipple, Card, Text, Icon, MD3Colors } from 'react-native-paper';
import { styles } from './styles';

const Modes = () => {
    const navigation = useNavigation();
    return (
        <View
            style={styles.content}
        >
            <Card style={styles.modeCard} mode='outlined'>
                <TouchableRipple onPress={() => navigation.navigate({ name: "Emom" } as never)} >
                    <Card.Content>
                        <Card.Cover source={require('../../assets/modes/MattFraserWBG.png')} />
                        <Text style={styles.modeTitle} variant="titleLarge">EMOM</Text>
                    </Card.Content>
                </TouchableRipple>
            </Card>
            <Card style={styles.modeCard} onPress={() => navigation.navigate({ name: "Amrap" } as never)} >
                <TouchableRipple onPress={() => navigation.navigate({ name: "Amrap" } as never)} >
                    <Card.Content>
                        <Card.Cover source={require('../../assets/modes/TiaClairToomeyWBG.png')} />
                        <Text style={styles.modeTitle} variant="titleLarge">Amrap</Text>
                    </Card.Content>
                </TouchableRipple>
            </Card>
            {/* <Card style={styles.modeCard}>
                <TouchableRipple onPress={() => navigation.navigate({ name: "ForTime" } as never)} >
                    <Card.Content>
                        <View style={styles.modeCardContent}>
                            <Icon
                                source="alpha-t-circle"
                                color={MD3Colors.tertiary95}
                                size={60}
                            />
                            <Text style={styles.modeTitle} variant="titleLarge">ForTime</Text>
                        </View>
                    </Card.Content>
                </TouchableRipple>
            </Card> */}
            <Card style={styles.modeCard}>
                <TouchableRipple onPress={() => navigation.navigate({ name: "Settings" } as never)} >
                    <Card.Content>
                        <Card.Cover source={require('../../assets/modes/RichFroningWBG.png')} />
                        <Text style={styles.modeTitle} variant="titleLarge">Settings</Text>
                    </Card.Content>
                </TouchableRipple >
            </Card>
        </View >
    );
};

export default Modes;
