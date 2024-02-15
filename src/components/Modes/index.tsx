import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { TouchableRipple, Card } from 'react-native-paper';
import { modeCardStyles, styles } from './styles';
import { useOrientation } from '../../hooks/useOrientation';
import { AppContext } from '../../provider';

const Modes = () => {
    const navigation = useNavigation();
    const isLandscapeUsingOrientation = useOrientation() === 'landscape';

    return (
        <View
            style={styles.content}
        >
            <Card style={modeCardStyles(isLandscapeUsingOrientation)} mode="contained">
                <TouchableRipple onPress={() => navigation.navigate({ name: "Emom" } as never)} >
                    <Card.Cover resizeMode="contain" style={styles.modeCardCover} source={ isLandscapeUsingOrientation ? require(`../../assets/modes/MattFraser.png`) : require(`../../assets/modes/EMOM.png`)} />
                </TouchableRipple>
            </Card>
            <Card style={modeCardStyles(isLandscapeUsingOrientation)} mode="contained">
                <TouchableRipple onPress={() => navigation.navigate({ name: "Amrap" } as never)} >
                    <Card.Cover resizeMode="contain" style={styles.modeCardCover} source={ isLandscapeUsingOrientation ? require(`../../assets/modes/TiaClairToomey.png`) : require(`../../assets/modes/AMRAP.png`)} />
                </TouchableRipple>
            </Card>
            <Card style={modeCardStyles(isLandscapeUsingOrientation)} mode="contained">
                <TouchableRipple onPress={() => navigation.navigate({ name: "ForTime" } as never)} >
                    <Card.Cover resizeMode="contain" style={styles.modeCardCover} source={ isLandscapeUsingOrientation ? require(`../../assets/modes/RichFroning.png`) : require(`../../assets/modes/FORTIME.png`)} />
                </TouchableRipple>
            </Card>
            <Card style={modeCardStyles(isLandscapeUsingOrientation)} mode="contained">
                <TouchableRipple onPress={() => navigation.navigate({ name: "Settings" } as never)} >
                    <Card.Cover resizeMode="contain" style={styles.modeCardCover} source={ isLandscapeUsingOrientation ? require(`../../assets/modes/Fail.png`) : require(`../../assets/modes/Fail.png`)} />
                </TouchableRipple >
            </Card>
        </View >
    );
};

export default Modes;
