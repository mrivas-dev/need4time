import * as React from 'react';
import { ScrollView } from 'react-native';
import {
    Card,
    Dialog,
    List,
    Button,
    Portal,
    Text,
    TouchableRipple
} from 'react-native-paper';
import { SOUNDS } from '../../../utils/sounds';
import { AppContext } from '../../../provider';

const CountdownSoundSelection = ({
    soundEffectTitle,
    selected,
    onSelect
}: any) => {
    const [visible, setVisible] = React.useState(false);
    const [effectRunning, setEffectRunning] = React.useState<any>(null);
    const hideDialog = () => setVisible(false);

    const { sound: { playing, stopSound, playDynamicSound } } = React.useContext(AppContext);

    return (
        <>
            <List.Item
                title="Countdown"
                right={(props) => (
                    <TouchableRipple onPress={() => setVisible(true)} rippleColor="rgba(0, 0, 0, .32)">
                        <Card>
                            <Card.Content>
                                <Text>
                                    CountDown.mp3
                                </Text>
                            </Card.Content>
                        </Card>
                    </TouchableRipple>
                )}
            />
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>
                        Countdown sound selection
                    </Dialog.Title>
                    <Dialog.Content>
                        <Dialog.ScrollArea>
                            <ScrollView>
                                <List.Section>
                                    {Object.keys(SOUNDS).map((soundKey, i) => (
                                        <List.Item key={`${SOUNDS[soundKey].id}-${i}`} title={SOUNDS[soundKey].label} right={
                                            () =>
                                                <Button
                                                    icon={playing && soundKey === effectRunning ? 'pause' : 'play'}
                                                    onPress={(event) => {
                                                        event.preventDefault();
                                                        stopSound();
                                                        if (!playing) {
                                                            setEffectRunning(soundKey)
                                                            playDynamicSound(soundKey);
                                                        }
                                                    }}
                                                >
                                                    {playing && soundKey === effectRunning ? 'Playing' : 'Play'}
                                                </Button>
                                        }
                                        />
                                    ))}
                                </List.Section>
                            </ScrollView>
                        </Dialog.ScrollArea>
                    </Dialog.Content>
                </Dialog>
            </Portal>
        </>
    );
};

export default CountdownSoundSelection;