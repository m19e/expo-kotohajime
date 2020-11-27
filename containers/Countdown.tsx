import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import CountdownComponent from "../components/Countdown";
import useAudio from "../libs/useAudio";

const useCountdown = (limit: number, span: number): any => {
    const [leftSec, setLeftSec] = useState(limit);
    const [timerObj, setTimerObj]: any = useState("");
    const [active, setActive] = useState(false);
    const [relax, setRelax] = useState(false);
    const [play, pause] = useAudio("https://raw.githack.com/m19e/expo-kotohajime/master/assets/alarm.mp3");

    const setCountdown = () => {
        if (!active) {
            setTimerObj(
                setInterval(() => {
                    setLeftSec((prev: number) => prev - 1);
                }, 1000)
            );
        }
    };

    const afterTimeup = (left: number) => {
        if (left <= 0) {
            play();
            setRelax((prev) => !prev);
            setLeftSec(() => (relax ? span : limit));
        }
    };

    const reset = () => {
        setLeftSec(limit);
    };

    const stop = () => {
        setActive(false);
        clearInterval(timerObj);
    };

    const start = () => {
        if (!active) {
            clearInterval(timerObj);
            setCountdown();
            setActive(true);
        }
    };

    useEffect(() => {
        setCountdown();
        setActive(true);
    }, []);

    useEffect(() => {
        afterTimeup(leftSec);
    }, [leftSec]);

    return [
        [leftSec, active],
        [reset, stop, start],
    ];
};

const CountdownContainer = () => {
    const TIMER = 60 * 25;
    const SPAN = 60 * 5;
    const [[leftSec, active], [reset, stop, start]] = useCountdown(TIMER, SPAN);

    return (
        <View style={styles.container}>
            <CountdownComponent leftSec={leftSec} active={active} reset={reset} stop={stop} start={start} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default CountdownContainer;
