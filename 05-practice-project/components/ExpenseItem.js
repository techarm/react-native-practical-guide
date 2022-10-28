import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

export function ExpenseItem({ title, date, amount }) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.summaryContainer}>
        <Text>{title}</Text>
        <Text>{date}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>{amount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: GlobalStyles.colors.primary500,
    margin: 5,
  },
  summaryContainer: {
    backgroundColor: "green",
    // flex: 1,
    color: GlobalStyles.colors.primary50,
  },
  amountContainer: {
    backgroundColor: "yellow",
    // flex: 1,
  },
  amountText: {
    backgroundColor: "white",
    color: GlobalStyles.colors.primary800,
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 15,
    paddingHorizontal: 12,
    margin: 8,
  },
});
