import { COUNTDOWN_SOUND, RACE_START_SOUND, RACE_STOP_SOUND } from "../utils/sounds";

export const INITIAL_STATE = {
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
    },
    mode: {
        setDeveloperMode: () => { },
        developerMode: false,
        zenMode: false,
        awakeMode: false,
        setZenMode: () => { },
        setAwakeMode: () => { },
    },

};
