import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

// const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#3c0a6b" },
          headerTintColor: "white",
          tabBarActiveTintColor: "#3c0a6b",
        }}
      >
        <BottomTab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         screenOptions={{
//           headerStyle: { backgroundColor: "#3c0a6b" },
//           headerTintColor: "white",
//           drawerActiveBackgroundColor: "#f0e1ff",
//           drawerActiveTintColor: "#3c0a6b",
//           drawerStyle: { backgroundColor: "#eee" },
//         }}
//       >
//         <Drawer.Screen
//           name="Welcome"
//           component={WelcomeScreen}
//           options={{
//             drawerLabel: "Welcome Screen",
//             drawerIcon: ({ color }) => (
//               <Ionicons name="home" color={color} size={18} />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="User"
//           component={UserScreen}
//           options={{
//             drawerLabel: "Welcome Screen",
//             drawerIcon: ({ color }) => (
//               <Ionicons name="person" color={color} size={18} />
//             ),
//           }}
//         />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
