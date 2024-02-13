import { Dimensions, StyleSheet } from "react-native";
import { PRIMARY_BG } from "../../utils/colors";
import { BORDER, SEPARATOR } from "../../utils/styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bgColor: {
        paddingBottom: SEPARATOR,
        backgroundColor: PRIMARY_BG,
        borderBottomRightRadius: BORDER,
        borderBottomLeftRadius: BORDER,
    },
    homeContainer: {
        paddingBottom: '2%',
    },
});
