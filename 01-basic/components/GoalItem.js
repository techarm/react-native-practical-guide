import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "#f31282",
  },
});

export default GoalItem;
