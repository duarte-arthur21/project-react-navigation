import React, { useState } from "react";
import { Task } from "../../Components/Task";
import { AddTaskForm } from "../../Components/AddTaskForm";
import { StyleSheet, View } from "react-native-web";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([
    { name: "Comprar leite", completed: false },
    { name: "Pagar a conta de luz", completed: false },
    { name: "Ler um livro", completed: true },
  ]);

  function handleTaskCompletion(index) {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
  }

  function handleNewTaskSubmit() {
    const newTasks = { name: task, completed: false };
    setTasks([...tasks, newTasks]);
    console.log("A nova tarefa é:", task);
  }

  return (
    <View style={styles.MyList}>
      <ul>
        {tasks.map((task, index) => (
          <Task
            key={index}
            name={task.name}
            completed={task.completed}
            onCompletion={() => handleTaskCompletion(index)}
          />
        ))}
      </ul>

      <AddTaskForm
        onChangeText={setTask}
        value={task}
        onPress={handleNewTaskSubmit}
      />
    </View>
  );
}

export default TodoList;

const styles = StyleSheet.create({
  MyList: {
    position: "relative",
    justifyContent: " center",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#1ed4d4",
    height: "50rem",
  },
});
