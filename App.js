import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Auth from './screens/Auth';
import Home from './screens/Home';
import { NativeBaseProvider, Box } from "native-base";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeApp" component={Home} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    
    <NativeBaseProvider>  
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
