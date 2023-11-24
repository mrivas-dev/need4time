import { Audio } from 'expo-av';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../provider';
import { SOUNDS } from '../../utils/sounds';

const WithSound = (Comp: any) => ({ children, ...props }: any) => {
    const [sound, setSound] = useState<any>();
    const [isMakingSound, setMakingSound] = useState<boolean>(false);
    const {
        selectedStopSound,
        selectedCountDownSound,
        selectedStartSound
    } = useContext(AppContext);

    const cleanUpSound = () => {
        sound?.unloadAsync();
        setSound(null);
        setMakingSound(false);
    };

    const onPlayBackStatusUpdate = ({ didJustFinish, shouldPlay }: any): any => {
        if (didJustFinish && shouldPlay) {
            cleanUpSound();
        } else {
            setMakingSound(true);
        }
    }

    const countdownSound = async () => {
        try {
            const { sound } = await Audio.Sound.createAsync(SOUNDS[selectedCountDownSound].sound);
            setSound(sound);
            sound.setOnPlaybackStatusUpdate(onPlayBackStatusUpdate);
            await sound.playAsync();
        }
        catch (err) {
            console.error(`Error in countdownSound, ${err}`);
        }
    };

    const stopSound = async () => {
        try {
            const { sound } = await Audio.Sound.createAsync(SOUNDS[selectedCountDownSound].sound);
            setSound(sound);
            sound.setOnPlaybackStatusUpdate(onPlayBackStatusUpdate);
            await sound.playAsync();
        }
        catch (err) {
            console.error(`Error in stopSound, ${err}`);
        }
    };

    const startSound = async () => {
        try {
            const { sound } = await Audio.Sound.createAsync(SOUNDS[selectedStartSound].sound);
            setSound(sound);
            sound.setOnPlaybackStatusUpdate(onPlayBackStatusUpdate);
            await sound.playAsync();
        }
        catch (err) {
            console.error(`Error in startSound, ${err}`);
        }
    };

    const playSound = async (dinamicSoundKey: string) => {
        try {
            const { sound } = await Audio.Sound.createAsync(SOUNDS[dinamicSoundKey].sound);
            setSound(sound);
            sound.setOnPlaybackStatusUpdate(onPlayBackStatusUpdate);
            await sound.playAsync();
        }
        catch (err) {
            console.error(`Error in playSound, ${err}`);
        }
    };

    useEffect(() => {
        return sound
            ? () => {
                cleanUpSound();
            }
            : undefined;
    }, [sound]);

    return (
        <Comp {...props}
            isMakingSound={isMakingSound}
            playSound={playSound}
            startSound={startSound}
            stopSound={stopSound}
            countdownSound={countdownSound}
            cleanUpSound={cleanUpSound}
        >
            {children}
        </Comp>
    )
}

export default WithSound;