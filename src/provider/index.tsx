import React, { createContext, useEffect, useState } from 'react';
import { Snackbar } from 'react-native-paper';
import { Audio } from 'expo-av';
import { activateKeepAwakeAsync as activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';
import { INITIAL_STATE } from './utils';
import { NeedForTimeContext as MainContextType } from './types';
import { COUNTDOWN_SOUND, RACE_START_SOUND, RACE_STOP_SOUND, SOUNDS } from '../utils/sounds';

export const AppContext = createContext<MainContextType>(INITIAL_STATE);

const AppProvider = ({ children }: any) => {
    const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
    const [zenMode, setZenMode] = useState<boolean>(false);
    const [awakeMode, setAwakeMode] = useState<boolean>(true);
    const [developerMode, setDeveloperMode] = useState<boolean>(false);
    const [selectedStopSound, setStopSound] = useState<string>(RACE_STOP_SOUND);
    const [selectedCountDownSound, setCountDownSound] = useState<string>(COUNTDOWN_SOUND);
    const [selectedStartSound, setStartSound] = useState<string>(RACE_START_SOUND);
    const [landscapeMode, setLandscapeMode] = useState<boolean>(false);
    /* Sound config */
    const [soundTrack, setSoundTrack] = useState<any>();
    const [playing, setPlaying] = useState<boolean>(false);
    /* Timer config */
    const [maxMinutes, setMaxMinutes] = useState<number>(30);
    /* Snack bar */
    const [showMessage, setShowMessage] = React.useState<boolean>(false);
    const [message, setMessage] = React.useState<string>("");

    const hideMessage = () => setShowMessage(false);

    const setAlert = (newMessage: string): void => {
        setMessage(newMessage);
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 1500)
    }

    const stopSound = () => {
        soundTrack?.unloadAsync();
        setSoundTrack(null);
        setPlaying(false);
    };

    const onPlayBackStatusUpdate = ({ didJustFinish, shouldPlay }: any): any => {
        if (didJustFinish && shouldPlay) {
            stopSound();
        } else {
            setPlaying(true);
        }
    }

    const playCountdownSound = async () => {
        try {
            const { sound } = await Audio.Sound.createAsync(SOUNDS[selectedCountDownSound].sound);
            setSoundTrack(sound);
            sound.setOnPlaybackStatusUpdate(onPlayBackStatusUpdate);
            await sound.playAsync();
        }
        catch (err) {
            console.error(`Error in countdownSound, ${err}`);
        }
    };

    const playStopSound = async () => {
        try {
            const { sound } = await Audio.Sound.createAsync(SOUNDS[selectedCountDownSound].sound);
            setSoundTrack(sound);
            sound.setOnPlaybackStatusUpdate(onPlayBackStatusUpdate);
            await sound.playAsync();
        }
        catch (err) {
            console.error(`Error in stopSound, ${err}`);
        }
    };

    const playStartSound = async () => {
        try {
            const { sound } = await Audio.Sound.createAsync(SOUNDS[selectedStartSound].sound);
            setSoundTrack(sound);
            sound.setOnPlaybackStatusUpdate(onPlayBackStatusUpdate);
            await sound.playAsync();
        }
        catch (err) {
            console.error(`Error in startSound, ${err}`);
        }
    };

    const playDynamicSound = async (dinamicSoundKey: string) => {
        try {
            const { sound } = await Audio.Sound.createAsync(SOUNDS[dinamicSoundKey].sound);
            setSoundTrack(sound);
            sound.setOnPlaybackStatusUpdate(onPlayBackStatusUpdate);
            await sound.playAsync();
        }
        catch (err) {
            console.error(`Error in playSound, ${err}`);
        }
    };

    useEffect(() => {
        return soundTrack
            ? () => {
                stopSound();
            }
            : undefined;
    }, [soundTrack]);

    useEffect(() => {
        if (awakeMode) {
            activateKeepAwake();
            setAlert('Screen awake: ON');
        } else {
            deactivateKeepAwake();
            setAlert('Screen awake: OFF');
        }
    }, [awakeMode]);

    useEffect(() => {
        activateKeepAwake()
    }, []);

    return (
        <AppContext.Provider
            value={{
                alert: {
                    setAlert,
                },
                sound: {
                    soundEnabled,
                    playing,
                    selectedCountDownSound,
                    selectedStartSound,
                    selectedStopSound,
                    setSoundEnabled,
                    setCountDownSound,
                    setStartSound,
                    setStopSound,
                    playDynamicSound,
                    playStartSound,
                    playStopSound,
                    playCountdownSound,
                    stopSound
                },
                mode: {
                    setDeveloperMode,
                    developerMode,
                    zenMode,
                    awakeMode,
                    setZenMode,
                    setAwakeMode,
                    landscapeMode,
                    setLandscapeMode
                },
                timer: {
                    maxMinutes,
                    setMaxMinutes
                }
            }}
        >
            {children}
            <Snackbar
                visible={showMessage}
                onDismiss={hideMessage}
                action={{ label: 'Close' }}>
                {message}
            </Snackbar>
        </AppContext.Provider>
    );
};

export default AppProvider;