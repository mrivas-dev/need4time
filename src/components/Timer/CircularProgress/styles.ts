import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

export const countDownContainerStyles = (isLandscapeMode: boolean) => (isLandscapeMode
    ? {}
    : { marginTop: 50 }
);

export const styles = StyleSheet.create({
    container: {
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
});