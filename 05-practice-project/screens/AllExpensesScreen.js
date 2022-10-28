import { View, Text, StyleSheet } from "react-native";
import { ExpenseList } from "../components/ExpenseList";

export default function AllExpensesScreen() {
  return (
    <View style={styles.rootContainer}>
      <ExpenseList />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
