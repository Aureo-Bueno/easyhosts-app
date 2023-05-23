import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import Booking from '../screens/Booking';
import OrderServices from '../screens/OrderServices';

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Home" component={Home} />
      <AuthStack.Screen name="Booking" component={Booking} />
      <AuthStack.Screen name="OrderServices" component={OrderServices} />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
