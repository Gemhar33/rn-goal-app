import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = ({ addGoal, visible, handleCancel }) => {
  const [newGoal, setNewGoal] = useState("");

  function handleInput(text) {
    setNewGoal(text);
  }

  function handleAddGoal() {
    if (newGoal.length > 0) {
      addGoal(newGoal);
      setNewGoal("");
    }
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.innerContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={handleInput}
          value={newGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={handleCancel} />
          </View>

          <View style={styles.button}>
            <Button title="Add" onPress={handleAddGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "60%"
  },
  input: {
    borderColor: "black",
    borderWidth: 0.5,
    padding: 10,
    width: "80%",
    marginBottom: 10,
    borderRadius: 10,
    borderColor: "grey"
  },
  button: {
    width: "40%"
  }
});
export default GoalInput;
