import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

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
            <Text>Hello, {person.name}.</Text>
            <Button title="Change name" onPress={changePerson} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
