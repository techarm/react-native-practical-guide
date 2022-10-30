import { createContext, useReducer, useState } from "react";

export const ExpensesContext = createContext({
  items: [],
  addExpense: (expenseData) => {},
  setExpense: (expenseData) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, expenseData) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [{ ...action.payload }, ...state];
    case "SET":
      return action.payload.reverse();
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updateItem = { ...updatableExpense, ...action.payload.data };
      const updateExpenses = [...state];
      updateExpenses[updatableExpenseIndex] = updateItem;
      return updateExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}
export default function ExpenseContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expenseReducer, []);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const setExpense = (expenseData) => {
    dispatch({ type: "SET", payload: expenseData });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  };

  const value = {
    items: expensesState,
    addExpense: addExpense,
    setExpense: setExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}
