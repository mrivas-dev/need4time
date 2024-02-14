import {
    Dimensions,
    StyleSheet
} from 'react-native';
import { BORDER } from '../../utils/styles';

export const modeCardStyles = (isLandscapeMode: boolean): any => ({
    width: Dimensions.get('window').width / 2.5,
    marginVertical: 5,
    marginHorizontal: 10,
    height: (Dimensions.get('window').height / (isLandscapeMode ? 2 : 3)) - 25,
    maxHeight: 250,
    backgroundColor: '#E6E6E6',
    overflow: 'hidden',
});

export const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingTop: '5%',
        maxHeight: Dimensions.get('window').height - 5,
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