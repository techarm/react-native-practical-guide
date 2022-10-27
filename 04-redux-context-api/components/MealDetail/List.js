import { View, Text, StyleSheet } from "react-native";

const List = ({ data, stepNumber }) => {
  return data.map((item, index) => (
    <View style={styles.listItem} key={item}>
      <View style={styles.itemTextContainer}>
        {stepNumber && <Text style={styles.itemStep}>{index + 1}</Text>}
        <Text style={styles.itemText}>{item}</Text>
      </View>
    </View>
  ));
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemTextContainer: {
    flexDirection: "row",
  },
  itemStep: {
    borderWidth: 1,
    borderColor: "#351401",
    borderRadius: 10,
    width: 20,
    height: 20,
    textAlign: "center",
    marginRight: 10,
  },
  itemText: {
    flex: 1,
    color: "#351401",
    // textAlign: "center",
  },
});

export default List;
