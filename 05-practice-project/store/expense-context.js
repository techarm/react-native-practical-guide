import { createContext, useState } from "react";

export const ExpensesContext = createContext({
  items: [],
  addExpense: (description, amount, date) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
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

export default function ExpenseContextProvider({ children }) {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpense = (description, amount, date) => {
    const newExpense = {
      id: Math.random().toString(),
      description: description,
      amount: amount,
      date: date,
    };

    setExpenses((prevExpense) => {
      return [newExpense, ...prevExpense];
    });
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpense) => {
      return prevExpense.filter((expense) => expense.id !== id);
    });
  };

  const updateExpense = (id, { description, amount, date }) => {};

  const value = {
    items: expenses,
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
