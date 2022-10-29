import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";

export default function RecentExpenseScreen() {
  return <ExpensesOutput expensesPeriod="Last 7 Days" />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
