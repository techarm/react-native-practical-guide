import { View, Text, StyleSheet } from "react-native";
import { ExpenseItem } from "./ExpenseItem";

export function ExpenseList() {
  return (
    <View style={styles.listContainer}>
      <ExpenseItem
        style={styles.listItem}
        title="Test1"
        date="2022-05-19"
        amount="19.99"
      />
      <ExpenseItem
        style={styles.listItem}
        title="Test2"
        date="2022-05-19"
        amount="19.99"
      />
      <ExpenseItem
        style={styles.listItem}
        title="Test3"
        date="2022-05-19"
        amount="19.99"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  listItem: {
    margin: 20,
    padding: 10,
  },
});
