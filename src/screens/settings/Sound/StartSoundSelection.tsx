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
import WithSound from '../../../hoc/withSound';

const StartSoundSelection = ({
    playSound,
    isMakingSound,
    cleanUpSound,
    soundEffectTitle,
    selected,
    onSelect
}: any) => {
    const [visible, setVisible] = React.useState(false);
    const [effectRunning, setEffectRunning] = React.useState<any>(null);
    const hideDialog = () => setVisible(false);
    return (
        <>
            <List.Item
                title="Start"
                right={(props) => (
                    <TouchableRipple onPress={() => setVisible(true)} rippleColor="rgba(0, 0, 0, .32)">
                        <Card>
                            <Card.Content>
                                <Text>
                                    Start.mp3
                                </Text>
                            </Card.Content>
                        </Card>
                    </TouchableRipple>
                )}
            />
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>
                        Start sound selection
                    </Dialog.Title>
                    <Dialog.Content>
                        <Dialog.ScrollArea>
                            <ScrollView>
                                <List.Section>
                                    {Object.keys(SOUNDS).map((soundKey) => (
                                        <List.Item key={SOUNDS[soundKey].id} title={SOUNDS[soundKey].label} right={
                                            () =>
                                                <Button
                                                    icon={isMakingSound && soundKey === effectRunning ? 'pause' : 'play'}
                                                    onPress={(event) => {
                                                        event.preventDefault();
                                                        cleanUpSound();
                                                        if (!isMakingSound) {
                                                            setEffectRunning(soundKey)
                                                            playSound(soundKey);
                                                        }
                                                    }}
                                                >
                                                    {isMakingSound && soundKey === effectRunning ? 'Playing' : 'Play'}
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

export default WithSound(StartSoundSelection);