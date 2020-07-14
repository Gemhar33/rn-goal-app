import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [showGoalInput, setShowGoalInput] = useState(false);

  function addGoal(newGoal) {
    setGoals(oldGoals => [
      ...oldGoals,
      { value: newGoal, id: Math.random().toString() }
    ]);
    cancelShowGoalInput();
  }
  function handleDelete(id) {
    const filteredGoals = goals.filter(goal => goal.id !== id);
    setGoals(filteredGoals);
  }

  function cancelShowGoalInput() {
    setShowGoalInput(false);
  }

  return (
    <View style={styles.container}>
      <Button
        title="Add New Goal"
        onPress={() => setShowGoalInput(showGoalInput => !showGoalInput)}
      />
      <GoalInput
        addGoal={addGoal}
        visible={showGoalInput}
        handleCancel={cancelShowGoalInput}
      />

      <FlatList
        keyExtractor={item => item.id}
        data={goals}
        renderItem={({ item }) => (
          <GoalItem
            handleDelete={handleDelete}
            title={item.value}
            id={item.id}
          />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 30 }
});
