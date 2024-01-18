import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Auth from './screens/Auth';
import Home from './screens/Home';
import { NativeBaseProvider, Box } from "native-base";
import Caracterizacion from './screens/Caracterizacion';
import RedPrestadora from './screens/RedPrestadora';
import AdminUsers from './screens/AdminUsers';
import CreateUser from './screens/AdminUsers/CreateUser';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeApp" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="AdminUsers" component={AdminUsers} options={{ headerShown: false }} />
      <Tab.Screen name="Caracterizacion" component={Caracterizacion} options={{ headerShown: false }} />
      <Tab.Screen name="RedPrestadora" component={RedPrestadora} options={{ headerShown: false }} />
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
          <Stack.Screen name="CreateUser" component={CreateUser} options={{ headerShown: true, }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
