import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Auth from '../screens/Auth';
import App from '../screens/App';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Auth" component={Auth} />
    </AuthStack.Navigator>
  );
}

function AppRoutes() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

function RootRoutes() {
  return (
    // <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Navigator>
      <Stack.Screen name="App" component={App} />
      <Stack.Screen name="Auth" component={Auth} />
    </Stack.Navigator>
  );
}

export default AuthRoutes;
