import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: Colors.accent500,
    marginTop: 24,
    backgroundColor: Colors.primary800,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 96,
    fontFamily: "open-sans-bold",
  },
});
export default NumberContainer;
