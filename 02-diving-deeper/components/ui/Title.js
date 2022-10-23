import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const Title = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary800,
    paddingBottom: 8,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 32,
    color: Colors.primary800,
    textAlign: "center",
  },
});

export default Title;
