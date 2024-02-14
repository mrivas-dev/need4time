import { COUNTDOWN_SOUND, RACE_START_SOUND, RACE_STOP_SOUND } from "../utils/sounds";

export const INITIAL_STATE = {
    alert: {
        setAlert: () => { }
    },
    sound: {
        soundEnabled: true,
        playing: false,
        selectedCountDownSound: COUNTDOWN_SOUND,
        selectedStartSound: RACE_START_SOUND,
        selectedStopSound: RACE_STOP_SOUND,
        setSoundEnabled: () => { },
        setCountDownSound: () => { },
        setStartSound: () => { },
        setStopSound: () => { },
        playDynamicSound: () => { },
        playStartSound: () => { },
        playStopSound: () => { },
        playCountdownSound: () => { },
        stopSound: () => { },
    },
    mode: {
        setDeveloperMode: () => { },
        developerMode: false,
        zenMode: false,
        awakeMode: true,
        setZenMode: () => { },
        setAwakeMode: () => { },
        setLandscapeMode: () => { },
        landscapeMode: false
    },
    timer: {
        maxMinutes: 30,
        setMaxMinutes: () => { },
    }
};
