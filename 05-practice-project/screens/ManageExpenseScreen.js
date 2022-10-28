import { View, Text, StyleSheet } from "react-native";

export default function ManageExpenseScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text>Manage Expense Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
