import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shose",
    amount: 5.99,
    date: new Date("2022-10-29"),
  },
  {
    id: "e2",
    description: "React Native complete guide",
    amount: 9.9,
    date: new Date("2022-10-25"),
  },
  {
    id: "e3",
    description: "Golang book",
    amount: 42.99,
    date: new Date("2022-10-01"),
  },
  {
    id: "e4",
    description: "A pair of shose",
    amount: 59.99,
    date: new Date("2022-10-29"),
  },
  {
    id: "e5",
    description: "React Native complete guide",
    amount: 39.99,
    date: new Date("2022-10-25"),
  },
  {
    id: "e6",
    description: "Golang book",
    amount: 9.99,
    date: new Date("2022-10-01"),
  },
  {
    id: "e7",
    description: "A pair of shose",
    amount: 59.99,
    date: new Date("2022-10-29"),
  },
  {
    id: "e8",
    description: "React Native complete guide",
    amount: 39.99,
    date: new Date("2022-10-25"),
  },
  {
    id: "e9",
    description: "Golang book",
    amount: 42.99,
    date: new Date("2022-10-01"),
  },
];

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
