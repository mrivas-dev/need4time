import { StyleSheet } from "react-native";

export const containerStyles = (isLandscapeMode: boolean): any => ({
    flexDirection: isLandscapeMode ? 'row' : 'column',
    marginTop: isLandscapeMode ? -55 : 0,
    alignContent: 'flex-start'
});

export const numberLabelStyles = (isLandscapeMode: boolean): any => ({
    fontSize: isLandscapeMode ? 135 : 110,
    fontWeight: "300",
});


export const styles = StyleSheet.create({
    touchableRippleContainer: {
        width: 'auto',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center'
    },
    center: {
        alignItems: 'center'
    },
    timerActionsContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 25,
        justifyContent: 'space-around',
    },
    smallLabel: {
        fontSize: 20,
        fontWeight: "200",
    },
    pausedLabel: {
        marginTop: 5,
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: "200",
    },
    finishedLabel: {
        fontSize: 40,
        fontWeight: "200",
    },
});