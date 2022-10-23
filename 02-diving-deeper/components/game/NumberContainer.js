import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

// screen: entire available width and height including the status bar.
// window: entire available width and height excluding the status bar.
const deviceWidth = Dimensions.get("window").width;

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
    width: deviceWidth / 2,
    height: deviceWidth / 2,
    borderRadius: deviceWidth / 4,
    borderWidth: 3,
    borderColor: Colors.accent500,
    marginTop: 24,
    backgroundColor: Colors.primary800,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth / 4,
    fontFamily: "open-sans-bold",
  },
});

export default NumberContainer;
