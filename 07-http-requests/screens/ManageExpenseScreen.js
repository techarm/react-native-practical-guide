import { useContext, useLayoutEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/UI/IconButton";
import { ExpensesContext } from "../store/expense-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { storeExpense, updateExpense, deleteExpense } from "../utils/http";
import LoadingOverLay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

export default function ManageExpenseScreen({ route, navigation }) {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [error, setError] = useState(null);
  const expenseContext = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expenseContext.items.find(
    (expense) => expense.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const deleteHandler = async () => {
    setIsSubmiting(true);
    try {
      await deleteExpense(editedExpenseId);
      expenseContext.deleteExpense(editedExpenseId);
      // setIsSubmiting(false);
      navigation.goBack();
    } catch (error) {
      setError("Could not delete expense - please try again later.");
      setIsSubmiting(false);
    }
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = async (expenseData) => {
    setIsSubmiting(true);
    try {
      if (isEditing) {
        await updateExpense(editedExpenseId, expenseData);
        expenseContext.updateExpense(editedExpenseId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        expenseContext.addExpense({ ...expenseData, id: id });
      }
      // setIsSubmiting(false);
      navigation.goBack();
    } catch (error) {
      setError(
        `Count not ${
          isEditing ? "update" : "add"
        } data - please try again later.`
      );
      setIsSubmiting(false);
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  if (error && !isSubmiting) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isSubmiting) {
    return <LoadingOverLay />;
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />
      {isEditing && (
        <View style={styles.deleteOutterContainer}>
          <View style={styles.deleteInnerContainer}>
            <IconButton
              icon="trash"
              color={GlobalStyles.colors.error500}
              size={36}
              onPress={deleteHandler}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteOutterContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  deleteInnerContainer: {
    width: "80%",
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
