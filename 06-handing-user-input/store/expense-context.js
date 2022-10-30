import { createContext, useReducer, useState } from "react";

export const ExpensesContext = createContext({
  items: [],
  addExpense: (expenseData) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, expenseData) => {},
});

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

function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
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
  const [expensesState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
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
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}
