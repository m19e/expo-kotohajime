import { useState, useEffect } from "react";
import { Audio } from "expo-av";

const useAudio = (filepath: string): [play: () => any, pause: () => any] => {
    const [audio] = useState(new Audio.Sound());
    const [, _forceUpdate] = useState(false);
    const forceUpdate = () => _forceUpdate((prev) => !prev);

    (async () => {
        useEffect(() => {
            (async () => {
                await audio.loadAsync(require("../assets/alarm.mp3"));
                await audio.playAsync();
            })();

            // audio.play();
            // audio.addEventListener("play", forceUpdate);
            // audio.addEventListener("pause", forceUpdate);
            // audio.addEventListener("ended", forceUpdate);
            // audio.addEventListener("timeupdate", forceUpdate);
            return () => {
                (async () => {
                    await audio.unloadAsync();
                })();
                // audio.removeEventListener("play", forceUpdate);
                // audio.removeEventListener("pause", forceUpdate);
                // audio.removeEventListener("ended", forceUpdate);
                // audio.addEventListener("timeupdate", forceUpdate);
            };
        }, []);
    })();

    async function play() {
        await audio.playAsync();
    }
    async function pause() {
        await audio.pauseAsync();
    }
    // const jump = (sec: number) => (audio.currentTime += sec);

    return [play, pause];
};

export default useAudio;
