import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        padding: 8,
    },
    time: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
    },
    smallLabel: {
        fontSize: 25,
        fontWeight: "200",
    },
    pausedLabel: {
        fontSize: 20,
        fontWeight: "200",
        marginBottom: 45
    },
    finishedLabel: {
        fontSize: 40,
        fontWeight: "200",
    },
});