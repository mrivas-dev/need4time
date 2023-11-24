export interface NeedForTimeContext {
    setSoundEnabled: (param: any) => any;
    setZenMode: (param: boolean) => any;
    setAwakeMode: (param: boolean) => any;
    setDeveloperMode: (param: boolean) => any;
    setCountDownSound: (param: string) => any;
    setStartSound: (param: string) => any;
    soundEnabled: boolean;
    developerMode: boolean;
    zenMode: boolean;
    awakeMode: boolean;
    selectedCountDownSound: string;
    selectedStartSound: string;
    selectedStopSound: string;
};
