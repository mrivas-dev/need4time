import React from 'react';
import {
    Card,
    Dialog,
    List,
    Portal,
    TouchableRipple,
    TextInput
} from 'react-native-paper';
import { AppContext } from '../../../provider';
import { BORDER } from '../../../utils/styles';

const MaxMinutesSelection = () => {
    const [visible, setVisible] = React.useState(false);
    const hideDialog = () => setVisible(false);

    const { timer: { maxMinutes, setMaxMinutes } } = React.useContext(AppContext);

    return (
        <>
            <List.Item
                title="Max minutes"
                right={(props) => (
                    <TouchableRipple onPress={() => setVisible(true)} rippleColor="rgba(0, 0, 0, .32)">
                        <Card>
                            <TextInput
                                mode="outlined"
                                outlineStyle={{
                                    borderTopLeftRadius: BORDER,
                                    borderTopRightRadius: BORDER,
                                    borderTopWidth: BORDER,
                                    borderLeftWidth: BORDER,
                                    borderRightWidth: BORDER,
                                    borderBottomWidth: BORDER,
                                    borderBottomLeftRadius: BORDER,
                                    borderBottomRightRadius: BORDER,
                                    borderColor: 'transparent'
                                }}
                                style={{ width: 100 }}
                                keyboardType="numeric"
                                value={`${maxMinutes}`}
                                onChangeText={text => setMaxMinutes(Number(text))}
                            />

                        </Card>
                    </TouchableRipple>
                )}
            />
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>
                        Set max minutes
                    </Dialog.Title>
                    <Dialog.Content>

                        <TextInput
                            label="Max minutes"
                            keyboardType="numeric"
                            value={`${maxMinutes}`}
                            onChangeText={text => setMaxMinutes(Number(text))}
                        />

                    </Dialog.Content>
                </Dialog>
            </Portal>
        </>
    );
};

export default MaxMinutesSelection;