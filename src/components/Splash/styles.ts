import { StyleSheet } from "react-native";
import { PRIMARY_BG } from '../../utils/colors';

export const styles = StyleSheet.create({
    mainWrapper: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    topbarWrapper: {
        flex: 1,
        backgroundColor: PRIMARY_BG,
        zIndex: 1,
    },
    topBarLogoWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 100
    },
    logoWrapper: {
        width: 100,
        height: 100,
        marginBottom: 20
    },
    topBarTitleWrapper: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },
    appWrapper: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.04)',
        zIndex: 0
    }
});
