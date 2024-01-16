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
                            selectedValue={minutes}
                            onValueChange={(itemValue) =>
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
                            numberOfLines={1}
                            style={{ width: '50%' }}
                            itemStyle={{ color: white }}
                            selectedValue={seconds}
                            onValueChange={(itemValue) =>
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
