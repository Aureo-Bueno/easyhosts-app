import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Auth from '../screens/Auth';
import App from '../screens/App';
import Login from '../screens/Login';

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Auth" component={Auth} />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
