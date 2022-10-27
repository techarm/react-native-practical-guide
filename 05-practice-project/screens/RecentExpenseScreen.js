import { View, Text, StyleSheet } from "react-native";

export default function RecentExpenseScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text>Recent Expense Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
