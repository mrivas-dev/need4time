export const calculateRemainingTimeText = ({ remainingTime }): string => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

export const calculateElapsedTimeText = ({ elapsedTime }): string => {
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = Math.floor(elapsedTime % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}