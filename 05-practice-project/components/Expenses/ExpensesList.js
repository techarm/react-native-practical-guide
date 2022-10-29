import { View, Text, StyleSheet, FlatList } from "react-native";
import { ExpenseItem } from "./ExpenseItem";

export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <ExpenseItem {...itemData.item} />}
    />
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
