import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Button, Input } from "react-native-elements";

const initialState = {
    name: "Akiho",
    age: 16,
};

export default function App() {
    const [person, setPerson] = useState(initialState);

    const showAlert = () => {
        alert("display alert");
        console.log("print log on console");
    };

    const changePerson = () => {
        setPerson({
            name: "Akiha",
            age: 15,
        });
    };

    return (
        <View style={styles.container}>
            <FormSample />
            <StatusBar style="auto" />
        </View>
    );
}

const Hello = (props: { [key: string]: string }) => <Text>Hello, {props.to}!</Text>;

const FormSample = () => {
    const [text, setText] = useState("placeholder");

    return (
        <Card>
            <Input value={text} label="text" errorMessage="error" onChangeText={(t) => setText(t)} />
            <Button title="Entry" buttonStyle={{ marginTop: 30, borderRadius: 20 }} onPress={() => alert(text)} />
        </Card>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
