import React from 'react';
import { Button } from 'react-native-paper';
import Layout from '../../components/Layout';
import Timer from '../../components/Timer';
import { styles } from './styles';
import { Picker } from '@react-native-picker/picker';
import { white } from '../../utils/colors';
import { View } from 'react-native';

const TimerPage = ({ navigation }: any) => {

    const [minutes, setMinutes] = React.useState<number>(0);
    const [seconds, setSeconds] = React.useState<number>(0);


    return (
        <Layout style={styles.container}>
            <View style={{ width: 'auto', display: 'flex', flexDirection: 'row' }}>
                <Picker
                    style={{ display: 'flex', width: '50%' }}
                    itemStyle={{ color: white }}
                    selectedValue={minutes}
                    onValueChange={(itemValue, itemIndex) =>
                        setMinutes(itemValue)
                    }>
                    <Picker.Item label="0" value="0" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="6" value="6" />
                    <Picker.Item label="7" value="7" />
                    <Picker.Item label="8" value="8" />
                    <Picker.Item label="9" value="9" />
                    <Picker.Item label="10" value="10" />

                </Picker>
                <Picker
                    style={{ width: '50%' }}
                    itemStyle={{ color: white }}
                    selectedValue={seconds}
                    onValueChange={(itemValue, itemIndex) =>
                        setSeconds(itemValue)
                    }>
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="15" value="15" />
                    <Picker.Item label="20" value="20" />
                    <Picker.Item label="25" value="25" />
                    <Picker.Item label="30" value="30" />
                    <Picker.Item label="35" value="35" />
                    <Picker.Item label="40" value="40" />
                    <Picker.Item label="45" value="45" />
                    <Picker.Item label="50" value="50" />
                    <Picker.Item label="55" value="55" />
                </Picker>
            </View>
            <View style={{ width: 'auto', display: 'flex', flexDirection: 'row' }}>
                <Timer initialDuration={Number(seconds) + (Number(minutes) * 60)} initialLaps={5} />
            </View>
        </Layout>
    );
}

export default TimerPage;