import { StyleSheet, FlatList } from "react-native";
import { ExpenseItem } from "./ExpenseItem";

export default function ExpensesList({ expenses, refreshControl }) {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <ExpenseItem {...itemData.item} />}
      refreshControl={refreshControl}
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
