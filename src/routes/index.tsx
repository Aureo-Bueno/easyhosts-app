import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from '../screens/Auth';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import Booking from '../screens/Booking';


const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Auth" component={Auth} />
      <AuthStack.Screen name="Booking" component={Booking} />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
