interface SoundContext {
    soundEnabled: boolean;
    setSoundEnabled: (param: any) => any;
    setCountDownSound: (param: any) => any;
    selectedCountDownSound: string;
    setStartSound: (param: any) => any;
    selectedStartSound: string;
    setStopSound: (param: any) => any;
    selectedStopSound: string;
    playing: boolean;
    playDynamicSound: (dinamicSoundKey: string) => any;
    playStartSound: () => void;
    playStopSound: () => void;
    playCountdownSound: () => void;
};

interface ModeContext {
    setDeveloperMode: (param: any) => any;
    developerMode: boolean;
    setZenMode: (param: any) => any;
    zenMode: boolean;
    setAwakeMode: (param: any) => any;
    awakeMode: boolean;
};

export interface NeedForTimeContext {
    sound: SoundContext;
    mode: ModeContext;
};
