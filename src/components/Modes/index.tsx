import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { TouchableRipple, Card, Text } from 'react-native-paper';
import { styles } from './styles';

const Modes = () => {
    const navigation = useNavigation();
    return (
        <View
            style={styles.content}
        >
            <Card style={styles.modeCard} mode="contained" contentStyle={styles.modeCardContent}>
                <TouchableRipple onPress={() => navigation.navigate({ name: "Emom" } as never)} >
                    <Card.Content style={styles.modeCardContent}>
                        <Card.Cover resizeMode="cover" style={styles.modeCardCover} source={require('../../assets/modes/MattFraserWBG.png')} />
                        <View style={styles.modeTitleWrapper}>
                            <Text style={styles.modeTitle} variant="titleLarge">EMOM</Text>
                        </View>
                    </Card.Content>
                </TouchableRipple>
            </Card>
            <Card style={styles.modeCard} mode="contained" contentStyle={styles.modeCardContent}>
                <TouchableRipple onPress={() => navigation.navigate({ name: "Amrap" } as never)} >
                    <Card.Content style={styles.modeCardContent}>
                        <Card.Cover resizeMode="cover" style={styles.modeCardCover} source={require('../../assets/modes/TiaClairToomeyWBG.png')} />
                        <View style={styles.modeTitleWrapper}>
                            <Text style={styles.modeTitle} variant="titleLarge">Amrap</Text>
                        </View>
                    </Card.Content>
                </TouchableRipple>
            </Card>
            <Card style={styles.modeCard} mode="contained" contentStyle={styles.modeCardContent}>
                <TouchableRipple onPress={() => navigation.navigate({ name: "ForTime" } as never)} >
                    <Card.Content style={styles.modeCardContent}>
                        <Card.Cover resizeMode="cover" style={styles.modeCardCover} source={require('../../assets/modes/TiaClairToomeyWBG.png')} />
                        <View style={styles.modeTitleWrapper}>
                            <Text style={styles.modeTitle} variant="titleLarge">ForTime</Text>
                        </View>
                    </Card.Content>
                </TouchableRipple>
            </Card>
            <Card style={styles.modeCard} mode="contained" contentStyle={styles.modeCardContent}>
                <TouchableRipple onPress={() => navigation.navigate({ name: "Settings" } as never)} >
                    <Card.Content style={styles.modeCardContent}>
                        <Card.Cover resizeMode="cover" style={styles.modeCardCover} source={require('../../assets/modes/MattFraserWBG.png')} />
                        <View style={styles.modeTitleWrapper}>
                            <Text style={styles.modeTitle} variant="titleLarge">Settings</Text>
                        </View>
                    </Card.Content>
                </TouchableRipple >
            </Card>
        </View >
    );
};

export default Modes;
