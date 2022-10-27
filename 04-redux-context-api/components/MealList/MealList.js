import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

const MealList = ({ data }) => {
  const renderMealItem = (itemData) => {
    return <MealItem mealItem={itemData.item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealList;
