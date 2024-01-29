import {
    Dimensions,
    StyleSheet
} from 'react-native';
import { BORDER } from '../../utils/styles';

export const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    modeCard: {
        height: Dimensions.get('window').width / 2,
        width: '45%',
        margin: 8,
        backgroundColor: '#E6E6E6',
    },
    modeCardContent: {
        height: '100%',
        width: '100%',
    },
    modeCardCover: {
        width: '100%',
        backgroundColor: '#E6E6E6',
        opacity: 0.6,
    },
    modeTitleWrapper: {
        position: 'absolute',
        height: '15%',
        width: '122%',
        left: 0,
        bottom: 0,
        display: 'flex',
        backgroundColor: '#E6E6E6',
        borderBottomRightRadius: BORDER,
        borderBottomLeftRadius: BORDER
    },
    modeTitle: {
        position: 'absolute',
        bottom: '5%',
        left: '35%',
        color: 'black',
        opacity: 1
    }
});