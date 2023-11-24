import { COUNTDOWN_SOUND, RACE_START_SOUND, RACE_STOP_SOUND } from "../utils/sounds";

export const INITIAL_STATE = {
    setSoundEnabled: () => {},
    setZenMode: () => {},
    setAwakeMode: () => {},
    setDeveloperMode: () => {},
    setCountDownSound: () => {},
    setStartSound: () => {},
    soundEnabled: true,
    developerMode: false,
    zenMode: false,
    awakeMode: false,
    selectedCountDownSound: COUNTDOWN_SOUND,
    selectedStartSound: RACE_START_SOUND,
    selectedStopSound: RACE_STOP_SOUND
};