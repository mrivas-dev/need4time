export const calculateRemainingTimeText = ({ remainingTime }): string => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return `${minutes !== 0 ? `${addZerosToTime(`${minutes}`)}:` : ''}${addZerosToTime(`${seconds}`)}`;
}

export const calculateElapsedTimeText = ({ elapsedTime }): string => {
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = Math.floor(elapsedTime % 60);
    return `${minutes !== 0 ? `${minutes}:` : ''}${seconds}`;
}

export const addZerosToTime = (time: string): string => `${Number(time) < 10 ? '0' : ''}${time}`;
