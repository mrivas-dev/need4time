import React from 'react'
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native';
import { styles } from './styles';
import { white } from '../../utils/colors';
import { Button, Dialog, Portal } from 'react-native-paper';

const TimeSelectorDialog = ({ visible, hideDialog, minutes, setMinutes, seconds, setSeconds, setVisible }) => {

    return (
        <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>Select minutes and seconds</Dialog.Title>
                <Dialog.ScrollArea>
                    <ScrollView contentContainerStyle={styles.dialogSelectorContainer}>
                        <Picker
                            numberOfLines={1}
                            style={{ width: '50%' }}
                            itemStyle={{ color: white }}
                            selectedValue={`${minutes}`}
                            onValueChange={(itemValue) => setMinutes(itemValue)}
                        >
                            {
                                Array.from(Array(101).keys()).map((item, index) => {
                                    return <Picker.Item key={`minutes-${index}`} label={`${item}`} value={index} />
                                })
                            }
                        </Picker>
                        <Picker
                            numberOfLines={1}
                            style={{ width: '50%' }}
                            itemStyle={{ color: white }}
                            selectedValue={`${seconds}`}
                            onValueChange={(itemValue) => setSeconds(itemValue)}>
                            <Picker.Item label="0" value="0" />
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
                    </ScrollView>
                </Dialog.ScrollArea>
                <Dialog.Actions>
                    <Button onPress={() => setVisible(false)}>Ok</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
};

export default TimeSelectorDialog;
