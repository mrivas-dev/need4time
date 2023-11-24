import { StyleSheet } from "react-native";
import { PRIMARY_BG } from '../../utils/colors';

export const styles = StyleSheet.create({
    top: {
        backgroundColor: PRIMARY_BG,
        position: 'relative',
        marginTop: 55
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    }
});