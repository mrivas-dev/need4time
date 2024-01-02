import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    lapsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 45,
        zIndex: 1
    },
    labelContainer: {
        width: '50%',
        height: 50,
        justifyContent: 'center',
        paddingLeft: 15
    },
    selectorContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        paddingRight: 15
    }
});
