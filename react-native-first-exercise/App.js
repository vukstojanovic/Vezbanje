import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [currentGoal, setCurrentGoal] = useState("");

  function addGoal() {
    setGoals((prev) => [...prev, currentGoal]);
    setCurrentGoal("");
  }

  return (
    <View style={styles.appContainerStyle}>
      <View style={styles.inputContainerStyle}>
        <TextInput
          placeholder="Enter goal here..."
          style={styles.textInputStyle}
          onChangeText={(text) => setCurrentGoal(text)}
          value={currentGoal}
        />
        <Button title="ADD GOAL" onPress={addGoal} />
      </View>
      <View style={styles.goalsContainerStyle}>
        <ScrollView alwaysBounceVertical={false}>
          {goals.map((goal, index) => {
            return (
              <View key={index} style={styles.singleGoalStyle}>
                <Text style={styles.singleGoalTextStyle}>{goal}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainerStyle: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  inputContainerStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textInputStyle: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  goalsContainerStyle: {
    flex: 4,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
    paddingTop: 20,
  },
  singleGoalStyle: {
    backgroundColor: "purple",
    borderRadius: 6,
    padding: 6,
    marginVertical: 6,
  },
  singleGoalTextStyle: {
    color: "#fff",
  },
});
