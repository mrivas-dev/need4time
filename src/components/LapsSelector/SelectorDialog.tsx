import React from 'react'
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native';
import { styles } from './styles';
import { white } from '../../utils/colors';
import { Button, Dialog, Portal } from 'react-native-paper';

const LapsSelectorDialog = ({ visible, hideDialog, laps, setLaps, setVisible }) => {

    return (
        <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>Total minutes</Dialog.Title>
                <Dialog.ScrollArea>
                    <ScrollView contentContainerStyle={styles.dialogSelectorContainer}>
                        <Picker
                            style={{
                                display: 'flex',
                                width: '100%'
                            }}
                            numberOfLines={1}
                            itemStyle={{ color: white, height: 215 }}
                            selectedValue={laps}
                            onValueChange={(itemValue, itemIndex) =>
                                setLaps(itemValue)
                            }>
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
                    </ScrollView>
                </Dialog.ScrollArea>
                <Dialog.Actions>
                    <Button onPress={() => setVisible(false)}>Ok</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
};

export default LapsSelectorDialog;
