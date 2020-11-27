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
        <View style={styles.controls}>
            <Button title={active ? "Stop" : "Start"} onPress={active ? stop : start} buttonStyle={styles.button} titleStyle={styles.buttonText} />
            <Button title="Reset" onPress={reset} buttonStyle={styles.button} titleStyle={styles.buttonText} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    root: {
        justifyContent: "center",
        alignItems: "center",
    },
    controls: {
        flexDirection: "row",
        justifyContent: "center",
    },
    button: {
        width: wp("25%"),
        marginHorizontal: wp("2%"),
        marginTop: hp("15%"),
        paddingHorizontal: wp("5%"),
    },
    buttonText: {
        fontSize: hp("3%"),
    },
    time: {
        fontSize: hp("15%"),
    },
});

export default CountdownComponent;
