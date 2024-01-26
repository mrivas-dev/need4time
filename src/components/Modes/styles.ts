import {
    Dimensions,
    StyleSheet
} from 'react-native';

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
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modeTitle: {
        position: 'absolute',
        top: '45%',
        left: '35%',
    }
});