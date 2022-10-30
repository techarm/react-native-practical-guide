import { useContext, useEffect, useState } from "react";
import { RefreshControl } from "react-native";
import { ExpensesContext } from "../store/expense-context";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from "../utils/http";
import LoadingOverLay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

export default function RecentExpenseScreen() {
  const [isFetching, setIsFetching] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState();
  const expensesContext = useContext(ExpensesContext);

  const fetchExpenseData = async () => {
    try {
      const expense = await fetchExpenses();
      expensesContext.setExpense(expense);
    } catch (error) {
      setError("Could not fetch expense data from server");
    }
  };

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true);
      await fetchExpenseData();
      setIsFetching(false);
    };
    getExpenses();
  }, []);

  const errorHandler = () => {
    setError(null);
  };

  const refreshHandler = async () => {
    setRefreshing(true);
    await fetchExpenseData();
    setRefreshing(false);
  };

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isFetching) {
    return <LoadingOverLay />;
  }

  const recentExpenses = expensesContext.items.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expensesPeriod="Last 7 Days"
      expenses={recentExpenses}
      fallback="No expenses registered for the last 7 days."
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refreshHandler} />
      }
    />
  );
}
