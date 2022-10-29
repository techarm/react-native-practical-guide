import { View, Text, StyleSheet } from "react-native";
import { ExpenseList } from "../components/Expenses/ExpensesList";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";

export default function AllExpensesScreen() {
  return <ExpensesOutput expensesPeriod="Total Expense" />;
}

// const styles = StyleSheet.create({
//   rootContainer: {
//     flex: 1,
//   },
// });
