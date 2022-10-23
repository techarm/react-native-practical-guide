import { View, Text, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  const renderCategoryItem = ({ item }) => {
    const onPressHandler = () => {
      navigation.navigate("MealsOverview");
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
