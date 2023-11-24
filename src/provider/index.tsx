import { createContext, useEffect, useState } from "react";
import { activateKeepAwakeAsync as activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';
import { INITIAL_STATE } from "./utils";
import { NeedForTimeContext as MainContextType } from "./types";
import { COUNTDOWN_SOUND, RACE_START_SOUND, RACE_STOP_SOUND } from "../utils/sounds";

export const AppContext = createContext<MainContextType>(INITIAL_STATE);

const AppProvider = ({ children }: any) => {
    const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
    const [zenMode, setZenMode] = useState<boolean>(false);
    const [awakeMode, setAwakeMode] = useState<boolean>(false);
    const [developerMode, setDeveloperMode] = useState<boolean>(false);
    const [selectedStopSound, setStopSound] = useState<string>(RACE_STOP_SOUND);
    const [selectedCountDownSound, setCountDownSound] = useState<string>(COUNTDOWN_SOUND);
    const [selectedStartSound, setStartSound] = useState<string>(RACE_START_SOUND);

    useEffect(() => {
        if (awakeMode) {
            activateKeepAwake();
        } else {
            deactivateKeepAwake();
        }
    }, [awakeMode]);

    return (
        <AppContext.Provider
            value={{
                setDeveloperMode,
                setZenMode,
                setAwakeMode,
                setSoundEnabled,
                setCountDownSound,
                setStartSound,
                developerMode,
                soundEnabled,
                zenMode,
                awakeMode,
                selectedCountDownSound,
                selectedStartSound,
                selectedStopSound
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;