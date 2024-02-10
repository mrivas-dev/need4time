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

                            <Picker.Item label="11" value="11" />
                            <Picker.Item label="12" value="12" />
                            <Picker.Item label="13" value="13" />
                            <Picker.Item label="14" value="14" />
                            <Picker.Item label="15" value="15" />
                            <Picker.Item label="16" value="16" />
                            <Picker.Item label="17" value="17" />
                            <Picker.Item label="18" value="18" />
                            <Picker.Item label="19" value="19" />
                            <Picker.Item label="20" value="20" />

                            <Picker.Item label="21" value="21" />
                            <Picker.Item label="22" value="22" />
                            <Picker.Item label="23" value="23" />
                            <Picker.Item label="24" value="24" />
                            <Picker.Item label="25" value="25" />
                            <Picker.Item label="26" value="26" />
                            <Picker.Item label="27" value="27" />
                            <Picker.Item label="28" value="28" />
                            <Picker.Item label="29" value="29" />
                            <Picker.Item label="30" value="30" />
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
