import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Amplify } from "aws-amplify";
import config from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";

import { HomeScreen, LoginScreen } from "./src";

import signUpConfig from "./src/resources/signupConfigs";

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "#FE9900",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "#D6242D",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="Profile"
          component={LoginScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default withAuthenticator(App, { signUpConfig });
