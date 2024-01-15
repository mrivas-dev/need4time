import React from 'react';
import { View } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { styles } from './styles';
import Layout from '../../components/Layout';
import Laps from '../../components/Laps';
import TimeSelector from '../../components/TimeSelector';
import BottomBar from '../../components/BottomBar';

const Emom = ({ navigation }: any) => {

    const [laps, setLaps] = React.useState<number>(0);
    const [duration, setDuration] = React.useState<number>(0);

    const bottomAction = (
        // <IconButton
        //     icon="play"
        //     style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}
        //     size={55}
        //     onPress={
        //         () => navigation.navigate('EmomTimer', {
        //             laps,
        //             duration
        //         })
        //     }
        // />
        <Button mode="contained" onPress={() => navigation.navigate('EmomTimer', {
            laps,
            duration
        })}> Go </Button>
    );
    return (
        <Layout style={styles.container}>
            <View style={styles.container}>
                <Laps onSelectLaps={(newLaps: number) => setLaps(newLaps)} />
                <TimeSelector onTimeSelect={(newDuration) => setDuration(newDuration)} />
            </View>
            <BottomBar bottomAction={bottomAction} />
        </Layout>
    );
}

export default Emom;