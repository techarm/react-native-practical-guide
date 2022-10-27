import { View, Text, StyleSheet } from "react-native";

export default function AllExpensesScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text>All Expenses Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
