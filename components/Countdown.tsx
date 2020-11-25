import React from "react";
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
        <Button title="Start" onPress={start} disabled={active} />
        <Button title="Stop" onPress={stop} disabled={!active} />
        <Button title="Reset" onPress={reset} />
    </Card>
);
