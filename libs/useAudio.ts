import { useState, useEffect } from "react";

const useAudio = (filepath: string): [playing: boolean, currentTime: number, play: () => any, pause: () => any, jump: (sec: number) => any] => {
    const [audio] = useState(new Audio(filepath));
    const [, _forceUpdate] = useState(false);
    const forceUpdate = () => _forceUpdate((prev) => !prev);

    useEffect(() => {
        audio.play();
        audio.addEventListener("play", forceUpdate);
        audio.addEventListener("pause", forceUpdate);
        audio.addEventListener("ended", forceUpdate);
        audio.addEventListener("timeupdate", forceUpdate);
        return () => {
            audio.removeEventListener("play", forceUpdate);
            audio.removeEventListener("pause", forceUpdate);
            audio.removeEventListener("ended", forceUpdate);
            audio.addEventListener("timeupdate", forceUpdate);
        };
    }, []);

    const play = () => audio.play();
    const pause = () => audio.pause();
    const jump = (sec: number) => (audio.currentTime += sec);

    return [!audio.paused, audio.currentTime, play, pause, jump];
};

export default useAudio;
