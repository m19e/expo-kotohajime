import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
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
    <View style={styles.root}>
        <Text style={styles.time}>{secToMMSS(leftSec)}</Text>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", paddingBottom: 30 }}>
            <Button title={active ? "Stop" : "Start"} onPress={active ? stop : start} buttonStyle={styles.button} />
            <Button title="Reset" onPress={reset} buttonStyle={styles.button} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    root: {
        // width: 250,
        // height: 300,
    },
    button: {
        // backgroundColor: "lightgray",
        // alignItems: "center",
        // justifyContent: "center",
        marginHorizontal: 5,
        paddingHorizontal: 15,
    },
    time: {
        fontSize: 100,
    },
});

export default CountdownComponent;
