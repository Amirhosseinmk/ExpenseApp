import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageExpense from "./screens/ManageExpense";
import RecentExpense from "./screens/RecentExpense";
import AllExpense from "./screens/AllExpense";
import { Ionicons } from "@expo/vector-icons";
import ButtonIcons from "./components/UI/Icon";
import ExpenseProvider from "../contex/ExpenseCtx"

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
//Since we want to use both navigator work together we have to use nesting navigator

function NestingNavigator() {
  return (
    <BottomTabs.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {
          backgroundColor: "#3e04c3",
        },
        headerTintColor: "white",
        tabBarActiveTintColor: "#f7bc0c",
        tabBarStyle: { backgroundColor: "#3e04c3" },
        headerRight:() => (<ButtonIcons color={"white"} size={29} name={"add"} onPress={() => {
          navigation.navigate("ManageExpense")
        }}/>),
      
    })}
    > 
      <BottomTabs.Screen
        name="RecentExpense"
        component={RecentExpense}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen name="AllExpense" component={AllExpense} options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" color={color} size={size} />
          ),
        }}
      /> 
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ExpenseContex.Provider>
      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          headerStyle:{ backgroundColor:"#3e04c3"},
          headerTintColor:"white"
        }}>
          <Stack.Screen
            name="Nesting"
            component={NestingNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ManageExpense" component={ManageExpense} options={{presentation: 'modal'}} />
        </Stack.Navigator>
      </NavigationContainer>
      </ExpenseContex.Provider>
    </>
  );
}
