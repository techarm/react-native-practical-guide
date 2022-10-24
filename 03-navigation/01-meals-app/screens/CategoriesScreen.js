import { View, Text, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  // FlatList renderItem
  const renderCategoryItem = ({ item }) => {
    const onPressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: item.id,
      });
    };

    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={onPressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
