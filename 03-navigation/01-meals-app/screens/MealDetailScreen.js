import { View, Text } from "react-native";

const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;

  return (
    <View>
      <Text>{mealId}</Text>
    </View>
  );
};

export default MealDetailScreen;
