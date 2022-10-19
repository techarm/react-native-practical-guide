import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalItemtext) => {
    setCourseGoals((prevcourseGoals) => [
      ...prevcourseGoals,
      {
        id: Math.random().toString(),
        text: goalItemtext,
      },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddItem={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          alwaysBounceVertical="false"
          keyExtractor={(item, index) => item.id}
          renderItem={(itemData) => <GoalItem text={itemData.item.text} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
