import {
    Dimensions,
    StyleSheet
} from 'react-native';
import { BORDER } from '../../utils/styles';

const isLandscape = Dimensions.get('window').width > Dimensions.get('window').height;

export const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingTop: '5%',
        maxHeight: isLandscape ? Dimensions.get('window').height - 5 : '100%',
    },

    modeCard: {
        width: Dimensions.get('window').width / 2.5,
        marginVertical: 5,
        marginHorizontal: 10,
        height: (Dimensions.get('window').height / (isLandscape ? 2 : 3)) - 25,
        maxHeight: 250,
        backgroundColor: '#E6E6E6',
        overflow: 'hidden',
    },
    modeCardCover: {
        height: 350,
        opacity: 0.7,
    },

    modeTitleWrapper: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        display: 'flex',
        backgroundColor: '#E6E6E6',
        borderBottomRightRadius: BORDER,
        borderBottomLeftRadius: BORDER
    },
    modeTitle: {
        position: 'absolute',
        bottom: '55%',
        left: '35%',
        color: 'black',
        opacity: 1
    }
});