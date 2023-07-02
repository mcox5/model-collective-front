import { StatusBar } from 'expo-status-bar';
import { Text, View, AppLoading, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens";
import { withExpoSnack } from 'nativewind';
import { Provider } from "react-redux";
import { store } from './store';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
