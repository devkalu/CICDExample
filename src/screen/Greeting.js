import { SafeAreaView, Text, TextInput } from "react-native";
import React, { useState } from "react";

const Greeting = () => {
  const [name, setName] = useState("");

  return (
    <SafeAreaView>
      <TextInput value={name} onChangeText={(name) => setName(name)} />
      <Text>Greetings {name}, Welcome to CI/CD course.</Text>
    </SafeAreaView>
  );
};

export default Greeting;
