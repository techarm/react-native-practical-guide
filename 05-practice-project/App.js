import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import AllExpensesScreen from "./screens/AllExpensesScreen";
import RecentExpenseScreen from "./screens/RecentExpenseScreen";
import React from "react";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Recent"
            component={RecentExpenseScreen}
            options={{
              tabBarIcon: (color, size) => (
                <Ionicons name="timer" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="All Expenses"
            component={AllExpensesScreen}
            options={{
              tabBarIcon: (color, size) => (
                <Ionicons name="calendar" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
