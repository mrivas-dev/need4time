import { Dimensions, StyleSheet } from "react-native";

const isLandscape = Dimensions.get('window').width > Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        height: '75%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    timerActionsContainer: {
        display: 'flex',
        
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 25,
        paddingBottom: 55
    },
    numberLabel: {
        fontSize: isLandscape ? 150 : 110,
        fontWeight: "400",
    },
});