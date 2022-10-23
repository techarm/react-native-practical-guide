import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

// screen: entire available width and height including the status bar.
// window: entire available width and height excluding the status bar.
const deviceWidth = Dimensions.get("window").width;

const NumberContainer = ({ children, style, textStyle }) => {
  return (
    <View style={styles.rootContainer}>
      <View style={[styles.container, style]}>
        <Text style={[styles.numberText, textStyle]}>{children}</Text>
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
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Colors.accent500,
    backgroundColor: Colors.primary800,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontFamily: "open-sans-bold",
  },
});

export default NumberContainer;
