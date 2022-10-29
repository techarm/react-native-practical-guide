import { useContext } from "react";
import { ExpensesContext } from "../store/expense-context";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";

export default function RecentExpenseScreen() {
  const expensesContext = useContext(ExpensesContext);
  const expenses = expensesContext.items;
  return <ExpensesOutput expensesPeriod="Last 7 Days" expenses={expenses} />;
}
