import { useContext } from "react";
import { ExpensesContext } from "../store/expense-context";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { getDateMinusDays } from "../utils/date";

export default function RecentExpenseScreen() {
  const expensesContext = useContext(ExpensesContext);

  const recentExpenses = expensesContext.items.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput expensesPeriod="Last 7 Days" expenses={recentExpenses} />
  );
}
