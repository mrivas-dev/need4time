import { Dimensions, StyleSheet } from "react-native";
import { SEPARATOR } from "../../utils/styles";

export const textContainerStyle = (isLandscape): any => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: isLandscape ? 5 : 10,
    marginBottom: isLandscape ? 5 : 20
});

export const buttonContainerStyle = (isLandscape): any => ({
    display: 'flex',
    alignItems: 'center',
    marginTop: isLandscape ? 0 : SEPARATOR
});

export const styles = StyleSheet.create({
    container: {
        maxHeight: Dimensions.get('window').height - 5,
        height: '100%',
        width: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: SEPARATOR
    },
    selectorContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    goToTimerButton: {
        width: '55%'
    },
});
