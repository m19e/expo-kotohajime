import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card } from "react-native-elements";
import moment from "moment";

interface CountdownProps {
    leftSec: number;
    active: boolean;
    start: () => any;
    reset: () => any;
    stop: () => any;
}

const secToMMSS = (sec: number): string => moment.utc(sec * 1000).format("mm:ss");

const CountdownComponent = ({ leftSec, active, start, reset, stop }: CountdownProps): any => (
    <Card>
        <time style={{ fontSize: "160px" }}>{secToMMSS(leftSec)}</time>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", paddingBottom: 30 }}>
            <Button title="Start" onPress={start} disabled={active} style={styles.button} />
            <Button title="Stop" onPress={stop} disabled={!active} style={styles.button} />
            <Button title="Reset" onPress={reset} style={styles.button} />
        </View>
    </Card>
);

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 30,
        padding: 10,
        backgroundColor: "lightgray",
        alignItems: "center",
        justifyContent: "center",
        margin: 3,
    },
});

export default CountdownComponent;
